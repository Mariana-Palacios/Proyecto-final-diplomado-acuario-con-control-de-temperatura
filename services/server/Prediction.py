import pandas as pd 
import requests
import json
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_squared_error
from sklearn.metrics import mean_absolute_error
import pickle
import numpy as np
import argparse

model_filename = 'finalized_model.sav'
dataset = []

def update_dataset():
    response = requests.get('http://52.21.250.6:8000/nxp_data_3d')
    dataset = response.json()
    with open('dataset.json', 'w') as f:
        json.dump(dataset, f)
    with open('dataset.json', 'r') as f:
        loaded_data = json.load(f)
    
    potencia = pd.json_normalize(loaded_data, 'potencia')
    potencia = potencia.rename(columns={0: 'potencia'})
    potencia = potencia.drop(potencia[potencia.index > len(potencia) - 1].index)

    agua = pd.json_normalize(loaded_data, 'agua')
    agua = agua.rename(columns={0: 'agua'})
    agua = agua.drop(agua[agua.index > len(potencia) - 1].index)

    ambiente = pd.json_normalize(loaded_data, 'ambiente')
    ambiente = ambiente.rename(columns={0: 'ambiente'})
    ambiente = ambiente.drop(ambiente[ambiente.index > len(potencia) - 1].index)

    dataset = pd.concat([agua, potencia, ambiente], axis=1)

    X = dataset[['agua','ambiente']]
    y = dataset['potencia']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=2)

    regressor = DecisionTreeRegressor(random_state = 0)
    regressor.fit(X_train, y_train)
    pickle.dump(regressor, open(model_filename, 'wb'))

def generate_prediction():
    X_mean = {'agua': [], 'ambiente': []}
    for i in range(int(len(dataset)/3)):
        X_mean['agua'].append((dataset['agua'][i] + dataset['agua'][i + 1] + dataset['agua'][i + 2])/3)
        X_mean['ambiente'].append((dataset['ambiente'][i] + dataset['ambiente'][i + int(len(dataset)/3)] + dataset['ambiente'][i + int(2*len(dataset)/3)])/3)

    X_mean = pd.DataFrame(X_mean) 
    loaded_model = pickle.load(open(model_filename, 'rb'))
    y_pred_2 = loaded_model.predict(X_mean)

    #integrating the area under the curve
    x_power = np.linspace(0, 23, num=len(y_pred_2))
    y_power = np.array(y_pred_2)

    area = np.trapz(y_power,x_power)
    return area

parser = argparse.ArgumentParser(description='Prediction script')
parser.add_argument('-g', '--generate_dataset', action='store_true', help='generates a new dataset for predictions')
parser.add_argument('-p', '--prediction', action='store_true', help='returns prediction of today')

args = parser.parse_args()

if args.generate_dataset:
    update_dataset()
    print('monda')
elif args.prediction:
    generate_prediction()
else:
    print("No argument provided.")