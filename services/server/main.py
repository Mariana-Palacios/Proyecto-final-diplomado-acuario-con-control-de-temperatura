from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import models, schemas, crud, nxpdata, sendEmail, sendWhatsApp
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
    "http://52.21.250.6:3000",
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
def add_aquarium_user(aquarium: schemas.Aquarium, db: Session = Depends(get_db)):
    return crud.aquarium_user(db=db, aquarium=aquarium)

#PUT aquarium DATA
@app.put("/aquarium_data/")
def update_aquarium_data(aquarium: schemas.AquariumUpdate, db: Session = Depends(get_db)):
    crud.update_aquarium_data(db=db, aquarium=aquarium)
    return {'put realizado'}

#PUT aquarium NAME
@app.put("/Name/")
def update_aquarium_data(aquarium: schemas.AquariumNameUpdate, db: Session = Depends(get_db)):
    crud.update_aquarium_name(db=db, aquarium=aquarium)
    return {'put realizado'}


#PUT aquarium GMAIL
@app.put("/Gmail/")
def update_aquarium_data(aquarium: schemas.AquariumGmailUpdate, db: Session = Depends(get_db)):
    crud.update_aquarium_email(db=db, aquarium=aquarium)
    return {'put realizado'}

#PUT aquarium NUMBER
@app.put("/Number/")
def update_aquarium_data(aquarium: schemas.AquariumNumberUpdate, db: Session = Depends(get_db)):
    crud.update_aquarium_number(db=db, aquarium=aquarium)
    return {'put realizado'}

#GET
@app.get("/aquarium_data/")
def latest_aquarium_id(db: Session = Depends(get_db)):
    return crud.get_latest_aquarium_id(db=db)

#GET
@app.get("/aquarium_data_all/")
def aquarium_all_data(db: Session = Depends(get_db)):
    return crud.get_aquarium_all_data(db=db)

#GET Valores de nxp
@app.get("/nxp_data")
def get_valores_nxp():
    return nxpdata.obtener_valores_nxp()

#GET Valores de nxp
@app.get("/nxp_data_3d")
def get_valores_nxp_3d():
    return nxpdata.obtener_valores_nxp_3d()


async def send_messages_every_10_minutes():
    while True:
        # enviar mensajes aquí
        await sendEmail.send_email_to_aquarium_user(crud.get_aquarium_data(db=SessionLocal()),nxpdata.obtener_valores_nxp())
        await sendWhatsApp.send_whatsapp_to_aquarium_user(crud.get_aquarium_data(db=SessionLocal()),nxpdata.obtener_valores_nxp())
        await asyncio.sleep(1800)

@app.on_event("startup")
async def startup_event():
    print("Empezando...")
    #task_send_messages = asyncio.create_task(send_messages_every_10_minutes())
