import google.generativeai as genai 

myApiKey = "your-gemini-api-key"

genai.configure(api_key=myApiKey)

model = genai.GenerativeModel('gemini-pro')

response = model.generate_content("Explain me logic of computer system.")

print(response.text)
