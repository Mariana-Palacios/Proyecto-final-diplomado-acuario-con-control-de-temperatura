from pydantic import BaseModel
from typing import Dict

class WritingData(BaseModel):
    parameters: Dict[str, int]

class ReadingData(BaseModel):
    parameters: Dict[str, int]

