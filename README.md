# 📻 Radio Maroc Live — HD Moroccan Radio Streaming Platform 🇲🇦

<div align="center">

[![Author](https://img.shields.io/badge/Author-0dh4m-00E5FF?style=for-the-badge&logo=github&logoColor=white)](https://github.com/0dh4m)
[![Platform](https://img.shields.io/badge/Platform-Web%20SPA%20%7C%20RTL%20Arabic-7928CA?style=for-the-badge)](https://github.com/0dh4m/radio-maroc-live)
[![Streams](https://img.shields.io/badge/Stations-24%20Live%20Streams-FF0080?style=for-the-badge)](https://github.com/0dh4m/radio-maroc-live)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)

**A modern, ultra-lightweight Single Page Application (SPA) for streaming Morocco's leading radio stations.**
Features an animated audio visualizer, station categorization, favorites memory, and a responsive right-to-left Arabic interface.

[Stations](#-available-stations) • [Features](#-key-features) • [Tech Stack](#-technology-stack) • [Live Demo](#-quick-run)

</div>

---

## ✨ Key Features

- 📡 **24 Live Streams**: Direct low-buffer MP3 streams for Morocco's most popular stations.
- 🎚️ **Animated Audio Equalizer**: Real-time visual equalizer reacting to playback state.
- 🗂️ **Smart Category Filtering**:
  - 🎵 **Music & Youth**: Hit Radio, Skyrock Casablanca, Radio Plus…
  - ⚽ **Sports & News**: Radio Mars, Radio Aswat, MFM Radio…
  - 🕌 **Quran & Cultural**: Radio Quran Tarateel, Al Quran Maroc (Warsh), Abdulbasit Radio…
- ⭐ **Favorites & History**: Save preferred stations in local storage for one-click access.
- 📱 **Mobile-First Glassmorphic Design**: Smooth transitions, backdrop-blur aesthetics, and full touch-screen support.
- 🪶 **No Build Step**: Plain HTML, CSS and vanilla JavaScript — open the page and it runs.

---

## 📻 Available Stations

| Station | Category | Frequency |
| :--- | :--- | :--- |
| **Hit Radio** | Music / Top 40 | 99.8 FM |
| **Radio Mars** | Sports / Live Football | 91.2 FM |
| **Med Radio** | Talk / Entertainment | — |
| **Radio Aswat** | Society / Talk | — |
| **Radio Quran Tarateel** | Religious / Recitations | — |
| **Al Quran Maroc (Warsh)** | Religious / Recitations | — |
| **Abdulbasit Radio** | Religious / Recitations | — |
| **Atlantic Radio** | Music / Variety | — |
| **MFM Radio Maroc** | National News / Talk | — |
| **Cap Radio** | North Regional / Variety | — |
| *…and 14 more* | | |

The full station list lives in `MOROCCO_RADIO_STATIONS` inside [`app.js`](app.js).

---

## 🛠️ Technology Stack

- **Frontend**: Vanilla ES6+ JavaScript, HTML5 Audio API.
- **Styling**: Bootstrap 5 RTL + custom glassmorphism CSS variables.
- **Icons**: Font Awesome 6 Free.
- **Architecture**: Modular client-side SPA with hash-based view routing.

---

## 🚀 Quick Run

No compilation or build step required. Serve the folder with any static web server:

```bash
# Using Python
python -m http.server 3000

# Using Node.js
npx serve .
```

Then open `http://localhost:3000` in your browser.

---

## 👤 Author

**Adham Cherkaoui Eddeqaqi (0dh4m)**
- 🌐 Portfolio: [0dh4m.github.io](https://0dh4m.github.io/)
- 🐙 GitHub: [@0dh4m](https://github.com/0dh4m)
- ✉️ Email: 0dh4mm@gmail.com

---

## 📄 License

Proprietary and confidential — see [LICENSE](LICENSE). Unauthorized copying or distribution is prohibited.

*Copyright © 2026 Adham Cherkaoui Eddeqaqi (0dh4m). All rights reserved.*
