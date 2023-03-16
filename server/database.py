from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS
#import json

class InfluxDataBase:
    
    def __init__(self,server_URL,token,org, bucket) -> None:
        self.client=InfluxDBClient(server_URL, token=token, org=org)
        self.write_api=self.client.write_api(write_options=SYNCHRONOUS)
        self.query_api=self.client.query_api()
        self.server_URL=server_URL
        self.token=token
        self.org=org
        self.bucket=bucket

    def write_db(self,tag, key, value) -> None:
        point = Point('Aquarium').tag("Descriptive", tag).field(key, value)
        self.write_api.write(bucket=self.influx_bucket, record=point)
    
    
    def write_measuraments(self,data) -> None:
        self.write_db('parameters', 'time', data["time"] )
        self.write_db('parameters', 'fish', data["fish"])
        self.write_db('parameters', 'other', data["other"])
        self.write_db('parameters', 'temperature', data["temperature"])
        self.write_db('parameters', 'plant', data["plant"])
        