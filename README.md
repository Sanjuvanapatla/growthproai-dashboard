# 🧠 GrowthProAI – Local Business Dashboard

This is a full-stack assignment project for the GrowthProAI internship. It simulates how small businesses might view their SEO content and Google Business data.

---

## 🚀 Live Demo

- **Live Link:** https://growthproai-dashboard-git-main-vanapatla-sanjay-kumars-projects.vercel.app/
- ** Record Video Link:** https://drive.google.com/file/d/1EttivdOJpfUuaCBmnzRlS_jI3GWRCz7c/view?usp=sharing

---

## 📁 Project Structure

growthproai-dashboard/
├── frontend/                  # React + Vite + Tailwind CSS (Client)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BusinessForm.jsx
│   │   │   ├── BusinessCard.jsx
│   │   │   └── Spinner.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── backend/                  # Node.js + Express API (Server)
│   ├── index.js              # Main entry file (Express server)
│   └── package.json
│
└── README.md                 # Project instructions and documentation



---

## 🖥️ Features

- 🔍 Business form with **name** and **location**
- ⭐ Simulated **Google rating** and **review count**
- 🧠 AI-generated **SEO headline**
- 🔁 "Regenerate Headline" functionality
- 🎯 Responsive design (mobile + desktop)
- ⏳ Loading spinner while fetching data
- ❗ Basic form validation

---

## 🛠️ Technologies Used

- **Frontend:** React, Vite, Tailwind CSS, Axios
- **Backend:** Node.js, Express, CORS

---

## ⚙️ Getting Started (Local Setup)

### 🔹 Clone the Repository

```bash
git clone https://github.com/Sanjuvanapatla/growthproai-dashboard.git
cd growthproai-dashboard

🔹 Setup Frontend
bash
Copy code

cd frontend
npm install
npm run dev

🔹 Setup Backend
cd ../backend
npm install
node index.js

📬 API Endpoints
POST /business-data
Request:

json
Copy code
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
Response:

json
Copy code
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
GET /regenerate-headline?name=...&location=...
Returns: A random SEO-style headline

📄 Submission Checklist
 Frontend + Backend in one GitHub repo ✅

 Clean UI and responsive layout ✅

 Functional endpoints and form ✅

 Deployed links added to README ✅

👤 Author
Name: Vanapatla Sanjay Kumar

GitHub: https://github.com/Sanjuvanapatla/

---
