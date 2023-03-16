from fastapi import FastAPI
import uvicorn
import yaml
from yaml.loader import SafeLoader
from Model.Model import WritingData, ReadingData
from Database.Database import InfluxDataBase
from fastapi.middleware.cors import CORSMiddleware

#Influx
Influx = InfluxDataBase(server_URL,token,org,bucket)

app = FastAPI()

#React
origins = [
    "http://localhost:3000",
    "localhost:3000"
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

@app.post('/measurament/')
async def call_writing_influx(parameters: WritingData):
    Influx.write_data(parameters)

@app.get('/measurament/')
async def call_reading_influx(parameters: ReadingData):
    return Influx.read_data(parameters)

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=5000, reload=True)