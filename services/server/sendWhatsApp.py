from twilio.rest import Client


async def send_whatsapp_to_aquarium_user(number_aquarium_user, aquarium_last_data):

    client = Client(account_sid, auth_token)
    if aquarium_last_data["agua"] > 20:
        message = client.messages.create(
        from_='whatsapp:+14155238886',
        body="""ALERTA: {} °C ¡temperatura alta! 🆘

        El medidor de temperatura de agua  🌡🌊 ha detectado que la temperatura está por encima del rango seguro.

        Por favor, toma medidas inmediatas para enfriar el agua y evitar que los peces sufran estrés térmico🥺.

        Recuerda que mantener la temperatura del agua dentro del rango adecuado es esencial para la salud de tus peces.

            Atentamente,
            🐠 Termo Fish 🦀🐠🐟🐡🐚""".format(aquarium_last_data["agua"]),
        to='whatsapp:+573024363741'
        )

        print(message.sid)

