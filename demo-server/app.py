from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Sahayak AI Server Running"


@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    message = data.get("message", "")

    return jsonify({
        "reply": f"You asked: '{message}'. This is a demo response from Sahayak AI."
    })


@app.route("/analyse-symptoms", methods=["POST"])
def analyse_symptoms():
    data = request.get_json()

    symptoms = data.get("symptoms", [])

    if not symptoms:
        return jsonify({
            "error": "No symptoms provided."
        }), 400

    symptoms_lower = [s.lower() for s in symptoms]

    result = {
        "condition": "Possible Viral Fever",
        "confidence": 78,
        "severity": "Moderate",
        "description": "Your symptoms appear similar to a viral infection. This is only an educational estimate and not a diagnosis.",
        "otherConditions": [
            "Influenza",
            "Dengue",
            "Common Cold"
        ],
        "recommendations": [
            "Get enough rest",
            "Drink plenty of fluids",
            "Monitor your symptoms"
        ],
        "suggestedTests": [
            "CBC",
            "Platelet Count"
        ],
        "warningSigns": [
            "Difficulty breathing",
            "Persistent vomiting",
            "Very high fever"
        ]
    }

    # Simple demo logic
    if "cough" in symptoms_lower and "fever" in symptoms_lower:
        result["condition"] = "Possible Flu"
        result["confidence"] = 82

    if "headache" in symptoms_lower and "nausea" in symptoms_lower:
        result["otherConditions"].append("Migraine")

    if "chest pain" in symptoms_lower:
        result["severity"] = "High"
        result["warningSigns"].append(
            "Chest pain can require immediate medical attention."
        )

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True, port=8000)