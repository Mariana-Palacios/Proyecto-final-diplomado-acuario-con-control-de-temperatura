from sqlalchemy.orm import Session
from fastapi import Depends
from database import SessionLocal
import models, schemas, nxpdata

#POST en el Acuario User
def aquarium_user(db: Session, aquarium: schemas.AquariumCreate):
    db_aquarium_name_gmail = models.Aquarium(
        name=aquarium.name,
        gmail=aquarium.gmail,
        number=aquarium.number,
        fish=aquarium.fish,
        other = aquarium.other,
        plant = aquarium.plant
    )
    db.add(db_aquarium_name_gmail)
    db.commit()
    db.refresh(db_aquarium_name_gmail)
    return db_aquarium_name_gmail

#GET All en el Acuario 
def get_aquarium_all_data(db: Session = Depends(SessionLocal)):
    aquariums = db.query(models.Aquarium).all()
    return aquariums

#GET All en el Acuario latest id
def get_latest_aquarium_id(db: Session = Depends(SessionLocal)):
    latest_aquarium = db.query(models.Aquarium).order_by(models.Aquarium.id.desc()).first()
    return latest_aquarium


#PUT en el Acuario DATA
def update_aquarium_data(db: Session, aquarium: schemas.AquariumUpdate):
    last_record = db.query(models.Aquarium).order_by(models.Aquarium.id.desc()).first()
    last_record.fish = aquarium.fish
    last_record.other = aquarium.other
    last_record.plant = aquarium.plant
    db.commit()

#PUT en el Acuario NAME
def update_aquarium_name(db: Session, aquarium: schemas.AquariumNameUpdate):
    last_record = db.query(models.Aquarium).order_by(models.Aquarium.id.desc()).first()
    last_record.name = aquarium.name
    db.commit()

#PUT en el Acuario EMAIL
def update_aquarium_email(db: Session, aquarium: schemas.AquariumGmailUpdate):
    last_record = db.query(models.Aquarium).order_by(models.Aquarium.id.desc()).first()
    last_record.gmail = aquarium.gmail
    db.commit()

#PUT en el Acuario NUMBER
def update_aquarium_number(db: Session, aquarium: schemas.AquariumNumberUpdate):
    last_record = db.query(models.Aquarium).order_by(models.Aquarium.id.desc()).first()
    last_record.number = aquarium.number
    db.commit()


################
# Email
################

#POST en el Email data
def add_email(db: Session, aquarium: schemas.EmailCreate):
    db_aquarium_gmail = models.Aquarium(
        gmail=aquarium.gmail,
    )
    db.add(db_aquarium_name_gmail)
    db.commit()
    db.refresh(db_aquarium_name_gmail)
    return db_aquarium_name_gmail

#GET en el Acuario data
def get_aquarium_data(db: Session = Depends(SessionLocal)):
    AllEmailValues = db.query(models.Email).all()
    return AllEmailValues


#############
#NPX Valores
#############

def valores_nxp(db: Session = Depends(SessionLocal)):
    data = nxpdata.obtener_valores_nxp()
    return data