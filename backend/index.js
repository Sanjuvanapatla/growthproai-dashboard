// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Static headline templates
const headlineTemplates = [
  "Why [NAME] is [LOCATION]'s Favorite Spot for Foodies in 2025",
  "Discover How [NAME] is Redefining Quality in [LOCATION]",
  "[NAME]: The Best Choice for Locals in [LOCATION]",
  "Top 5 Reasons [NAME] is Trending in [LOCATION]",
  "Experience Excellence at [NAME], [LOCATION]'s Hidden Gem",
  "How [NAME] Became a Household Name in [LOCATION]",
  "[NAME]'s Secret Sauce to 5-Star Reviews in [LOCATION]"
];

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  const rating = (Math.random() * 1.5 + 3.5).toFixed(1); // 3.5 - 5.0
  const reviews = Math.floor(Math.random() * 300 + 50); // 50 - 350

  const headline = headlineTemplates[0]
    .replace(/\[NAME\]/g, name)
    .replace(/\[LOCATION\]/g, location);

  res.json({ rating: parseFloat(rating), reviews, headline });
});

// GET /regenerate-headline?name=...&location=...
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  const randomIndex = Math.floor(Math.random() * headlineTemplates.length);
  const rawTemplate = headlineTemplates[randomIndex];

  const headline = rawTemplate
    .replace(/\[NAME\]/g, name)
    .replace(/\[LOCATION\]/g, location);

  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
