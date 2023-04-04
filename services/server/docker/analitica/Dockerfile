FROM python:3.9.16

WORKDIR /app

USER root

RUN apt-get update
RUN apt-get install python3-pip -y

RUN apt install python3-aiohttp -y

RUN pip3 install influxdb-client==1.36
RUN pip3 install pika==1.3.1

COPY services/analitica/smart_reloj.py /app/smart_reloj.py

CMD ["python", "/app/smart_reloj.py"]
