const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = 3001;

const genAI = new GoogleGenerativeAI('AIzaSyAiIaZxzlrZZP5Hpl3me10wJ8y5SQNOwrk');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.use(cors());

app.use(express.json());

app.get('/getDailyInformation', async (req, res) => {
    const prompt = req.body.prompt || "Bana hayatı kolaylaştıran bir bilgi ver. Maksimum 3 cümle olsun.";

    try {
        const result = await model.generateContent(prompt);
        
        res.json({
            response: result.response.text()
        });
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).json({
            error: "Bir hata oluştu, lütfen tekrar deneyin."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// npm install express cors @google/generative-ai
// "type": "commonjs"