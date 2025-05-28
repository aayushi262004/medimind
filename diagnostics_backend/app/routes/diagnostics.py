from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from typing import List
import json
from app.schemas.diagnostic import DiagnosticRequest, DiagnosticResult

router = APIRouter()

@router.post("/diagnose", response_model=DiagnosticResult)
async def diagnose(
    files: List[UploadFile] = File([]),
    symptoms: str = Form(...),
    medical_history: str = Form("")
):
    try:
            symptoms_list = json.loads(symptoms)
    except json.JSONDecodeError:
            raise HTTPException(status_code=400, detail="Invalid symptoms JSON format")

        # Optionally: Log or process uploaded files
    print("Symptoms list:", symptoms_list)
    print("Files received:", [file.filename for file in files])
    file_names = [file.filename for file in files]    
    return DiagnosticResult(
        severity="attention",
        findings=[
            "Elevated blood pressure (145/90 mmHg)",
            "Slightly elevated glucose levels (110 mg/dL)",
            "Normal cholesterol levels",
            "Reported symptoms suggest possible stress-related hypertension"
        ],
        recommendations=[
            "Schedule a follow-up with your primary care physician within 2 weeks",
            "Monitor blood pressure daily if possible",
            "Reduce sodium intake and consider DASH diet",
            "Regular moderate exercise (30 minutes, 5 days a week)",
            "Practice stress reduction techniques like meditation or deep breathing"
        ],
        followUp="2 weeks"
    )
