from fastapi import FastAPI
import uvicorn
#from typing import Union
from Model import AquariumParameters, AquariumParametersIn
from Database import database, Aquarium_data
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI()

#React
origins = [
    "http://localhost:3000",
    "localhost:3000",
    "http://localhost:8000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/")
async def root():
    return ("Welcome to your todo list.")

@app.get('/measurament/')
async def call_reading_influx():    
    query = Aquarium_data.select()
    return await database.fetch_all(query)

@app.post('/measurament/') 
async def call_write_measuraments(parameter: AquariumParametersIn):
    query = Aquarium_data.insert().values(Temperature=parameter.temperature, Fish=parameter.fish, Other=parameter.other, Plant=parameter.plant)
    last_record_id = await database.execute(query)
    return {**parameter.dict(), "id": last_record_id}

if __name__ == "__main__":
    uvicorn.run("Main:app", host="0.0.0.0", port=8000, reload=True)