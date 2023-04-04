from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import models, schemas, crud, nxpdata
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

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
    return crud.aquarium_name_email(db=db, aquarium=aquarium)

#PUT
@app.put("/aquarium_data/")
def append_data_aquarium(aquarium: schemas.AquariumUpdate, db: Session = Depends(get_db)):
    return crud.append_aquarium_data(db=db, aquarium=aquarium)

#GET
@app.get("/aquarium_data/")
def get_last_id_aquarium(db: Session = Depends(get_db)):
    return crud.get_aquarium_data(db=db)

#GET Valores de nxp
@app.get("/nxp_data")
def get_valores_nxp():
    return nxpdata.obtener_valores_nxp()

