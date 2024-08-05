from flask import Flask, render_template, jsonify, request, session, g
import sqlite3
from math import radians, cos, sin, sqrt, atan2
from datetime import datetime
import json
import heapq

app = Flask(__name__)

# ----------------- Helper Functions -----------------
def haversine(lat1, lon1, lat2, lon2):
    R = 3959

    dlat = radians(lat2 - lat1)
    dlon = radians(lon2 - lon1)
    a = sin(dlat / 2) ** 2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c
    return distance

def kLargestHeap(v, k):

    # Implementation using
    # a Priority Queue
    pq = []
    heapq.heapify(pq)

    for i in range(len(v)):

        # Insert elements into
        # the priority queue
        heapq.heappush(pq, v[i])

        # If size of the priority
        # queue exceeds k
        if (len(pq) > k):
            heapq.heappop(pq)
    # Orders elements into a new list of largest elements
    res = []
    while(len(pq) != 0):
        res.append(heapq.heappop(pq))
    return res

# ----------------- Data Routes -----------------

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

@app.route('/crimes', methods=['GET'])
def get_crimes():
    start_time = request.args.get('startTime')
    end_time = request.args.get('endTime')
    latitude = request.args.get('latitude')
    longitude = request.args.get('longitude')
    radius = request.args.get('radius')

    latitude = float(latitude)
    longitude = float(longitude)
    radius = float(radius)
    start_time = int(start_time)
    end_time = int(end_time)

    conn = sqlite3.connect('db/crime.db')
    cursor = conn.cursor()

    query = "SELECT * FROM incidents"
    params = []

    query += " WHERE Offense_Hour_of_Day BETWEEN ? AND ?"
    params.extend([start_time, end_time])

    cursor.execute(query, params)
    rows = cursor.fetchall()

    filtered_rows = {}
    for row in rows:
        crime_latitude = row[11]
        crime_longitude = row[12]

        # Ensure values are not None and are of the correct type (float)
        if (crime_latitude is None or crime_longitude is None or
            latitude is None or longitude is None or
            not isinstance(crime_latitude, float) or
            not isinstance(crime_longitude, float) or
            not isinstance(latitude, float) or
            not isinstance(longitude, float)):
            continue  # Skip this iteration if any condition is not met

        distance = haversine(latitude, longitude, crime_latitude, crime_longitude)
        if distance <= radius:
            if row[1] in filtered_rows:
                filtered_rows[row[1]].append([crime_latitude, crime_longitude])
            else:
                filtered_rows[row[1]] = [[crime_latitude, crime_longitude]]

    conn.close()  # Close the database connection after fetching the data

    return jsonify(filtered_rows)


# ----------------- Web Pages -----------------

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
