from fastapi import FastAPI
import uvicorn
import yaml
from yaml.loader import SafeLoader
from Model.Model import WritingData, ReadingData
from Database.Database import InfluxDataBase
from fastapi.middleware.cors import CORSMiddleware

#Influx

with open("config.yaml", "r") as ymlfile:
    cfg = yaml.load(ymlfile,Loader=SafeLoader)
    server_URL=cfg["InfluxDB"]["server_URL"]
    token=cfg["InfluxDB"]["token"]
    org=cfg["InfluxDB"]["org"]
    bucket=cfg["InfluxDB"]["bucket"]

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
    Influx.write_measuraments(parameters)

@app.get('/measurament/')
async def call_reading_influx(parameters: ReadingData):
    return Influx.read_data(parameters)

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=222, reload=True)