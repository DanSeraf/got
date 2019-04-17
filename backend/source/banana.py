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

class Users(db.Model):
    __tablename__ = "users"
    uid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(80))
    username = db.Column(db.String(80))
    posted = db.Column(db.Boolean)
    
    characters = db.relationship('Userscharacters', backref='users', lazy='dynamic')

    def __repr__(self):
        return '%s, %s, %s, %s' %(self.uid, self.email, self.username)

class Userscharacters(db.Model):
    __tablename__ = 'userscharacters'
    ucid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(80))
    value = db.Column(db.Integer)

    user_id = db.Column(db.Integer, db.ForeignKey('users.uid'))
    
    def __repr__(self):
        return '%s, %s, %s' %(self.ucid, self.name, self.value)

class Characters(db.Model):
    __tablename__ = 'characters'
    cid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(80))
    pic = db.Column(db.String(80))

    def __repr__(self):
        return '%s, %s, %s' %(self.cid, self.name, self.pic)

def initCharacters():
    file = open('extrated.txt')
    f_str = file.read()
    characters_dict = json.loads(f_str)
    for name in characters_dict:
        new_character = Characters(name = name, pic = characters_dict[name])
        db.session.add(new_character)

def mapDB():
    db.create_all()
    initCharacters()
    db.session.commit()

@app.route('/user/new-user', methods=['GET', 'POST'])
def newUser():
    uname = request.args.get('username')
    email = request.args.get('email')
    user = Users(email = email, username = uname, posted=False)
    db.session.add(user)
    db.session.commit()
    return jsonify({'status': 'ok'})

@app.route('/characters/all', methods=['GET'])
def allCharacters():
    qres = Characters.query.all()
    return json.dumps(qres, cls=AlchemyEncoder)

@app.route('/user/get-username', methods=['POST'])
def getUsername():
    email = request.args.get('email')
    user = Users.query.filter_by(email = email).all()
    res = user[0].__dict__
    username = res['username']
    posted = res['posted']
    return json.dumps({'username': username, 'posted': posted})

@app.route('/user/<username>', methods=['GET'])
def getUser(username):
    qres = Users.query.filter_by(username = username).first()
    return json.dumps(qres, cls=AlchemyEncoder)

@app.route('/user/post_data', methods=['POST'])
def postData():
    import ast 
    raw = request.args.get('data')
    data = ast.literal_eval(raw)
    for k in data:
        print(k)
        uname = k
        raw_d = data[k]
        q = Users.query.filter_by(username = uname).first()
        for k in raw_d:
            print(k)
            to_add = Userscharacters(name=k, value=raw_d[k])
            q.characters.append(to_add)
    
    user = Users.query.filter_by(username = uname).first()
    user.posted = True
    db.session.commit() 

    return json.dumps({'status':'ok'})

#@app.route('/user/posted', methods=['POST'])
#def posted():


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8443, debug=True)
