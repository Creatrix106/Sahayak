"""Small validation helpers shared by routers."""

from fastapi import HTTPException, UploadFile

from app.core.config import settings

# Matches the `accept` attribute on the frontend's <UploadBox /> component.
ALLOWED_REPORT_MIME_TYPES = {
    "application/pdf": "application/pdf",
    "image/jpeg": "image/jpeg",
    "image/jpg": "image/jpeg",
    "image/png": "image/png",
}


async def read_and_validate_report_file(file: UploadFile) -> tuple[bytes, str]:
    """Validate an uploaded report file's type/size and return (bytes, mime_type)."""
    if file.content_type not in ALLOWED_REPORT_MIME_TYPES:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type. Please upload a PDF, JPG, JPEG, or PNG file.",
        )

    file_bytes = await file.read()

    if not file_bytes:
        raise HTTPException(status_code=400, detail="The uploaded file is empty.")

    if len(file_bytes) > settings.max_upload_bytes:
        raise HTTPException(
            status_code=400,
            detail=f"File is too large. Maximum allowed size is {settings.MAX_UPLOAD_MB}MB.",
        )

    mime_type = ALLOWED_REPORT_MIME_TYPES[file.content_type]
    return file_bytes, mime_type
