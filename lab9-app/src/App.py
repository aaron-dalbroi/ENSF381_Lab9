from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import json

app = Flask(__name__)
CORS(app)

model = joblib.load("random_forest_model.pkl")  # Assuming the model is in ./src/

with open('logindata.json', 'r') as f:
    users = json.load(f)

with open('loginauthentication.json', 'r') as f:
    login_success_response = json.load(f)

@app.route('/validate_login', methods=['POST'])
def validate_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users and users[username] == password:
        return jsonify(login_success_response), 200
    else:
        return jsonify({"success": False, "message": "Invalid username or password"}), 401

@app.route('/predict_house_price', methods=['POST'])
def predict_house_price():
    data = request.get_json()

    city = data.get('city')
    province = data.get('province')
    latitude = float(data.get('latitude'))
    longitude = float(data.get('longitude'))
    lease_term = data.get('lease_term')
    house_type = data.get('type')
    beds = float(data.get('beds'))
    baths = float(data.get('baths'))
    sq_feet = float(data.get('sq_feet'))
    furnishing = data.get('furnishing')
    smoking = data.get('smoking')
    pets = data.get('pets')

    cats = True if pets else False
    dogs = True if pets else False

    sample_data = [[city, province, latitude, longitude, lease_term, house_type, beds, baths, sq_feet, furnishing, smoking, cats, dogs]]
    sample_df = pd.DataFrame(sample_data, columns=[
        'city', 'province', 'latitude', 'longitude', 'lease_term',
        'type', 'beds', 'baths', 'sq_feet', 'furnishing', 'smoking',
        'cats', 'dogs'
    ])

    predicted_price = model.predict(sample_df)[0]
    return jsonify({"predicted_price": float(predicted_price)})

if __name__ == '__main__':
    app.run(debug=True)