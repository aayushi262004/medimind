from pydantic import BaseModel
from typing import List, Optional

class DiagnosticRequest(BaseModel):
    symptoms: List[str]
    medical_history: Optional[str] = None

class DiagnosticResult(BaseModel):
    severity: str
    findings: List[str]
    recommendations: List[str]
    followUp: Optional[str] = None
