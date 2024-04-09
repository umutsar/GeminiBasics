import google.generativeai as genai

myApiKey = "your-gemini-api-key"
genai.configure(api_key=myApiKey)

model = genai.GenerativeModel("gemini-pro")

chat = model.start_chat()

while True:
    message = input("User: ")
    response = chat.send_message(message)

    print("Gemini: " + response.text)
    print("***********************************")
