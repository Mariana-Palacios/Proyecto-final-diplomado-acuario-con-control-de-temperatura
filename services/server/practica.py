
'''
b = "Hello, World!"
print(b[2:5])

b = "Hello, World!"
print(b[:5])

b = "Hello, World!"
print(b[2:])

b = "Hello, World!"
print(b[-5:-2])

a = "Hello, World!"
print(a.upper())

a = "Hello, World!"
print(a.lower())
'''

'''
a = "Hello"
b = "World"
c = a + b
print(c)

txt = "We are the so-called \"Vikings\" from the north." 
print(txt)

print(bool("Hello"))
print(bool(15))

'''


'''

x = 5
if not x > 0:
    print("x es menor o igual a cero")
else:
    print("x es mayor que cero")

thislist = ["apple", "banana", "cherry"]
print(thislist[-3])

thislist = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
thislist.extend(tropical)
print(thislist)

tropical = ["mango", "pineapple", "papaya", "mango"]
tropical.remove("mango")
print(tropical)

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

newList = [x for x in fruits if not "a" in x]
newlist = [x.upper() for x in fruits] 
print(newlist)

thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort()
print(thislist)

thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.reverse()
print(thislist)
'''
'''
thislist = ["apple", "banana", "cherry"]
mylist = thislist
thislist.append("korok")
print(mylist)
'''

import asyncio

async def send_messages_every_10_minutes():
    while True:
        # enviar mensajes aquí
        print("Mensaje enviado")
        await asyncio.sleep(10)

async def get_data():
    # obtener datos aquí
    print("Datos obtenidos")

async def put_data():
    # actualizar datos aquí
    print("Datos actualizados")

async def post_data():
    # crear nuevos datos aquí
    print("Datos creados")

async def perform_tasks(semaphore):
    async with semaphore:
        await asyncio.gather(get_data(), put_data(), post_data())

async def main():
    print("Empezando...")
    semaphore = asyncio.Semaphore(2) # Limitar a dos tareas concurrentes
    task = asyncio.create_task(send_messages_every_10_minutes())
    while True:
        await perform_tasks(semaphore)
        await asyncio.sleep(60)

asyncio.run(main())