from flask import Flask
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv
import os

from flask import request, jsonify


app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()

    message = data.get("message")

    prompt = f"""
You are Sahayak AI, a friendly educational healthcare assistant.

Rules:
- Explain things in simple language.
- Do not provide medical diagnosis.
- Keep answers short and easy to understand.
- Suggest consulting a doctor when necessary.
- Use bullet points when helpful.

User Question:
{message}
    """


    return jsonify({
        'reply': "SORRY! you have cancer"
    })

@app.route("/")
def home():
    return "Sahayak AI Server Running"

if __name__ == "__main__":
    app.run(debug=True, port=8000)