from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.orm import relationship

from database import Base

class Aquarium(Base):
    __tablename__ = "Aquariums"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    fish = Column(Integer, index=True, default = 0)
    other = Column(Integer, index=True, default = 0)
    plant = Column(Integer, index=True, default = 0)
    name = Column(String, index=True, default = "Aquarium")
    gmail = Column(String, index=True, default = "josealejandroa99@gmail.com")
    number = Column(String, index=True, default = "+573024363741")