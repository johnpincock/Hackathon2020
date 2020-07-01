from flask import Flask, render_template, request, g,jsonify
import json
import sys, inspect, os, codecs, re

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("goodDashboard.html")

@app.route('/carers')
def worker():
    return render_template("worker.html")

@app.route('/assignment')
def assignment():
    return render_template("assigning.html")

@app.route('/carer_analytics')
def carer_analytics():
    return render_template("dash.html")


@app.route('/api')
def api():
    return jsonify(hello='bouh !')

        
##@app.route('/list')
##def list():
##    from models import List
##    lrow = List.lrow
##    return render_template("list.html",rows = lrow)


if __name__ == '__main__':
   app.run(debug = True)
