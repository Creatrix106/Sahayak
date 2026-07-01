from flask import Flask
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv
import os

from flask import request, jsonify

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)
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

    response = model.generate_content(
        prompt
    )

    return jsonify({
        "reply": response.text
    })

@app.route("/")
def home():
    return "Sahayak AI Server Running"

if __name__ == "__main__":
    app.run(debug=True, port=8000)