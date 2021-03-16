from flask import Flask, render_template, jsonify, json, request, redirect
from pickle import dump ad dump_p, load as load_p
import numpy as np
import pandas as pd 

# Load the Pickled model
with open('WAR_Pickle', 'rb') as model:
    mp=pickle.load(model)

app = Flask(__name__)

@app.rout("/", methods=["GET","POST"])
def home():
    predictions=0
    a={}

    if request.method == "POST":
        print(request.form)
        # read form data inputted by user
        user_age = request.form["selectAge"]
        user_salary = request.form["selectSalary"]
        user_wins = request.form["selectWins"]
        user_contract = request.form["selectContract"]
        user_dl = request.form["selectDL"]

        # Place user inputs into a list and create dataframe for label encoding
        inputs = [user_age, user_salary, user_wins, user_contract, user_dl]
        inputs_pd = pd.DataFrame([inputs])

        # Dict of user inputs
        a = {
            "selectAge": user_age,
            "selectSalary": user_salary,
            "selectWins": user_wins,
            "selectContract": user_contract,
            "selectDL": user_dl
        }
        print(a)

    return render_template("initial.html", predict=5 * prediction, form_resuse=a)

if __name__ = "__main__":
    app.run(debug=True)

