from extract_audio import extract_audio
from transcribe_audio import transcribe_audio
from transformer_llm import query_transformer

def main():
    video_file = "uploads/video.mp4"
    audio_file = "uploads/extracted_audio.wav"

    print("Extracting audio...")
    extract_audio(video_file, audio_file)

    print("Transcribing audio...")
    transcript = transcribe_audio(audio_file)
    if not transcript:
        print("Failed to transcribe audio.")
        

    print("Sending to Transformer for analysis...")
    response = query_transformer(transcript)
    print("\n=== Transformer Analysis ===\n", response)

if __name__ == "__main__":
    main()
