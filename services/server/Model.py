from pydantic import BaseModel
from typing import Dict

class AquariumParameters(BaseModel):
    temperature: int
    fish: int
    plant: int
    other: int 

class AnotherModel(BaseModel):
    algo: str

class HomeParameters(AquariumParameters, AnotherModel):
    pass
    
class ReadingData(BaseModel):
    parameters: Dict[str, int]