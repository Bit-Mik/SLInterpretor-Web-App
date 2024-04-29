from flask import Flask,render_template,request
app = Flask(__name__)

@app.route('/')
def landing_page():
    return render_template('index.html')

@app.route('/interpretor')
def interpretor():
    return render_template ('interpretor.html')


if __name__ == "__main__":
    app.run(debug=True, port=8000)