import csv
import json
from collections import defaultdict

def csv_to_json(csv_file_path, json_file_path):
    crime_count = defaultdict(int)
    
    with open(csv_file_path, mode='r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            crime_type = row['Incident Type']
            crime_count[crime_type] += 1
    
    with open(json_file_path, mode='w') as jsonfile:
        json.dump(crime_count, jsonfile, indent=4)

csv_file_path = '/Users/soorhansalia/DSA-Project3/crimeData/Crime_Responses.csv'
json_file_path = 'count.json'
csv_to_json(csv_file_path, json_file_path)
