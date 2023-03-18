from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS
#import json

class InfluxDataBase:
    
    influx_bucket = 'rabbit'
    influx_token = 'token-secreto'
    influx_url = 'http://52.21.250.6:8086'
    influx_org = 'org'

    '''
    def write_db(self,tag, key, value) -> None:
        point = Point('Aquarium').tag("Descriptive", tag).field(key, value)
        self.write_api.write(bucket=self.bucket, record=point)
    '''
    
    def write_db(self, tag, key, value):
        client = InfluxDBClient( url=self.influx_url,token=self.influx_token, org=self.influx_org)
        write_api = client.write_api(write_options=SYNCHRONOUS)
        point = Point('Aquarium').tag("Descriptive", tag).field(key, value)
        write_api.write(bucket=self.influx_bucket, record=point)

    def write_measuraments(self,data):
        self.write_db('parameters', 'fish', data["fish"])
        self.write_db('parameters', 'other', data["other"])
        self.write_db('parameters', 'temperature', data["temperature"])
        self.write_db('parameters', 'plant', data["plant"])

    def read_data(self,data):
        return {'time': data["time"],'fish': data["fish"], 'other': data["other"], 'temperature': data["temperature"], 'plant': data["plant"]}