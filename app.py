from flask import Flask,render_template,request
# import cv2
# from cvzone.HandTrackingModule import HandDetector
# from cvzone.ClassificationModule import Classifier
# import numpy as np
# import math

app = Flask(__name__)
# hand_detector = HandDetector(detectionCon=0.8, maxHands=2)

@app.route('/')
def landing_page():
    return render_template('index.html')

@app.route('/interpretor')
def interpretor():
    return render_template ('interpretor.html')

# @app.route('/start', methods=['POST'])
# def start():
#     frame_data = request.form['frame_data']

#     # Convert base64 image data to OpenCV format
#     frame_bytes = np.frombuffer(frame_data, dtype=np.uint8)
#     frame = cv2.imdecode(frame_bytes, cv2.IMREAD_COLOR)

#     # Perform hand detection with cvzone
#     hands = hand_detector.findHands(frame)

#     # Process detected hands (replace with your logic)
#     # Here, we're just printing the number of detected hands
#     num_hands = len(hands)
#     print("Number of hands detected:", num_hands)

#     # Return a response (optional)
#     return "Frame received and processed successfully"

if __name__ == "__main__":
    app.run(debug=True, port=8000)