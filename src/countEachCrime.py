import csv
import json
from collections import defaultdict

# Function to count the number of crimes of each type and store the result in a json file
def count_crimes(csv_file_path, json_file_path):
    crime_count = defaultdict(int)

    with open(csv_file_path, mode='r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            crime_type = row['Incident Type']
            crime_count[crime_type] += 1

    with open(json_file_path, mode='w') as jsonfile:
        json.dump(crime_count, jsonfile, indent=4)

csv_file_path = 'path to csv file'
json_file_path = 'path to output json'
count_crimes(csv_file_path, json_file_path)
