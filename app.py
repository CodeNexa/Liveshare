from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

# Database initialization
DATABASE = 'hampton_church.db'

def init_db():
    with sqlite3.connect(DATABASE) as conn:
        cursor = conn.cursor()
        # Create events table
        cursor.execute('''CREATE TABLE IF NOT EXISTS events (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            title TEXT NOT NULL,
                            date TEXT NOT NULL,
                            description TEXT NOT NULL)''')
        # Create contact messages table
        cursor.execute('''CREATE TABLE IF NOT EXISTS messages (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            name TEXT NOT NULL,
                            email TEXT NOT NULL,
                            message TEXT NOT NULL)''')
    print("Database initialized.")

@app.route('/')
def home():
    # Fetch events from the database
    with sqlite3.connect(DATABASE) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT title, date, description FROM events ORDER BY date ASC")
        events = cursor.fetchall()

    # Pass events to the template
    return render_template('index.html', events=events)

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    # Save message to the database
    with sqlite3.connect(DATABASE) as conn:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)", (name, email, message))
        conn.commit()
    return redirect(url_for('home'))

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
