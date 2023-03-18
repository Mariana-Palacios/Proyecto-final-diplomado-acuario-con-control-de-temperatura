import databases
import sqlalchemy

# SQLAlchemy specific code, as with any other app
DATABASE_URL = "sqlite:///./data.db"
# DATABASE_URL = "postgresql://user:password@postgresserver/db"

database = databases.Database(DATABASE_URL)

metadata = sqlalchemy.MetaData()

Aquarium_data = sqlalchemy.Table(
    "Aquarium_data",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("Temperature", sqlalchemy.Integer),
    sqlalchemy.Column("Fish", sqlalchemy.Integer),
    sqlalchemy.Column("Other", sqlalchemy.Integer),
    sqlalchemy.Column("Plant", sqlalchemy.Integer)
)

engine = sqlalchemy.create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)

metadata.create_all(engine)