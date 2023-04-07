from sqlalchemy.orm import Session
from fastapi import Depends
from database import SessionLocal
import models, schemas, nxpdata

#PUT en el Acuario data
def update_aquarium(db: Session, aquarium: schemas.AquariumUpdate):
    last_record = db.query(models.Aquarium).order_by(models.Aquarium.id.desc()).first()
    last_record.fish = aquarium.fish
    last_record.other = aquarium.other
    last_record.plant = aquarium.plant
    db.commit()

#POST en el Acuario data
def aquarium_name_email(db: Session, aquarium: schemas.AquariumCreate):
    db_aquarium_name_gmail = models.Aquarium(
        name=aquarium.name,
        gmail=aquarium.gmail
    )
    db.add(db_aquarium_name_gmail)
    db.commit()
    db.refresh(db_aquarium_name_gmail)
    return db_aquarium_name_gmail

#GET en el Acuario data
def get_aquarium_data(db: Session = Depends(SessionLocal)):
    aquariums = db.query(models.Aquarium).all()
    return aquariums

#NPX Valores
def valores_nxp(db: Session = Depends(SessionLocal)):
    data = nxpdata.obtener_valores_nxp()
    return data