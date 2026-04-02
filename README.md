# 🥗 BeforeYouEat

**Know what you eat. Before you eat.**

BeforeYouEat is an AI-powered web app that helps users understand the health impact of packaged and natural foods. It analyzes ingredients, detects harmful additives, and provides real-time nutritional insights.

---

## 🚀 Features

### 📷 Scan Product Ingredients

* Extracts text using OCR (Tesseract.js)
* Detects harmful, moderate, and safe ingredients
* Provides:

  * ⚠️ Health warnings
  * 📊 Health score
  * 💡 Personalized insights

---

### 🔍 Scan Product Barcode

* Fetches real product data using OpenFoodFacts API
* Analyzes ingredient list automatically

---

### 🍎 Natural Food Analysis (USP 🚀)

* Search any food (e.g., apple, rice, banana)
* Uses **USDA FoodData Central API** for real nutritional data
* Shows:

  * 🧪 Key nutrients (amount + units)
  * 💚 Health benefits (AI-generated)

---

### 👤 Personalization

* Supports different user types:

  * Adult
  * Child
  * Diabetic
  * Fitness

* Generates tailored warnings and insights

---

## 🛠️ Tech Stack

### Frontend

* React + TypeScript
* Vite
* Tailwind CSS
* Framer Motion

### Backend

* Node.js + Express
* OpenAI API (for ingredient analysis & benefits)
* USDA FoodData Central API (real nutrition data)

### Other Tools

* Tesseract.js (OCR)
* OpenFoodFacts API

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Anushre20/BeforeYouEat.git
cd BeforeYouEat
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
OPENAI_API_KEY=your_openai_key
USDA_API_KEY=your_usda_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### POST `/analyze`

* Analyzes ingredients using AI

### POST `/natural-food`

* Fetches real nutrition data using USDA API

---

## 📌 Notes

* Make sure backend runs on **http://localhost:5001**
* Do NOT upload `.env` files to GitHub

---

## 🎯 Future Improvements

* % Daily Value for nutrients
* Better AI explanations
* Food recommendations
* Mobile responsiveness

---

## 👩‍💻 Author

**Anupama**
Built with 💚 for better food awareness

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
