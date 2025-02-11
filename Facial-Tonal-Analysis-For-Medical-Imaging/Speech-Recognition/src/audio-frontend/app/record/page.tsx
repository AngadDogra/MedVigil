"use client";
import { useRef, useState } from "react";

export default function RecordVideoAudio() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const [recording, setRecording] = useState(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });

      videoRef.current!.srcObject = stream;
      videoRef.current!.play();

      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.current.push(event.data);
        }
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      console.error("Error accessing media devices:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: "video/mp4" });
        chunks.current = [];
  
        // Create video download link (Optional)
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "recorded_video.mp4";
        a.click();
  
        // Upload the video to the backend
        const formData = new FormData();
        formData.append("video", blob, "recorded_video.mp4");
  
        fetch("http://localhost:5000/api/upload", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              alert("Video uploaded successfully!");
            } else {
              alert("Upload failed!");
            }
          })
          .catch((error) => {
            console.error("Error uploading video:", error);
          });
      };
    }
    setRecording(false);
  };
  

  const extractAudio = (blob: Blob) => {
    const audioContext = new AudioContext();
    const reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    reader.onload = () => {
      if (reader.result) {
        audioContext.decodeAudioData(reader.result as ArrayBuffer, (audioBuffer) => {
          console.log("Audio extracted for analysis", audioBuffer);
        });
      }
    };
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">🎥 Record Video & Audio</h1>
      <video ref={videoRef} width="640" height="480" className="border mb-4" />
      <button
        onClick={recording ? stopRecording : startRecording}
        className={`p-3 rounded-md ${
          recording ? "bg-red-500" : "bg-green-500"
        } text-white`}
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
}
