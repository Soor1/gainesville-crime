import pandas as pd
import glob
import os
import sqlite3

csvFolder = 'path to folder of csv files'
database = 'path to db'

conn = sqlite3.connect(database)
cursor = conn.cursor()

def calculate_daily_percentage_change(df):
    df['Daily Change %'] = ((df['Close'] - df['Open']) / df['Open']) * 100
    return df[['Date', 'Daily Change %']]

for filepath in glob.glob(os.path.join(csvFolder, '*.csv')):
    company_name = os.path.basename(filepath).split('.')[0]
    df = pd.read_csv(filepath)
    df = calculate_daily_percentage_change(df)
    df.to_sql(company_name, conn, if_exists='replace', index=False)

conn.close()

print("done!")