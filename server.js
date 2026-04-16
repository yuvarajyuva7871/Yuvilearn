import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Yuvilearn API running 🚀");
});

app.post("/ask-ai", async (req, res) => {

    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ error: "Question required" });
    }

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: "You are a NEET tutor. Explain step-by-step clearly."
                    },
                    {
                        role: "user",
                        content: question
                    }
                ]
            })
        });

        const data = await response.json();

        res.json({
            answer: data.choices?.[0]?.message?.content || "No response"
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running...");
});
