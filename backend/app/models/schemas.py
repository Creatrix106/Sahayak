

from typing import List

from pydantic import BaseModel, Field


# POST /simplify  (Report Simplifier)
class ReportSummary(BaseModel):
    title: str = Field(..., description="Short, friendly title for the report, e.g. 'Complete Blood Count Report'.")
    summary: str = Field(..., description="2-5 sentence plain-language summary of the report.")
    findings: List[str] = Field(default_factory=list, description="Key findings / values as short bullet points.")
    advice: str = Field(..., description="General, non-diagnostic advice and suggested next steps.")


# POST /analyse-symptoms  (Symptom Analyser)

class SymptomsRequest(BaseModel):
    symptoms: List[str] = Field(..., min_length=1, description="List of self-reported symptoms.")


class OtherCondition(BaseModel):
    name: str = Field(..., description="Name of the possible condition.")
    description: str = Field(..., description="One line description of why it's relevant.")


class SymptomAnalysis(BaseModel):
    condition: str = Field(..., description="Single most likely, common, non-emergency condition.")
    confidence: int = Field(..., ge=0, le=100, description="Confidence percentage (0-100).")
    icon: str = Field(default="🩺", description="A single emoji representing the condition.")
    status: str = Field(default="Analysis Complete")
    disclaimer: str = Field(
        default="This is a possibility, for confirmation consult a doctor."
    )
    otherConditions: List[OtherCondition] = Field(
        default_factory=list, description="3-4 other possible conditions to consider."
    )



# POST /chat  (Sahayak AI widget)

class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, description="The user's chat message.")


class ChatResponse(BaseModel):
    reply: str = Field(..., description="Sahayak AI's reply.")
