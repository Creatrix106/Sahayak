"""Route: POST /simplify — powers the Report Simplifier page."""

from fastapi import APIRouter, File, UploadFile

from app.models.schemas import ReportSummary
from app.services.gemini_service import simplify_report
from app.utils.validators import read_and_validate_report_file

router = APIRouter(tags=["Report Simplifier"])


@router.post(
    "/simplify",
    response_model=ReportSummary,
    summary="Simplify an uploaded medical report",
)
async def simplify(file: UploadFile = File(..., description="PDF, JPG, JPEG or PNG medical report")):
    file_bytes, mime_type = await read_and_validate_report_file(file)
    return simplify_report(file_bytes, mime_type)
