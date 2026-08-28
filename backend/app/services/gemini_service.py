
import json
import logging
from typing import List, Optional

from fastapi import HTTPException
from google import genai
from google.genai import types

from app.core.config import settings
from app.models.schemas import ChatResponse, ReportSummary, SymptomAnalysis

logger = logging.getLogger("sahayak.gemini")

_client: Optional[genai.Client] = None


def get_client() -> genai.Client:
    """Lazily create (and cache) the Gemini client.

    Raises a clear HTTP 500 if the API key hasn't been configured, instead
    of letting the SDK throw an opaque error deep in a request.
    """
    global _client
    if not settings.GEMINI_API_KEY:
        raise HTTPException(
            status_code=500,
            detail=(
                "GEMINI_API_KEY is not configured on the server. "
                "Copy backend/.env.example to backend/.env and add your key "
                "from https://aistudio.google.com/apikey"
            ),
        )
    if _client is None:
        _client = genai.Client(api_key=settings.GEMINI_API_KEY)
    return _client


def _extract_json(raw_text: str) -> dict:
    """Defensively parse a JSON object out of a Gemini text response.

    response_mime_type="application/json" should already guarantee clean
    JSON, but we strip accidental markdown fences just in case a model
    ever wraps its answer in ```json ... ``` .
    """
    text = (raw_text or "").strip()
    if text.startswith("```"):
        text = text.strip("`")
        if text.lower().startswith("json"):
            text = text[4:]
        text = text.strip()

    try:
        return json.loads(text)
    except json.JSONDecodeError as exc:
        logger.error("Could not parse Gemini JSON response: %s", text[:500])
        raise HTTPException(
            status_code=502,
            detail="The AI service returned an unexpected response. Please try again.",
        ) from exc



# Prompts


REPORT_SYSTEM_PROMPT = """\
You are the AI engine behind "Report Simplifier", a feature of the Sahayak \
health-assistant app. A user uploads a medical document (a lab report, \
prescription, scan report, or similar) as a PDF or image.

Your job, given the document:
1. Write a short, friendly "title" for it (e.g. "Complete Blood Count Report").
2. Write a "summary": 2-5 sentences in plain, everyday language a person \
with no medical background can understand. Avoid unexplained jargon.
3. Write "findings": a list of short bullet points covering the key values \
or observations in the report. Call out anything outside the normal/reference \
range in plain language (e.g. "Hemoglobin is a bit low, which can cause tiredness").
4. Write "advice": general, non-diagnostic guidance on sensible next steps \
(rest, hydration, lifestyle tips, when it's worth seeing a doctor). Never \
state a definitive diagnosis, never name specific prescription drugs or \
dosages, and always encourage the user to confirm anything concerning with \
a licensed doctor.

If the file doesn't look like a medical report at all, say that plainly in \
"summary" and keep "findings" empty and "advice" focused on re-uploading the \
correct document, rather than inventing information.

Respond ONLY with JSON matching the provided schema."""

SYMPTOM_SYSTEM_PROMPT = """\
You are the AI engine behind "Symptom Analyser", a feature of the Sahayak \
health-assistant app. A user provides a list of self-reported symptoms.

Given the symptoms:
1. "condition": name the single most likely, common, everyday explanation \
(e.g. "Common Cold", "Seasonal Flu", "Tension Headache", "Viral Fever"). \
Prefer common, low-severity explanations over rare or severe ones, unless \
the combination of symptoms is genuinely alarming.
2. "confidence": an honest, calibrated 0-100 integer. Symptom-only \
self-assessment is inherently uncertain, so avoid extreme values (typically \
somewhere in the 40-80 range) unless the symptom set is very specific.
3. "icon": a single emoji that fits the condition (e.g. "🤒", "🤧", "🩺").
4. "status": always "Analysis Complete".
5. "disclaimer": a short one-sentence reminder that this is a possibility, \
not a diagnosis, and a doctor should confirm — adapt the wording slightly \
if the symptoms sound urgent/severe, telling the user to seek prompt care.
6. "otherConditions": 3-4 other plausible conditions, each with a "name" and \
a one-line "description" of why it's worth considering.

Never suggest specific medication names or dosages. Never claim certainty. \
If the symptoms described could indicate a medical emergency (e.g. chest \
pain, difficulty breathing, severe bleeding, stroke signs), make sure the \
"disclaimer" clearly urges seeking immediate medical attention.

Respond ONLY with JSON matching the provided schema."""

CHAT_SYSTEM_PROMPT = """\
You are "Sahayak AI", a warm, friendly, and reassuring health-information \
assistant embedded as a chat widget inside the Sahayak app. Sahayak also \
offers a Report Simplifier and a Symptom Analyser elsewhere in the app — you \
can mention those if relevant, but you don't have access to their results.

Guidelines:
- Answer general health, wellness, and app-usage questions in simple, \
everyday language.
- Keep replies short and conversational (a few sentences), since this is a \
chat bubble, not a long-form article.
- Be empathetic, never dismissive, and never judgmental.
- You are not a doctor: never give a definitive diagnosis, never recommend \
specific prescription drugs or dosages, and never contradict a real \
clinician's advice.
- For anything that sounds urgent or severe (e.g. chest pain, difficulty \
breathing, severe bleeding, suicidal thoughts), gently but clearly advise \
seeking immediate medical help or emergency services rather than continuing \
the chat.
- If a question is unrelated to health or the app, you can still answer \
briefly and helpfully."""



# Public service functions


def simplify_report(file_bytes: bytes, mime_type: str) -> ReportSummary:
    """Send a medical report (PDF/JPEG/PNG bytes) to Gemini and get back a
    structured, plain-language summary."""
    client = get_client()

    try:
        response = client.models.generate_content(
            model=settings.GEMINI_MODEL,
            contents=[
                types.Part.from_bytes(data=file_bytes, mime_type=mime_type),
                "Analyse this medical report and follow the system instructions exactly.",
            ],
            config=types.GenerateContentConfig(
                system_instruction=REPORT_SYSTEM_PROMPT,
                response_mime_type="application/json",
                response_schema=ReportSummary,
                temperature=0.4,
            ),
        )
    except HTTPException:
        raise
    except Exception as exc:  # noqa: BLE001 - surface all SDK errors as 502s
        logger.exception("Gemini call failed for /simplify")
        raise HTTPException(status_code=502, detail=f"Failed to analyse the report: {exc}") from exc

    data = _extract_json(response.text)
    return ReportSummary.model_validate(data)


def analyse_symptoms(symptoms: List[str]) -> SymptomAnalysis:
    """Send a list of symptoms to Gemini and get back a structured
    likely-condition analysis."""
    client = get_client()

    prompt = "Symptoms reported by the user:\n" + "\n".join(f"- {s}" for s in symptoms)

    try:
        response = client.models.generate_content(
            model=settings.GEMINI_MODEL,
            contents=prompt,
            config=types.GenerateContentConfig(
                system_instruction=SYMPTOM_SYSTEM_PROMPT,
                response_mime_type="application/json",
                response_schema=SymptomAnalysis,
                temperature=0.4,
            ),
        )
    except HTTPException:
        raise
    except Exception as exc:  # noqa: BLE001
        logger.exception("Gemini call failed for /analyse-symptoms")
        raise HTTPException(status_code=502, detail=f"Failed to analyse symptoms: {exc}") from exc

    data = _extract_json(response.text)
    return SymptomAnalysis.model_validate(data)


def chat_reply(message: str) -> ChatResponse:
    """Send a single chat message to Gemini and get back a plain-text reply."""
    client = get_client()

    try:
        response = client.models.generate_content(
            model=settings.GEMINI_MODEL,
            contents=message,
            config=types.GenerateContentConfig(
                system_instruction=CHAT_SYSTEM_PROMPT,
                temperature=0.6,
            ),
        )
    except HTTPException:
        raise
    except Exception as exc:  # noqa: BLE001
        logger.exception("Gemini call failed for /chat")
        raise HTTPException(status_code=502, detail=f"Failed to get a reply: {exc}") from exc

    reply_text = (response.text or "").strip() or "Sorry, I couldn't come up with a reply. Please try again."
    return ChatResponse(reply=reply_text)
