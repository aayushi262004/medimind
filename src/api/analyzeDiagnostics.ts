// src/api/analyzeDiagnostics.ts

export async function analyzeDiagnostics({
  files,
  symptoms,
  medicalHistory,
}: {
  files: File[];
  symptoms: string[];
  medicalHistory: string;
}) {
  const formData = new FormData();
  files.forEach((file) => formData.append("files", file));
  formData.append("symptoms", JSON.stringify(symptoms));
  formData.append("medical_history", medicalHistory);

  const response = await fetch("http://127.0.0.1:8000/api/analyze", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Diagnostics analysis failed");
  }

  const result = await response.json();
  return result;
}
