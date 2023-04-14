import pandas as pd
import numpy as np
import pickle

model_filename = 'finalized_model.sav'

def generate_prediction():
    try:
        dataset = pd.read_csv('dataset.csv')
    except:
        return -1
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