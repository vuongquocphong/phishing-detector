from flask import Flask, request, jsonify
import joblib  # Assuming your model is saved with joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load your custom phishing detection model
# model = joblib.load("path_to_your_model.pkl")

@app.route('/predict', methods=['POST'])
def predict_phishing():
    data = request.get_json()
    email_content = data['email_content']
    
    # Here, you'd use your phishing detection model
    # For now, returning a test response
    print("Received email content for prediction:", email_content)
    return jsonify({"prediction": "Phishing"})


if __name__ == "__main__":
    app.run(debug=True)
