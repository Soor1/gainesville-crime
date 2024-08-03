from flask import Flask, render_template, jsonify, request, session, g
import sqlite3
from math import radians, cos, sin, sqrt, atan2
from datetime import datetime
import json

app = Flask(__name__)

def get_db():
    if 'db' not in g:
        db = sqlite3.connect('db/crime.db')
        g.db.row_factory = sqlite3.Row

    return g.db

def haversine(lat1, lon1, lat2, lon2):
    R = 3959

    dlat = radians(lat2 - lat1)
    dlon = radians(lon2 - lon1)
    a = sin(dlat / 2) ** 2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c
    return distance

@app.route('/snap')
def getSnap():
    with open('db/snap_stops.json') as f:
        data = json.load(f)
    return data

@app.route('/aed')
def getAed():
    with open('db/aeds.json') as f:
        data = json.load(f)
    return data

@app.route('/phone')
def getOhone():
    with open('db/blue_phones.json') as f:
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

@app.route('/api/crimes', methods=['GET'])
def get_crimes():
    start_time = request.args.get('searchStart_time')
    end_time = request.args.get('searchEnd_time')
    latitude = request.args.get('searchLatitude')
    longitude = float(request.args.get('searchLongitude'))
    radius = float(request.args.get('searchRadius'))

    conn = get_db()
    cursor = conn.cursor()

    start_time = datetime.strptime(start_time, '%H:%M').time()
    end_time = datetime.strptime(end_time, '%H:%M').time()

    cursor.execute("SELECT * FROM incidents")
    rows = cursor.fetchall()
    conn.close()

    filtered_crimes = []
    for row in rows:
        crime_time = datetime.strptime(row['Offense_Date'], '%Y-%m-%d %H:%M:%S').time()
        crime_lat = row['Latitude']
        crime_lon = row['Longitude']

        if start_time <= crime_time <= end_time:
            distance = haversine(latitude, longitude, crime_lat, crime_lon)
            if distance <= radius:
                filtered_crimes.append({
                    "ID": row['ID'],
                    "Incident_Type": row['Incident_Type'],
                    "Offense_Date": row['Offense_Date'],
                    "Latitude": row['Latitude'],
                    "Longitude": row['Longitude']
                })
    return jsonify(filtered_crimes)

@app.teardown_appcontext
def teardown_db(exception):
    db = g.pop('db', None)

    if db is not None:
        db.close()

if __name__ == '__main__':
    app.run(debug=True)
