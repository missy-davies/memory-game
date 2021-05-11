from flask import Flask 

app = Flask(__name__)

@app.route('/')
def homepage():
    """Render app"""

    return('Ciao bella!')




#------------------------------------------------------------------#

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")