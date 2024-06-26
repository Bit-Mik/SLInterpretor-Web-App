from flask import Flask, render_template, request
# import cv2
# from cvzone.HandTrackingModule import HandDetector
# # from cvzone.ClassificationModule import Classifier
# import numpy as np
# import math

app = Flask(__name__)
# hand_detector = HandDetector(detectionCon=0.8, maxHands=2)


@app.route('/')
def landing_page():
    return render_template('index.html')


@app.route('/interpretor', methods=['GET', 'POST'])
def interpretor():
    return render_template('interpretor.html')


if __name__ == "__main__":
    app.run(debug=True, port=8000)
