import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
    res.send("Yuvilearn Gemini API running 🚀");
});

// ✅ AI Route (Gemini)
app.post("/ask-ai", async (req, res) => {

    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ error: "Question required" });
    }

    try {

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `You are a NEET tutor. Explain clearly step-by-step.\n\nQuestion: ${question}`
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        console.log("Gemini Response:", JSON.stringify(data, null, 2));

        if (data.error) {
            return res.status(500).json({
                error: data.error.message
            });
        }

        const answer =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No response from AI";

        res.json({ answer });

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
