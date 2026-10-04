# 🎯 NumberMatch – React Number Matching Game

A simple and interactive number matching game built with **React.js** and **Tailwind CSS**. Choose a target number, set your chances, and generate random numbers to match the target before your chances or time run out.

## 🚀 Live Demo

🔗 **Live Demo:**[ https://sivaraj-bit.github.io/NumberMatch-React-Game/](https://number-match-react-game.vercel.app/)

## 📌 GitHub Repository

🔗 **Repository:** https://github.com/sivaraj-bit/NumberMatch-React-Game

---

## 🎮 About the Game

NumberMatch is a React-based number challenge game where the player:

1. Selects a target number between **1 and 100**.
2. Selects the number of chances.
3. Starts the game.
4. Generates random numbers.
5. Tries to match the generated number with the target number.
6. Wins if the target number is matched.
7. Loses if all chances are used without a match.
8. The game also includes a **30-second timer**.

---

## ✨ Features

* 🎯 Target number selection
* 🎲 Random number generation
* 🔢 1–100 number range
* ❤️ Custom number of chances
* ⏱️ 30-second game timer
* 🎉 Win and lose conditions
* 📜 Attempt history
* 🏆 Score system
* 🎮 Games played counter
* ⭐ Best score tracking
* 💾 Best score saved using localStorage
* 🔄 Play Again functionality
* ♻️ Reset Game functionality
* 📱 Responsive design
* ⚛️ React component-based architecture
* 🎨 Tailwind CSS styling

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **Vite**
* **HTML5**
* **Git & GitHub**
* **localStorage**

---

## ⚛️ React Concepts Practiced

This project helped me practice:

* `useState`
* `useEffect`
* Props
* Event handling
* Conditional rendering
* Array `map()`
* State management
* Component-based architecture
* Browser `localStorage`
* Dynamic UI updates

---

## 📂 Project Structure

```text
NumberMatch-React-Game/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── Favicon.png
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── GameSetup.jsx
│   │   ├── GameBoard.jsx
│   │   ├── GameStats.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/sivaraj-bit/NumberMatch-React-Game.git
```

### 2. Navigate to the project

```bash
cd NumberMatch-React-Game
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

Vite will provide a local development URL such as:

```text
http://localhost:5173
```

---

## 🎯 How to Play

### Step 1

Enter a target number between **1 and 100**.

### Step 2

Select the number of chances.

### Step 3

Click **Start Game**.

### Step 4

Click **Generate Number** to generate a random number.

### Step 5

If the generated number matches your target number, you win.

### Step 6

If your chances or the 30-second timer run out before matching the target, you lose.

---

## 🏆 Scoring

The score is calculated based on the number of chances remaining when the target number is matched.

```text
Score = Remaining Chances × 10
```

Your highest score is stored in the browser using `localStorage`.

---

## 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

---

## 🔮 Future Improvements

Possible future enhancements:

* 🎚️ Difficulty levels
* 🔊 Sound effects
* 🌙 Dark mode
* 🥇 Leaderboard
* 👤 Player profiles
* 📊 Detailed game statistics
* 🎨 More game themes

---

## 👨‍💻 Author

**Sivaraj G**

B.Sc Data Science Graduate | Front-End / Web Developer

### Skills

* HTML
* CSS
* Tailwind CSS
* JavaScript
* React.js
* Python
* SQL
* Git & GitHub
* MERN Stack – Learning

### GitHub

https://github.com/sivaraj-bit

### LinkedIn

www.linkedin.com/in/sivaraj33
---

## 📄 License

This project is created for **learning and portfolio purposes**.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

**Built with ❤️ using React.js and Tailwind CSS.**
