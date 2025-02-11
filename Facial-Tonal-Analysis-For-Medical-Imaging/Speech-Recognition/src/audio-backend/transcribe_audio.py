import whisper

def transcribe_audio(audio_path: str):
    model = whisper.load_model("base")
    result = model.transcribe(audio_path)
    print("Transcription:", result['text'])

if __name__ == "__main__":
    audio_file = "uploads/extracted_audio.wav"
    transcribe_audio(audio_file)
