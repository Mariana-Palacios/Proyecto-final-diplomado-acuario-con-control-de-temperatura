import pika
import os
import math
import statistics
from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS


class Analitica():
   valor_max = -math.inf
   valor_min = math.inf
   bd_pasos = []
   cont_10k = 0
   cont_5k = 0
   cont_mejor = 0

   bucket = "rabbit"
   token_influx = "tokensecrect"
   influx_url = "http://influxdb:8086"
   influx_org = "org"

   def agregar_maximo(self, _medida):
       if _medida > self.valor_max:
           print("nuevo maxmimo", flush=True)
           self.valor_max = _medida
           self.escribir("Pasos","Maximo", _medida)

   def agregar_minimo(self, _medida):
       if _medida < self.valor_min:
           print("nuevo minimo", flush=True)
           self.valor_min = _medida
           self.escribir("Pasos","Minimo", _medida)

   def agregar_promedio(self, _medida):
      self.bd_pasos.append(_medida)
      valor_prom = statistics.mean(self.bd_pasos)
      #print("Promedio ", flush=True)
      #print("Promedio acumilado: {}".format(valor_prom))
      self.escribir("Pasos","Promedio",valor_prom)

   def dias_10k_pasos(self, _medida):
      if _medida > 10000:
          self.cont_10k+=1
          print("Mayor 10k", flush=True)
          print("Dias mayor 10k pasos: {}".format(self.cont_10k))
          self.escribir("Pasos","Mayor 10k",self.cont_10k)

   def dias_5k_pasos(self, _medida):
      if _medida < 9980:
          self.cont_5k+=1
          print("Menor 5k", flush=True)
          print("Dias menor 5k pasos: {}".format(self.cont_5k))
          self.escribir("Pasos","Menor 5k",self.cont_5k)

   def dias_mejorando(self, _medida):
      if len(self.bd_pasos) >= 2:
          if self.bd_pasos[-1] > self.bd_pasos[-2]:
              self.cont_mejor+=1
              print("Mejorando", flush=True)
              print("Dias consecutivos mejorando {}".format(self.cont_mejor))
              self.escribir("Pasos","Mejoramiento consecutivos",self.cont_mejor)
          else:
              self.cont_mejor = 0

   def tomar_medida(self, _paso):
       paso = _paso.split("=")
       medida = float(paso[-1])
       #print("medida: {}".format(paso))
       self.agregar_maximo(medida)
       self.agregar_minimo(medida)
       self.agregar_promedio(medida)
       self.dias_10k_pasos(medida)
       self.dias_5k_pasos(medida)
       self.dias_mejorando(medida)

   def escribir(self, tag, variable, valor):

      client = InfluxDBClient(url=self.influx_url, token=self.token_influx, org=self.influx_org)

      write_api = client.write_api(write_options=SYNCHRONOUS)
      query_api = client.query_api()

      p = Point("Analitica").tag("Descriptiva",tag).field(variable, valor)
      write_api.write(bucket=self.bucket, record=p)

if __name__ == '__main__':

    analitica = Analitica()

    url = os.environ.get('AMQP_URL','amqp://guest:guest@rabbit:5672/%2f')
    params = pika.URLParameters(url)
    connection = pika.BlockingConnection(params)
    channel = connection.channel()

    channel.queue_declare(queue='pasos')
    channel.queue_bind(exchange='amq.topic', queue='pasos', routing_key='#')

    def callback(ch, method, properties, body):
        global analitica
        paso = body.decode("utf-8")
        print("paso: {}".format(paso),flush=True)
        analitica.tomar_medida(paso)

    channel.basic_consume(queue='pasos', on_message_callback=callback, auto_ack=True)
    channel.start_consuming()

