FROM influxdb:2.6.1

WORKDIR /script

COPY ./script.sh /script/

COPY ./requirements.txt /script/

RUN apt-get update && apt-get install -y python3 python3-pip uvicorn

RUN pip install -r /script/requirements.txt

RUN chmod +x /script/script.sh

#docker run --name influxdb -p 8086:8086  influxdb:2.6.1