import speech_recognition as s_r
print(s_r.Microphone.list_microphone_names())
r = s_r.Recognizer()
my_mic = s_r.Microphone(device_index=1)
with my_mic as source:
    print("Tell us what ails you")
    audio = r.listen(source)
print(r.recognize_google(audio))
inp_string = r.recognize_google(audio)
from transformers import pipeline
analyzer = pipeline("sentiment-analysis")
analyzer(inp_string)
