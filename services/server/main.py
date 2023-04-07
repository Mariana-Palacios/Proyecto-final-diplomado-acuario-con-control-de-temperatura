from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import models, schemas, crud, nxpdata, sendEmail
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import threading
import time
import asyncio

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

#React
origins = [
    "http://localhost:3000",
    "localhost:3000",
    "http://localhost:8000",
    "http://termofish.club:3000",
    "http://52.21.250.6:8000",
    "http://127.0.0.1:3000",
    "http://52.21.250.6:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


#POST
@app.post("/aquarium_data/", response_model=schemas.Aquarium)
def aquarium_name_email(aquarium: schemas.Aquarium, db: Session = Depends(get_db)):
    # await asyncio.sleep(0)
    return crud.aquarium_name_email(db=db, aquarium=aquarium)

#PUT
@app.put("/aquarium_data/")
def update_aquarium_aquarium(aquarium: schemas.AquariumUpdate, db: Session = Depends(get_db)):
    # await asyncio.sleep(0)
    crud.update_aquarium(db=db, aquarium=aquarium)
    return {'put realizado'}

#GET
@app.get("/aquarium_data/")
def get_last_id_aquarium(db: Session = Depends(get_db)):
    # await asyncio.sleep(0)
    return crud.get_aquarium_data(db=db)

#GET Valores de nxp
@app.get("/nxp_data")
def get_valores_nxp():
    # await asyncio.sleep(0)
    return nxpdata.obtener_valores_nxp()

async def send_messages_every_10_minutes():
    while True:
        # enviar mensajes aquí
        await sendEmail.send_email_to_aquarium_user(crud.get_aquarium_data(db=SessionLocal()),nxpdata.obtener_valores_nxp())
        await asyncio.sleep(10)


@app.on_event("startup")
async def startup_event():
    print("Empezando...")
    task_send_messages = asyncio.create_task(send_messages_every_10_minutes())


#hilo = threading.Thread(target = sendEmail.send_email_to_aquarium_user('termofishdiplomado@gmail.com',nxpdata.obtener_valores_nxp()))
#hilo.start()
#t = threading.Thread(target = sendEmail.send_email_to_aquarium_user('termofishdiplomado@gmail.com',nxpdata.obtener_valores_nxp())) 
#t.start()