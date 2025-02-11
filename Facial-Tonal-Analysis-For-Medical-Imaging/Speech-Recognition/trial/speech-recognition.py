from huggingsound import SpeechRecognitionModel

model = SpeechRecognitionModel("jonatasgrosman/wav2vec2-large-xlsr-53-english")
audio_paths = ["uploads/audio_1738152669946-480628109.wav"]

transcriptions = model.transcribe(audio_paths)
