from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS
from influxdb_client import WritePrecision, InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS


url = 'http://52.21.250.6:8086'
token = 'T4dtS1z0wpYXxGO10kbjYzi4OvHmvKWhKfQQbt1VQdrpKv0rLKdl3u6XHo_0ZEDUIPCQthLoFkpTR1X533XgTQ=='
org = 'org'
bucket = 'rabbit'

def obtener_valores_nxp(url=url, token=token, org=org, bucket=bucket):
    with InfluxDBClient(url=url, token=token, org=org) as client:
        query_api = client.query_api()
        tables = query_api.query('from(bucket:"rabbit") |> range(start: -1d)')

        valores_agua = []
        valores_potencia = []
        valores_ambiente = []

        for table in tables:
            for record in table.records:
                if record.get_field() == "agua":
                    valores_agua.append(record.get_value())
                if record.get_field() == "potencia":
                    valores_potencia.append(record.get_value())
                if record.get_field() == "ambiente":
                    valores_ambiente.append(record.get_value())
    return {"agua":valores_agua, "potencia":valores_potencia, "ambiente":valores_ambiente}