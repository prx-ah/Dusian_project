from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import io


# Importing deps for image prediction
from tensorflow.keras.preprocessing import image
from PIL import Image
import numpy as np
from tensorflow.keras.models import load_model
import tensorflow as tf
import matplotlib.pyplot as plt

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/")
def home():
    return {"message": "Hello from backend"}

@app.route("/upload", methods=['POST'])
def upload():
    file = request.files['file']
    file.save('uploads/' + file.filename)

    # Load the image to predict
    img_path = f"./uploads/{file.filename}"
    img = image.load_img(img_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = tf.keras.applications.mobilenet_v3.preprocess_input(x)
    # x /= 255

    model = load_model('./model/newmodel.h5')
   # Make the prediction
    prediction = model.predict(x)
    class_names = {0: 'Healthy plants', 1: 'Plants with powdery disease', 2: 'Plants with rust disease'}
    predicted_class = np.argmax(prediction, axis=1)[0]
    # class_names = {'Healthy plants': 0,'Plants with powdery disease': 1,'Plants with rust disease': 2}
    predicted_class_name = class_names[predicted_class]
    if os.path.exists(f"./uploads/{file.filename}"):
        os.remove(f"uploads/{file.filename}")
    return jsonify({'class': predicted_class_name})

if __name__ == '__main__':
    app.run(debug=True)