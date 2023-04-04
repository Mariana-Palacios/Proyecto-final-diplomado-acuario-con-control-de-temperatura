from pydantic import BaseModel, EmailStr
#from typing import Dict

# Definir modelo base del acuario
class AquariumBase(BaseModel):
    name: str
    gmail: str

# Definir modelo para crear acuario
class AquariumCreate(AquariumBase):
    id: int
    pass

# Definir modelo para leer acuario
class Aquarium(AquariumBase):
    class Config:
        orm_mode = True

# Definir cantidad de peces
class AquariumUpdate(BaseModel):
    fish: int
    other: int
    plant: int
