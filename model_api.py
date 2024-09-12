from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from safetensors.torch import load_file  # Correct way to load safetensors
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

app = Flask(__name__)
CORS(app)

# Define the model path
MODEL_PATH = "model"  # Path to the directory containing the model

model = DistilBertForSequenceClassification.from_pretrained(MODEL_PATH)
tokenizer = DistilBertTokenizer.from_pretrained(MODEL_PATH)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

@app.route('/predict', methods=['POST'])
def predict_phishing():
    print(request.get_json())
    data = request.get_json()
    print(f"Received data: {data}")
    email_content = data['email_content']
    urls = data['urls']  # Extract URLs from the request
    
    # Tokenize the input email content
    inputs = tokenizer(email_content, return_tensors='pt', truncation=True, padding=True, max_length=512)

    inputs.to(device)

    # Set the model to evaluation mode
    model.eval()

    # Perform inference using the model
    with torch.no_grad():
        outputs = model(**inputs)
        logits = outputs.logits

    # Apply a softmax to the logits to get the probabilities
    probs = torch.nn.functional.softmax(logits, dim=1)
    # Get the predicted class
    prediction = torch.argmax(probs, dim=1)
    # Assuming the model outputs 1 for "Phishing" and 0 for "Safe"
    result = "Phishing" if prediction == 1 else "Safe"

    print("--------------------")

    print(f"Received email content:\n{email_content}\nPrediction: {result}")

    print(f"Probabilities: {probs}")

    print("\n")

    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(debug=True)
