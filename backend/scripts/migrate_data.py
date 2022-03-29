import requests
import csv
import json
import psycopg2
import os
from dotenv import load_dotenv
from pathlib import Path

def insert_employee(employee, connection):
    cursor = connection.cursor()
    cursor.execute('''INSERT INTO employee
                   (first_name, second_name, company, address, city, state, zip, phone1, phone2, email, department)
                   VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                   ''', employee)
    connection.commit()

basepath = Path()
path = basepath.cwd() / '../.env'
load_dotenv(path)

connection = psycopg2.connect(
    database=os.getenv('DATABASE_NAME'),
    user=os.getenv('DATABASE_USER'),
    password=os.getenv('DATABASE_PASSWORD'),
    host=os.getenv('DATABASE_HOST'),
    port=os.getenv('DATABASE_PORT'),
    )

CSV_URL = "http://localhost:8080/Sample.csv"

with requests.Session() as s:
    download = s.get(CSV_URL)

    decoded_content = download.content.decode('utf-8')

    cr = csv.reader(decoded_content.splitlines(), delimiter=',')
    csv_data = list(cr)

    for row in csv_data[1:]:
        employee = tuple(row)
        insert_employee(employee, connection)
