from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import csv
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# MySQL database configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '#Trader1429',
    'database': 'Bhav_F&O_Data'
}

# Function to insert CSV data into the database
def insert_csv_data(data):
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    # Create table if it doesn't exist
    create_table_query = """
    CREATE TABLE IF NOT EXISTS options_data (
        id INT AUTO_INCREMENT PRIMARY KEY,
        INSTRUMENT VARCHAR(255),
        SYMBOL VARCHAR(255),
        EXPIRY_DT DATE,
        STRIKE_PR FLOAT,
        OPTION_TYP VARCHAR(255),
        OPEN FLOAT,
        HIGH FLOAT,
        LOW FLOAT,
        CLOSE FLOAT,
        SETTLE_PR FLOAT,
        CONTRACTS INT,
        VAL_INLAKH FLOAT,
        OPEN_INT INT,
        CHG_IN_OI INT,
        TIMESTAMP TIMESTAMP
    )
    """
    cursor.execute(create_table_query)

    # Insert data into the table
    insert_query = "INSERT INTO options_data (INSTRUMENT, SYMBOL, EXPIRY_DT, STRIKE_PR, OPTION_TYP, OPEN, HIGH, LOW, CLOSE, SETTLE_PR, CONTRACTS, VAL_INLAKH, OPEN_INT, CHG_IN_OI, TIMESTAMP) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    cursor.executemany(insert_query, data)

    connection.commit()
    cursor.close()
    connection.close()

# Route to handle file upload
@app.route('/upload-csv', methods=['POST'])
def upload_csv():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join('uploads', filename)
        file.save(file_path)

        with open(file_path, 'r') as csv_file:
            csv_reader = csv.reader(csv_file)
            next(csv_reader)  # Skip the header row if present in the CSV
            data = [tuple(row) for row in csv_reader]
            insert_csv_data(data)

        os.remove(file_path)  # Remove the uploaded file after processing

        return jsonify({'message': 'File uploaded and data inserted successfully'})

if __name__ == '__main__':
    app.run(debug=True)