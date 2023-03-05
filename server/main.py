from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

#App object
app = FastAPI()

origins = ['http:/localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

@app.get("/")
def read__root():
    return {"Ping":"Pong"}

##########
#aquarium
##########

@app.get("/aquarium")
def read__root():
    return {"Ping":"Pong"}

@app.get("/aquarium/name")
def read__root():
    return {"Ping":"Pong"}

##########
#measures
##########

@app.get("/measures")
def read__root():
    return {"Ping":"Pong"}

@app.get("/measures/temperature")
def read__root():
    return {"Ping":"Pong"}

@app.get("/measures/temperature/water")
def read__root():
    return {"Ping":"Pong"}

@app.get("/measures/temperature/environment")
def read__root():
    return {"Ping":"Pong"}

@app.get("/measures/power")
def read__root():
    return {"Ping":"Pong"}

@app.get("/measures/time")
def read__root():
    return {"time":"Pong"}

################
#fishinformation
################

@app.get("/fishinformation")
def read__root():
    return {"Ping":"Pong"}
