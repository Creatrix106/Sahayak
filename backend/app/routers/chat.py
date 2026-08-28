"""Route: POST /chat — powers the floating Sahayak AI chat widget."""

from fastapi import APIRouter, HTTPException

from app.models.schemas import ChatRequest, ChatResponse
from app.services.gemini_service import chat_reply

router = APIRouter(tags=["Sahayak AI Chat"])


@router.post(
    "/chat",
    response_model=ChatResponse,
    summary="Send a message to the Sahayak AI chat assistant",
)
async def chat(payload: ChatRequest):
    message = payload.message.strip()
    if not message:
        raise HTTPException(status_code=400, detail="Message cannot be empty.")
    return chat_reply(message)
