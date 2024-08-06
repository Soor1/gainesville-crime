import sqlite3
import csv

# Path to the csv file and sqlite db file
csv_file = "path to csv file"
sqlite_db = 'path to sqlite db file'

# Connect to the sqlite db
conn = sqlite3.connect(sqlite_db)
cursor = conn.cursor()

# Create the table if it doesn't exist based on the csv file
cursor.execute('''
    CREATE TABLE IF NOT EXISTS incidents (
        ID TEXT,
        Incident_Type TEXT,
        Report_Date TEXT,
        Offense_Date TEXT,
        Report_Hour_of_Day INTEGER,
        Report_Day_of_Week TEXT,
        Offense_Hour_of_Day INTEGER,
        Offense_Day_of_Week TEXT,
        City TEXT,
        State TEXT,
        Address TEXT,
        Latitude REAL,
        Longitude REAL,
        Location TEXT
    )
''')

# Insert the data from the csv file into the sqlite db
with open(csv_file, 'r') as file:
    reader = csv.reader(file)
    headers = next(reader)
    rows = [row for row in reader]

cursor.executemany('''
    INSERT INTO incidents (
        ID, Incident_Type, Report_Date, Offense_Date, Report_Hour_of_Day,
        Report_Day_of_Week, Offense_Hour_of_Day, Offense_Day_of_Week, City,
        State, Address, Latitude, Longitude, Location
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
''', rows)


conn.commit()
conn.close()

print("done!")
