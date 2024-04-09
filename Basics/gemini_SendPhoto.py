
import google.generativeai as genai
import PIL.Image

myApiKey = "your-gemini-api-key"

genai.configure(api_key=myApiKey)

# An image containing the car park.
img = PIL.Image.open('./image.png')

model = genai.GenerativeModel('gemini-pro-vision')

# Send only photo:
# response = model.generate_content(img)

# Send photo with a message:
response = model.generate_content(["Nereye park edeyim?" ,img])

# Returned message:
print(response.text)
