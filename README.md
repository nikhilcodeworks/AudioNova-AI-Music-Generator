<div align="center">

# 🎵 AudioNova — AI Music Generator & Audio Streaming Studio

<p align="center">
  <strong>Full-stack AI music generation and audio streaming platform allowing users to generate high-fidelity instrumental and ambient music tracks from natural language prompts, build playlists, and stream audio.</strong>
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-key-features">Key Features</a> •
  <a href="#-tech-stack--architecture">Tech Stack</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-getting-started">Getting Started</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Category-AI%20Audio%20%26%20Video%20Intelligence-7c3aed?style=for-the-badge" alt="Category: AI Audio & Video Intelligence" />
  <img src="https://img.shields.io/badge/Tech%20Stack-React%20%7C%20FastAPI%20%7C%20Audiocraft-10b981?style=for-the-badge" alt="Tech Stack: React | FastAPI | Audiocraft" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-8b5cf6?style=for-the-badge" alt="Status: Production Ready" />
  <img src="https://img.shields.io/badge/License-MIT-f59e0b?style=for-the-badge" alt="License: MIT" />
</p>

</div>

---

## 📌 Overview

**AudioNova-AI-Music-Generator** is an intelligent audio workstation combining deep learning music generation with full-featured audio streaming. Powered by Meta's Audiocraft (`musicgen`), Django REST Framework, and a React frontend, users can craft custom soundtracks from descriptive prompts (e.g., *"cinematic lo-fi beat with soft piano"*), curate custom playlists, and stream audio seamlessly.

---

## ✨ Key Features

- 🎹 **Text-to-Music Generation**: Transform textual descriptions and mood prompts into realistic audio tracks using Audiocraft.
- 🔐 **JWT User Authentication**: Registration, email verification, and secure token refresh cycles via Django SimpleJWT.
- 🎶 **Track Management & Playlists**: Create, update, and order personalized playlists with custom cover artwork.
- ❤️ **Social Audio Interactions**: Like/unlike tracks, maintain playback listening history, and monitor popularity rankings.
- 🔍 **Music Discovery & Search**: Fast search across song titles, artists, and music genres.
- 🚀 **Production Cloud Ready**: Includes `render.yaml` infrastructure configuration for swift cloud deployment.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
|---|---|
| **AI Model & Inference** | Meta Audiocraft (`musicgen`), PyTorch |
| **Backend REST API** | Python, Django, Django REST Framework |
| **Authentication** | Django SimpleJWT (`rest_framework_simplejwt`) |
| **Database** | PostgreSQL / SQLite |
| **Frontend Client** | React.js, Tailwind CSS, Framer Motion |
| **Cloud Deployment** | Render (`render.yaml`) |

---

## 📂 Project Structure

```text
AudioNova-AI-Music-Generator/
├── Audiocraftmg/              # MusicGen deep learning weights & inference service
├── Backend/                   # Django REST API
│   ├── api/
│   │   ├── auth/              # Registration, email confirmation, JWT login
│   │   ├── songs/             # Audio upload, playback & streaming endpoints
│   │   ├── playlists/         # Playlist curation & order management
│   │   └── ai/                # Audio prompt generation router
│   ├── media/                 # Stored audio binaries & artwork
│   └── manage.py
├── Frontend/                  # React music player & creator UI
├── API_REFERENCE.md           # Comprehensive endpoint documentation
├── render.yaml                # Cloud deployment recipe
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Python](https://www.python.org/) (v3.10+)
- [Node.js](https://nodejs.org/) (v18+)
- [FFmpeg](https://ffmpeg.org/) installed for audio rendering

### 1. Setup Backend
```bash
cd Backend
python -m venv venv
# Activate virtual environment:
# Windows: venv\Scripts\activate
# Linux/macOS: source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 2. Setup Frontend
```bash
cd ../Frontend
npm install
npm run dev
```

---

## 👤 Author
- **Nikhil** ([GitHub](https://github.com/nikhilcodeworks))

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.
