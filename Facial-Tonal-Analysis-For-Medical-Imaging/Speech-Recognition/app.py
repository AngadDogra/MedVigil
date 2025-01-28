from flask import Flask, request, render_template, jsonify
import speech_recognition as sr
from transformers import pipeline

# Initialize sentiment analysis pipeline
sentiment_pipeline = pipeline("sentiment-analysis")

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_audio', methods=['POST'])
def process_audio():
    if 'audio' not in request.files:
        return jsonify({'error': 'No audio file uploaded'})

    audio_file = request.files['audio']
    recognizer = sr.Recognizer()

    with sr.AudioFile(audio_file) as source:
        audio = recognizer.record(source) 
    try:
        text = recognizer.recognize_google(audio)
        sentiment = sentiment_pipeline(text)[0]['label']
        return jsonify({'sentiment': sentiment, 'transcription': text})
    except sr.UnknownValueError:
        return jsonify({'error': 'Could not understand audio'})

if __name__ == '__main__':
    app.run(debug=True)
