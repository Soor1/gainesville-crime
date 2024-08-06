from flask import Flask, render_template, jsonify, request, session, g
import sqlite3
from math import radians, cos, sin, sqrt, atan2
from datetime import datetime
import json

app = Flask(__name__)

# ----------------- Helper Functions -----------------
# This function calculates the distance between two points on the earth, helps make sure the crime is within the radius
def haversine(lat1, lon1, lat2, lon2):
    R = 3959

    dlat = radians(lat2 - lat1)
    dlon = radians(lon2 - lon1)
    a = sin(dlat / 2) ** 2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c
    return distance

# ----------------- Data Routes -----------------
# These first three routes just pull at the data from their respective json files and return it as a json object

@app.route('/snap') # This is the snap data route
def getSnap():
    with open('db/snap_stops.json') as f:
        data = json.load(f)
    return data

@app.route('/aed') # This is the aed data route
def getAed():
    with open('db/aeds.json') as f:
        data = json.load(f)
    return data

@app.route('/phone') # This is the phone data route
def getOhone():
    with open('db/blue_phones.json') as f:
        data = json.load(f)
    return data

@app.route('/crimes', methods=['GET']) # This is the crimes data route
def get_crimes():
    # Get the parameters from the user input fields
    start_time = request.args.get('startTime')
    end_time = request.args.get('endTime')
    latitude = request.args.get('latitude')
    longitude = request.args.get('longitude')
    radius = request.args.get('radius')

    # Convert the parameters to the correct types
    latitude = float(latitude)
    longitude = float(longitude)
    radius = float(radius)
    start_time = int(start_time)
    end_time = int(end_time)

    # Connect to the database
    conn = sqlite3.connect('db/crime.db')
    cursor = conn.cursor()

    # Slowly build the db query
    query = "SELECT * FROM incidents"
    params = []

    query += " WHERE Offense_Hour_of_Day BETWEEN ? AND ?"
    params.extend([start_time, end_time])

    # Execute the query
    cursor.execute(query, params)
    rows = cursor.fetchall()

    # Filter the rows based on the user's input and add to dictionary {crime_type: [[latitude, longitude], [latitude, longitude], ...]}
    filtered_rows = {}
    for row in rows:
        crime_latitude = row[11]
        crime_longitude = row[12]

        if (crime_latitude is None or crime_longitude is None or
            latitude is None or longitude is None or
            not isinstance(crime_latitude, float) or
            not isinstance(crime_longitude, float) or
            not isinstance(latitude, float) or
            not isinstance(longitude, float)):
            continue

        distance = haversine(latitude, longitude, crime_latitude, crime_longitude)
        if distance <= radius:
            if row[1] in filtered_rows:
                filtered_rows[row[1]].append([crime_latitude, crime_longitude])
            else:
                filtered_rows[row[1]] = [[crime_latitude, crime_longitude]]

    conn.close()

    return jsonify(filtered_rows)


# ----------------- Web Pages -----------------

@app.route('/') # This is the home page route
def index():
    return render_template('index.html')

@app.route('/about') # This is the about page route
def about():
    return render_template('about.html')

@app.route('/visualization') # This si the visualization page route
def visualization():
    return render_template('visualization.html')

if __name__ == '__main__':
    app.run(debug=True)
