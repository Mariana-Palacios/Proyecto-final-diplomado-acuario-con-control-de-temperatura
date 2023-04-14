from pydantic import BaseModel, EmailStr
#from typing import Dict

########################
#Schemas tabla Aquarium
########################

# Definir modelo base del acuario
class AquariumBase(BaseModel):
    name: str
    gmail: str
    number: str
    fish: int
    other: int
    plant: int

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

# Cambiar nombre
class AquariumNameUpdate(BaseModel):
    name: str

# Cambiar email
class AquariumGmailUpdate(BaseModel):
    gmail: str

# Cambiar number
class AquariumNumberUpdate(BaseModel):
    number: str

#####################
#Schemas tabla Email
#####################

# Definir modelo base del acuario
class EmailBase(BaseModel):
    gmail: str

# Definir modelo para crear acuario
class EmailCreate(EmailBase):
    id: int
    pass

# Definir modelo para leer acuario
class Email(EmailBase):
    class Config:
        orm_mode = True