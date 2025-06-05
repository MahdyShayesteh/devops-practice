from flask import flask,request, jsonify
import psycopg2
import os

app = flask(__name__)

def get_db_connection():
    conn = psycopg2.connect(
        host = os.environ['DB_HOST'],
        database= os.environ['DB_NAME'],
        user = os.environ['DB_USER'],
        password= os.environ['DB_PASSWORD']
    )
    return conn

@app.route('/add', method=['POST'])
def add_item():
    data =request.json
    name = request.get('name')

    conn = get_db_connection()
    cur = conn.cursor()
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({'message':'Item added successfully'}),201


@app.route('/get', method=['GET'])
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('select * from items')
    rows = cur.fetchall()
    cur.close()
    conn.close()

    return jsonify(rows)