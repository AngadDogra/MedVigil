from transformers import pipeline
from transformers import AutoModelForCausalLM, AutoTokenizer


def query_transformer(text: str) -> str:
    """
    Use Hugging Face Transformers to analyze the given text.
    """
    try:
        # Load a pre-trained model for conversational or text generation tasks
        generator = pipeline("text-generation", model="gpt2")  # Replace with other models if needed
        response = generator(text, max_length=200, num_return_sequences=1)
        return response[0]['generated_text']
    except Exception as e:
        print(f"Error during Transformer interaction: {e}")
        return ""

if __name__ == "__main__":
    audio_transcript = " Okay, so the problem that I have faced is that I have healed. My throat is cracky and I also have headache. So I would want to get medical assistance. I solved my medical issues."
    response_text = query_transformer(audio_transcript)
    print("Transformer Response:", response_text)
