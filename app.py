from flask import Flask, request, jsonify

app = Flask(__name__)

# AI Logic Function


def finpay_ai(salary, loans, gold_price, avg_gold=6000):
    total_emi = sum([l['amount'] for l in loans])
    remaining = salary - total_emi

    advice = []
    priority = sorted(loans, key=lambda x: (x['due'], -x['interest']))

    if remaining < 1000:
        advice.append("Your savings are low. Avoid investments.")
    else:
        advice.append(f"You have ₹{remaining} left.")

    if gold_price < avg_gold:
        advice.append("Gold price is low. Good time to buy gold.")
    else:
        advice.append("Gold price is high. Better to wait.")

    if remaining > 3000:
        advice.append("You can consider Mutual Funds or FD.")

    return {
        "remaining": remaining,
        "priority": priority,
        "advice": advice
    }


@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json

    result = finpay_ai(
        data["salary"],
        data["loans"],
        data["gold_price"]
    )

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
