# 🥗 BeforeYouEat

**Know what you eat. Before you eat.**

BeforeYouEat is an AI-powered web app that helps users understand the health impact of packaged and natural foods. It analyzes ingredients, detects harmful additives, provides personalized health insights, and keeps users informed with real-time food safety news.

---

## 🚀 Features

### 📷 Scan Product Ingredients

- Extracts text using OCR (Tesseract.js)
- Splits ingredients intelligently
- Detects harmful, moderate, and safe ingredients using dataset + AI
- Provides:
  - ⚠️ Health warnings
  - 📊 Smart health score
  - 🧠 Ingredient breakdown
  - 💡 Personalized insights

---

### 🔍 Scan Product Barcode

- Fetches real product data using OpenFoodFacts API
- Automatically extracts and analyzes ingredients

---

### 🍎 Natural Food Analysis (USP 🚀)

- Search any food (e.g., apple, rice, banana)
- Uses **USDA FoodData Central API** for real nutritional data
- Shows:
  - 🧪 Key nutrients (amount + units)
  - 💚 Health benefits (dataset + AI fallback)

---

### 🧠 Smart Ingredient Intelligence (NEW 🔥)

- Uses **custom local dataset (200+ ingredients + INS codes)**
- Categorizes ingredients into:
  - Safe
  - Moderate
  - Harmful
- Includes:
  - Risk level
  - Reason
  - Usage
  - Avoid recommendations

---

### 📊 Smart Health Score (NEW 🔥)

- Dynamically calculated based on ingredient risks
- Weighted scoring system
- Provides realistic product health evaluation

---

### 👤 Personalization

- Supports different user types:
  - Adult
  - Child
  - Diabetic
  - Fitness

- Generates context-aware warnings:
  - Sugar → Diabetic warning
  - Sodium → Blood pressure warning
  - INS additives → Child safety warning

---

### 📰 Food Awareness News (NEW 🚀)

- Real-time food safety news using **GNews API**
- Focused on:
  - FSSAI updates
  - Food safety issues in India
  - Ingredient-related risks

- Features:
  - Horizontal scroll news cards
  - Click → detailed modal view
  - Source + article link

---

### 🌙 UI Enhancements

- Dark mode toggle
- Smooth animations (Framer Motion)
- Guided "Show Me" walkthrough

---

## 🛠️ Tech Stack

### Frontend

- React + TypeScript  
- Vite  
- Tailwind CSS  
- Framer Motion  

### Backend

- Node.js + Express  
- OpenAI API (AI fallback)  
- USDA API (nutrition data)  
- GNews API (food news)  

---

### Data (No Database Used)

- Local structured datasets:
  - `ingredientData.ts`
  - `healthBenefitsData.ts`

---

### External APIs

- OpenFoodFacts API → Barcode data  
- OpenAI API → AI analysis (fallback)  
- USDA FoodData Central API → Nutrition  
- GNews API → Food safety news  

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

### GET `/food-news`
* Fetches real-time food safety news
* Uses GNews API
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
