# PoolKit

**PoolKit** is the all-in-one toolkit for **pump.fun streamers**.
Automod, overlays, polls, and TTS — everything you need to run interactive streams and manage your community in seconds.

Set up in **under 60 seconds** and start streaming smarter.

CA pump.fun : xxxxxxxxxxpump
---

## 🚀 Features

* **🤖 Automod**

  * Automatically filter spam, scams, and unwanted messages.
  * Keep your stream chat clean and safe.

* **📊 Live Polls**

  * Run instant community polls during streams.
  * Let viewers vote in real-time.

* **🔊 Text-to-Speech (TTS)**

  * Convert chat messages into voice alerts.
  * Increase interaction with your audience.

* **🖥 Stream Overlays**

  * Beautiful overlays designed for pump.fun streamers.
  * Display alerts, polls, and messages on stream.

* **⚡ Instant Setup**

  * Connect and start streaming tools in **less than a minute**.

---

## 🧩 Use Cases

PoolKit is designed for:

* pump.fun token launch streamers
* Web3 content creators
* crypto trading streamers
* community AMAs
* interactive livestream events

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/PoolKit/PoolKit.git
cd PoolKit
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory.

```env
PORT=3000
API_KEY=your_api_key
TTS_PROVIDER=enabled
OVERLAY_PORT=4000
```

---

## 🖥 Example Project Structure

```
poolkit
│
├── src
│   ├── automod
│   │   └── filter.js
│   │
│   ├── polls
│   │   └── pollManager.js
│   │
│   ├── tts
│   │   └── ttsEngine.js
│   │
│   ├── overlays
│   │   └── overlayServer.js
│   │
│   └── index.js
│
├── public
│   └── overlay.html
│
├── config
│   └── default.json
│
├── .env.example
├── package.json
└── README.md
```

---

## 🧠 Example Code

Simple example of triggering TTS from chat:

```javascript
import { speak } from "./tts/ttsEngine.js"

function onChatMessage(user, message) {
  speak(`${user} says ${message}`)
}

onChatMessage("viewer123", "Pump it!")
```

---

## 🔗 Links

* Twitter / X: https://x.com/PoolKitFun
* Community: https://x.com/PoolKitFun

---

## 🛠 Roadmap

* [ ] OBS native plugin
* [ ] Stream alerts marketplace
* [ ] Token gated stream features
* [ ] AI moderation
* [ ] Stream analytics dashboard

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Submit a pull request

---

## 📜 License

MIT License

---

## ⭐ PoolKit

Built for the **next generation of pump.fun streamers**.
