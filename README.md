<div align="center">

# 🌟🎬 MovieHub 🎬🌟

**Explore trending movies, TV series, and trailers — all in one place 🚀**

---

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#installation">Installation</a> •
  <a href="#tech-stack">Tech Stack</a>
</p>


[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org)


</div>

## 🚀 Features

* 🔥 **Trending** — Discover the latest trending movies and TV shows updated daily
* 🎬 **Movies** — Browse and explore a wide collection of popular movies
* 📺 **TV Series** — Find and watch details about trending TV series
* 🔍 **Search** — Search for movies and TV shows instantly
* ▶️ **Watch Trailers** — Play official trailers directly in the app
* ⭐ **Ratings** — View movie ratings and popularity
* 📱 **Responsive Design** — Works smoothly on mobile, tablet, and desktop

---


## 🚀 Demo

Experience the live portfolio at [https://darshiu.github.io/moviehub/](https://darshiu.github.io/moviehub/)

## 🛠️ Installation

1️⃣ Clone the repository:

```bash
git clone https://github.com/darshiu/movieHub
```

2️⃣ Navigate to project directory:

```bash
cd movieHub
```

3️⃣ Install dependencies:

```bash
npm install
```

4️⃣ Run development server:

```bash
npm run dev
```

5️⃣ Open in browser:

- Visit [http://localhost:3000](http://localhost:3000)

## 💻 Tech Stack

<table align="center">
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
      <br>React
    </td>
      <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=vite" width="48" height="48" alt="Vite" />
      <br>Vite
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=materialui" width="48" height="48" alt="Material UI" />
      <br>Material UI
    </td>
  </tr>
</table>

## 📱 MovieDB / TMDB API

This project uses **TMDB (The Movie Database) API** to fetch movie and TV series data.

* **Website:** https://developers.themoviedb.org/3

---

### 🔑 Setup API Key

1. Create a `.env` file in the root of your project:

```bash
VITE_API_KEY=your_real_api_key_here
```

2. Replace `your_real_api_key_here` with your **TMDB API key**.

3. Access the API key in your React code like this:

```js
const API_KEY = import.meta.env.VITE_API_KEY;

const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
```




