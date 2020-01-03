from flask import Flask, redirect, render_template

app = Flask(__name__)

@app.route('/',methods=['GET','POST'])
def home():
    d = "Kool"
    return render_template('home.html',d=d)


@app.route('/todo', methods=['GET','POST'])
def todo():
    return render_template('todo.html')

if __name__ == '__main__':
    app.run(debug=True)