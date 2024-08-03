from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route('/snap')
def getSnap():
    with open('db/snap_stops.json') as f:
        data = json.load(f)
    return data

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/visualization')
def visualization():
    return render_template('visualization.html')

if __name__ == '__main__':
    app.run(debug=True)
