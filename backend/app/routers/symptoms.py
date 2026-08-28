"""Route: POST /analyse-symptoms — powers the Symptom Analyser page."""

from fastapi import APIRouter, HTTPException

from app.models.schemas import SymptomAnalysis, SymptomsRequest
from app.services.gemini_service import analyse_symptoms

router = APIRouter(tags=["Symptom Analyser"])


@router.post(
    "/analyse-symptoms",
    response_model=SymptomAnalysis,
    summary="Analyse a list of symptoms",
)
async def analyse(payload: SymptomsRequest):
    symptoms = [s.strip() for s in payload.symptoms if s.strip()]
    if not symptoms:
        raise HTTPException(status_code=400, detail="Please provide at least one symptom.")
    return analyse_symptoms(symptoms)
