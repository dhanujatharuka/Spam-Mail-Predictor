import pickle
import re
import string
from sklearn.feature_extraction.text import CountVectorizer
import pandas as pd

def predict(message):
    model_ = pickle.load(open("model.pkl", 'rb'))
    features_ = pickle.load(open("features.pkl", 'rb'))
    
    input_data_features = features_.transform([message])
    prediction = model_.predict(input_data_features)

    if prediction == "ham":
        output = 0
    else:
        output = 1

    return output
