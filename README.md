# 🎬 WATCHITALL — Premium Movie Streaming Platform

**WATCHITALL** is a full-featured movie streaming web app inspired by Netflix.  
Built with **HTML, CSS, and JavaScript**, integrated with **Firebase** for authentication and database, and **Midtrans** for secure payment processing.  

Only users who have **paid for a subscription** can stream movies.

---

## 🚀 Features

### 🔐 Authentication & User Accounts
- Login and register using **email & password** (Firebase Auth)
- Authenticated sessions persist with Firebase
- Access to streaming is restricted to **premium users only**

### 💳 Payment System
- Integrated with **Midtrans (Sandbox Mode)**
- Handles transaction states: *pending*, *success*, *failed*
- Updates user subscription status automatically

### 🎞️ Movie Streaming
- Watch movies directly from **external APIs (TMDB)**
- Only accessible by premium accounts
- Supports **multi-language** and **subtitles**

### 🧭 User Dashboard
- View **watch history**
- See **recently watched** movies
- Personalized **recommendations by genre**

### 🏠 Homepage
- Netflix-style movie slider
- Top 10 trending movies
- Production categories (Disney+, Marvel, etc.)
- Recommended movies based on preferences

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Database** | Firebase Firestore |
| **Auth** | Firebase Authentication |
| **Payment** | Midtrans API |
| **Movie API** | TMDB (The Movie Database) |
| **Hosting** | Firebase Hosting |


