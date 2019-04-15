#!/usr/bin/env python3

from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import sqlite3
import json

from encoder import AlchemyEncoder

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db/got.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)

class User(db.Model):
    uid = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
                                    
    def __repr__(self):
        return '[%s, %s]' %(self.uid, self.username)

def mapDB(db):
    c = sqlite3.connect('db/movies.db')
    cur = c.cursor()                                   
    cur.execute(''' SELECT * FROM movies ''')
    all_movies = cur.fetchall()
    db.create_all()
    for movie in all_movies:
        new_movie = Movies(mid=movie[0], title=movie[1], year=movie[2], poster=movie[3])
        db.session.add(new_movie)
    db.session.commit()

@app.route('/user/new_user/', methods=['GET', 'POST'])
def allMovies():
    qres = Movies.query.all()
    return json.dumps(qres, cls=AlchemyEncoder)

@app.route('/movies/year/<n>', methods=['GET'])
def searchByYear(n):
    qres = Movies.query.filter_by(year=n).all()
    return json.dumps(qres, cls=AlchemyEncoder)

@app.route('/movies/search/<name>', methods=['GET'])
def searchByTitle(name):
    qres = Movies.query.filter(Movies.title.like('%'+name+'%')).all()
    return json.dumps(qres, cls=AlchemyEncoder)

@app.route('/movies/mid/<id>', methods=['GET'])
def movieBy(id):
    print(id)
    qres = Movies.query.filter_by(mid=id).all()
    return json.dumps(qres, cls=AlchemyEncoder)

@app.route('/movies/available_years', methods=['GET'])
def allYears():
    qres = Movies.query.with_entities(Movies.year).order_by(Movies.year.desc()).distinct().all()
    return json.dumps(qres)

if __name__ == '__main__':
    #mapDB(db)
    app.run(port=8443, debug=True)
