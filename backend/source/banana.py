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

assoc_table = db.Table('assoc_table',
    db.Column('user_id', db.Integer, db.ForeignKey('users.uid')),
    db.Column('character_id', db.Integer, db.ForeignKey('characters.cid'))
)

class Users(db.Model):
    uid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(80))
    username = db.Column(db.String(80))
    
    characters = db.relationship('Characters', secondary=assoc_table,
            backref = db.backref('users'))

    def __repr__(self):
        return '%s, %s, %s' %(self.uid, self.email, self.username)

class Characters(db.Model):
    cid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(80))
    pic = db.Column(db.String(80))
    value = db.Column(db.Integer)

    def __repr__(self):
        return '%s, %s, %s' %(self.cid, self.name, self.pic)

def initCharacters():
    file = open('extrated.txt')
    f_str = file.read()
    characters_dict = json.loads(f_str)
    for name in characters_dict:
        print(name)
        new_character = Characters(name = name, pic = characters_dict[name], value=2)
        db.session.add(new_character)

def mapDB():
    db.create_all()
    initCharacters()
    db.session.commit()

@app.route('/user/new-user', methods=['GET', 'POST'])
def newUser():
    uname = request.args.get('username')
    email = request.args.get('email')
    user = Users(email = email, username = uname)
    db.session.add(user)
    db.session.commit()
    #q = Users.query.filter_by(email = email).first()
    #print(q.__dict__)
    #for i in range(1,35):
    return jsonify({'status': 'ok'})

@app.route('/characters/all', methods=['GET'])
def allCharacters():
    qres = Characters.query.all()
    return json.dumps(qres, cls=AlchemyEncoder)

@app.route('/user/get_username', methods=['POST'])
def getUsername():
    email = request.args.get('email')
    qres = Users.query.filter_by(email = email).all()
    res = qres[0].__dict__
    username = res['username']
    print(username)
    return json.dumps(username)

@app.route('/user/get/', methods=['GET'])
def getUser():
    qres = Users.query.filter_by(username = 'nyme').first()
    return json.dumps(qres, cls=AlchemyEncoder)

#@app.route('/selected', methods=['POST'])
#def postForm():


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8443, debug=True)
