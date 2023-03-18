from pydantic import BaseModel
#from typing import Dict

class AquariumParameters(BaseModel):
    id: int
    temperature: int
    fish: int
    other: int 
    plant: int


class AquariumParametersIn(BaseModel):
    temperature: int
    fish: int
    other: int 
    plant: int
