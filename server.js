import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔹 Test route
app.get("/", (req, res) => {
    res.send("Yuvilearn API running 🚀");
});

// 🔹 AI Route
app.post("/ask-ai", async (req, res) => {

    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ error: "Question is required" });
    }

    try {

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: "You are an expert NEET tutor. Explain clearly with simple steps and examples."
                    },
                    {
                        role: "user",
                        content: question
                    }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();

        // 🔍 Debug log (VERY IMPORTANT)
        console.log("OpenAI Response:", data);

        // ❌ Handle OpenAI errors
        if (!response.ok) {
            return res.status(500).json({
                error: data.error?.message || "OpenAI API failed"
            });
        }

        // ✅ Success
        res.json({
            answer: data.choices[0].message.content
        });

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: error.message });
    }
});

// 🔹 Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
