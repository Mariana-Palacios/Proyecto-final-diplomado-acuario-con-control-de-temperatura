#import uvicorn


'''if __name__ == "__main__":
    uvicorn.run("app.api:app", host="0.0.0.0", port=8000, reload=True)'''

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

#from model import Item

app = FastAPI()

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

@app.post("/measuraments")
async def create_item():
    return {
        "data": { "Todo added." }
    }


'''
@app.get("/measuraments")
async def get_item(item: Item):
    return {
        "data": { "get added." }
    }
'''

'''
@app.post("/todo", tags=["todos"])
async def add_todo(todo: dict) -> dict:
    todos.append(todo)
    return {
        "data": { "Todo added." }
    }
'''