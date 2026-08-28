"""
Sahayak backend — FastAPI application entrypoint.

Run with:
    uvicorn app.main:app --reload

or simply:
    python run.py
"""

import logging

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.core.config import settings
from app.routers import chat, report, symptoms

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("sahayak")

app = FastAPI(
    title=settings.APP_NAME,
    description=(
        "Backend API for Sahayak — powers the Report Simplifier, "
        "Symptom Analyser, and Sahayak AI chat widget using the Gemini API."
    ),
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(report.router)
app.include_router(symptoms.router)
app.include_router(chat.router)


@app.get("/", tags=["Health"], summary="Health check")
async def root():
    return {
        "status": "ok",
        "service": settings.APP_NAME,
        "message": "Sahayak backend is running. See /docs for the API reference.",
    }


@app.get("/health", tags=["Health"], summary="Detailed health check")
async def health():
    return {
        "status": "ok",
        "gemini_configured": bool(settings.GEMINI_API_KEY),
        "gemini_model": settings.GEMINI_MODEL,
    }


@app.exception_handler(Exception)
async def unhandled_exception_handler(request: Request, exc: Exception):
    """Catch-all so unexpected errors never leak stack traces to the client."""
    if isinstance(exc, HTTPException):
        # Already handled by FastAPI but take no chance lolu
        raise exc
    logger.exception("Unhandled error while processing %s", request.url.path)
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error. Please try again later."},
    )
