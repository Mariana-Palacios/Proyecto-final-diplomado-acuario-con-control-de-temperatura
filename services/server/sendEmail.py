import smtplib
import ssl
from email.message import EmailMessage
import time 
import asyncio

async def send_email_to_aquarium_user(email_aquarium_user, aquarium_last_data):
    # Set the subject and body of the email
    subject = 'ALERTA: '+ str(aquarium_last_data["agua"]) +'°C ¡temperatura alta!'
    body = """
    El medidor de temperatura de agua ha detectado que la temperatura está por encima del rango seguro.

    Por favor, toma medidas inmediatas para enfriar el agua y evitar que los peces sufran estrés térmico.

    Recuerda que mantener la temperatura del agua dentro del rango adecuado es esencial para la salud de tus peces.

    Atentamente,
    Termo Fish
    """
    # Define email sender and receiver
    email_sender = 'marianapalaciosam@unimagdalena.edu.co'
    email_password = ''
    while True:
        print(aquarium_last_data["agua"]) 
        if aquarium_last_data["agua"] > 20:
            print('estoy realizando lo del email')
            email_receiver = email_aquarium_user
            em = EmailMessage()
            em['From'] = email_sender
            em['To'] = email_receiver
            em['Subject'] = subject
            em.set_content(body)

            # Add SSL (layer of security)
            context = ssl.create_default_context()

            # Log in and send the email
            with smtplib.SMTP('smtp.office365.com', 587) as smtp:
                smtp.starttls(context=context)
                smtp.login(email_sender, email_password)
                smtp.sendmail(email_sender, email_receiver, em.as_string())
        await asyncio.sleep(128)
    print('hola mundo')

