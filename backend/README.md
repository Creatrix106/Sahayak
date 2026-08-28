# Sahayak Backend

FastAPI backend for **Sahayak** — a health-assistant web app. It powers the
three AI features of the [frontend](../frontend): the Report Simplifier, the
Symptom Analyser, and the floating "Sahayak AI" chat widget, all using
Google's **Gemini API**.

## ✨ What it does

| Frontend page / component        | Endpoint               | What it does                                                        |
| --------------------------------- | ----------------------- | --------------------------------------------------------------------- |
| Report Simplifier                 | `POST /simplify`        | Accepts an uploaded PDF/JPG/PNG medical report, returns a plain-language summary, key findings, and general advice. |
| Symptom Analyser                  | `POST /analyse-symptoms`| Accepts a list of symptoms, returns a likely condition + confidence + other possibilities to consider. |
| Sahayak AI (chat bubble)          | `POST /chat`             | Accepts a chat message, returns a conversational reply.               |

All three call Gemini under the hood via [`google-genai`](https://pypi.org/project/google-genai/),
Google's official Python SDK.

## 📁 Project structure

```
backend/
├── app/
│   ├── main.py                # FastAPI app: CORS, routers, health checks
│   ├── core/
│   │   └── config.py           # Settings loaded from .env
│   ├── models/
│   │   └── schemas.py          # Pydantic request/response models
│   ├── routers/
│   │   ├── report.py           # POST /simplify
│   │   ├── symptoms.py         # POST /analyse-symptoms
│   │   └── chat.py             # POST /chat
│   ├── services/
│   │   └── gemini_service.py   # All Gemini API calls + prompts live here
│   └── utils/
│       └── validators.py       # File type/size validation
├── run.py                      # `python run.py` convenience entrypoint
├── requirements.txt
├── .env.example                # Copy to .env and fill in your key
└── .gitignore
```

## 🚀 Getting started

### 1. Prerequisites

- Python 3.10+
- A free Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey)

### 2. Set up a virtual environment

```bash
cd backend
python -m venv venv

# macOS / Linux
source venv/bin/activate

# Windows (PowerShell)
venv\Scripts\Activate.ps1
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure your environment

```bash
cp .env.example .env
```

Then open `.env` and paste in your key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 5. Run the server

```bash
python run.py
```

or, equivalently:

```bash
uvicorn app.main:app --reload
```

The API will be available at **http://localhost:8000**, matching the URLs
already hardcoded in the frontend (`http://localhost:8000` and
`http://127.0.0.1:8000`).

Interactive API docs (Swagger UI) are available at **http://localhost:8000/docs**,
and ReDoc at **http://localhost:8000/redoc**.

### 6. Run the frontend against it

In a separate terminal:

```bash
cd ../frontend
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) — Report
Simplifier, Symptom Analyser, and the Sahayak AI chat bubble should now be
fully functional.

## 🔌 API reference

### `POST /simplify`

`multipart/form-data` with a single field `file` (PDF, JPG, JPEG, or PNG, up
to `MAX_UPLOAD_MB`, default 15MB).

```json
{
  "title": "Complete Blood Count Report",
  "summary": "Your blood test looks mostly normal...",
  "findings": [
    "Hemoglobin is slightly below the normal range.",
    "White blood cell count is within normal limits."
  ],
  "advice": "Consider iron-rich foods and follow up with your doctor if you feel unusually tired."
}
```

### `POST /analyse-symptoms`

```json
{ "symptoms": ["Fever", "Headache", "Body ache"] }
```

Response:

```json
{
  "condition": "Viral Fever",
  "confidence": 65,
  "icon": "🤒",
  "status": "Analysis Complete",
  "disclaimer": "This is a possibility, for confirmation consult a doctor.",
  "otherConditions": [
    { "name": "Common Cold", "description": "Similar symptoms, usually milder." },
    { "name": "Dengue", "description": "Consider if you're in a high-risk area with body ache and high fever." }
  ]
}
```

### `POST /chat`

```json
{ "message": "What should I do for a mild headache?" }
```

Response:

```json
{ "reply": "For a mild headache, rest in a quiet, dim room, stay hydrated..." }
```

### `GET /health`

Quick check that the server is up and whether `GEMINI_API_KEY` is configured.

## ⚙️ Configuration reference (`.env`)

| Variable          | Default                                     | Description                                                       |
| ------------------ | -------------------------------------------- | ------------------------------------------------------------------- |
| `GEMINI_API_KEY`   | *(required)*                                 | Your Gemini API key.                                                |
| `GEMINI_MODEL`     | `gemini-flash-latest`                        | Model used for all three features. Pin to e.g. `gemini-3.5-flash` for reproducible behaviour. |
| `ALLOWED_ORIGINS`  | `http://localhost:5173,http://127.0.0.1:5173`| Comma separated list of origins allowed by CORS.                    |
| `MAX_UPLOAD_MB`    | `15`                                          | Max report file size accepted by `/simplify`.                       |

## 🩺 Safety notes

Gemini is prompted to give general, plain-language information — not a
diagnosis. Every response includes a disclaimer to consult a licensed
doctor, and the prompts explicitly avoid naming specific prescription drugs
or dosages. This app is an informational aid, **not** a substitute for
professional medical advice.


-