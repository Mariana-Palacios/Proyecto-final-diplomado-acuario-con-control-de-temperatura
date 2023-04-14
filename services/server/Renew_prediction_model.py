import pandas as pd 
import requests
import json
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
import pickle

model_filename = 'finalized_model.sav'

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
    dataset.to_csv('dataset.csv')

    X = dataset[['agua','ambiente']]
    y = dataset['potencia']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=2)

    regressor = DecisionTreeRegressor(random_state = 0)
    regressor.fit(X_train, y_train)
    pickle.dump(regressor, open(model_filename, 'wb'))
    

if __name__ == "__main__":
    update_dataset()