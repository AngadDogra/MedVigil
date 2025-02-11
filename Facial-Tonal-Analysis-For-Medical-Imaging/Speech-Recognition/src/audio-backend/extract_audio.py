import subprocess
import os

def extract_audio(video_path: str, audio_path: str):
    # FFmpeg command to extract audio
    command = [
        "ffmpeg",
        "-i", video_path,
        "-q:a", "0",  # Best audio quality
        "-map", "a",  # Extract only the audio stream
        audio_path,
        "-y"  # Overwrite existing file
    ]
    try:
        subprocess.run(command, check=True)
        print(f"Audio successfully extracted to: {audio_path}")
    except subprocess.CalledProcessError as e:
        print(f"Error extracting audio: {e}")

if __name__ == "__main__":
    video_file = "uploads/test_video.mp4"  # Replace with actual path
    audio_file = "uploads/extracted_audio.wav"
    
    if os.path.exists(video_file):
        extract_audio(video_file, audio_file)
    else:
        print(f"Video file '{video_file}' not found.")
