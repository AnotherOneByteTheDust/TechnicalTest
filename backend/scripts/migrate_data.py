import requests
import csv 
import json

CSV_URL = 'http://localhost:8080/Sample.csv'
API = 'http://localhost:3000/employees'

with requests.Session() as s:
    download = s.get(CSV_URL)

    decoded_content = download.content.decode('utf-8')

    cr = csv.reader(decoded_content.splitlines(), delimiter=',')
    csv_data = list(cr)
    employees = []
    
    for row in csv_data[1:]:
        employee = {
            "firstname": row[0],
            "secondname": row[1],
            "company": row[2],
            "address": row[3],
            "city": row[4],
            "state": row[5],
            "zip": row[6],
            "phone1": row[7],
            "phone2": row[8],
            "email": row[9],
            "department": row[10]
        }
        employees.append(employee)
    
    response = s.post(API, json=employees)
    print(response.text)