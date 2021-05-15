from flask import Flask, render_template, jsonify
from helpers import create_cards
from random import shuffle 


app = Flask(__name__)

@app.route('/')
def homepage():
    """Render app"""

    return render_template('app.html')


@app.route('/cards.json')
def generate_cards():
    """Return a JSON of new cards for memory game"""

    cards = create_cards(8)
    shuffle(cards)
    
    return jsonify(cards)

#------------------------------------------------------------------#

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")