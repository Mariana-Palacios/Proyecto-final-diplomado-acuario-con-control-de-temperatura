from fastapi import FastAPI
import uvicorn
from typing import Union
from Model import ReadingData, HomeParameters,AquariumParameters
from Database import InfluxDataBase
from fastapi.middleware.cors import CORSMiddleware

#Influx

Influx = InfluxDataBase()

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

@app.get("/")
async def root():
    return ("Welcome to your todo list.")

#@app.post('/measurament/')
#async def call_writing_influx(parameters: WritingData):
#    Influx.write_measuraments(parameters)


@app.post('/measurament/')
async def call_reading_influx(parameter: AquariumParameters):
    Influx.write_measuraments(parameter.dict())
    return parameter.dict()

if __name__ == "__main__":
    uvicorn.run("Main:app", host="0.0.0.0", port=8000, reload=True)