from pydantic import BaseModel

class Item(BaseModel):
    id: int
    time: int 
    temperature: int
    fish: int | None = None
    plant: int | None = None
    other: int | None = None

# ['time', 'temperature', 'fish', 'plant', 'turtle']