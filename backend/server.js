const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("🚀 Page Pulse Backend is Running!");
});

// Audit Route
app.post("/audit", async (req, res) => {
    try {
        const { url } = req.body;

        // Check if URL is provided
        if (!url) {
            return res.status(400).json({
                error: "Please enter a website URL."
            });
        }

        // Validate URL
        try {
            new URL(url);
        } catch {
            return res.status(400).json({
                error: "Invalid URL. Please include http:// or https://"
            });
        }

        const startTime = Date.now();

        const response = await axios.get(url, {
            timeout: 5000,
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36"
            }
        });

        // Check HTML response
        const contentType = response.headers["content-type"] || "";

        if (!contentType.includes("text/html")) {
            return res.status(400).json({
                error: "This URL does not contain an HTML page."
            });
        }

        const endTime = Date.now();

        const $ = cheerio.load(response.data);

        const title = $("title").text().trim() || "Not Found";

        const metaDescription =
            $('meta[name="description"]').attr("content") || "Not Found";

        const h1Count = $("h1").length;

        const imagesWithoutAlt = $("img:not([alt])").length;

        const wordCount = $("body")
            .text()
            .trim()
            .split(/\s+/)
            .filter(word => word.length > 0)
            .length;

        res.json({
            status: response.status,
            responseTime: `${endTime - startTime} ms`,
            title,
            metaDescription,
            h1Count,
            imagesWithoutAlt,
            wordCount
        });

    } catch (error) {

        if (error.response) {
            return res.status(error.response.status).json({
                error: `Website returned HTTP ${error.response.status}. Access may be blocked.`
            });
        }

        if (error.code === "ECONNABORTED") {
            return res.status(408).json({
                error: "Request timed out."
            });
        }

        res.status(500).json({
            error: "Unable to analyze this website."
        });
    }
});

// Render uses its own PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});