from flask import Flask, request
from flask_restful import Resource, Api
from flask import jsonify
from flask_cors import CORS
from chatbot import bot


app = Flask(__name__)
CORS(app)

@app.route("/",methods=['GET','POST'])
def get():
    args = request.args
    question = args['question']
    answer = bot(question)
    #print (answer) # For debugging
    return jsonify(answer)

if __name__ == '__main__':
     app.run(port='5002')
