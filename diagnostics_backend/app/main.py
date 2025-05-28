from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import diagnostics

app = FastAPI()
@app.get("/")
def root():
    return {"message": "MediMind Diagnostics API is running"}


# Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(diagnostics.router, prefix="/api")
