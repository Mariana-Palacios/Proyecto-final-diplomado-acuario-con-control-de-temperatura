from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS
from influxdb_client import WritePrecision, InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS


url = 'http://localhost:8086'
token = 'Ef3YSYgqh2hsFfJI2_78t_RhHSXdH5H-l1KVStUtCYTQbvGfnSqhO7MrGs_fer0oKq3N0DELualk2m8aXU6ndA=='
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

def obtener_valores_nxp_3d(url=url, token=token, org=org, bucket=bucket):
    with InfluxDBClient(url=url, token=token, org=org) as client:
        query_api = client.query_api()
        tables = query_api.query('from(bucket:"rabbit") |> range(start: -3d)')

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