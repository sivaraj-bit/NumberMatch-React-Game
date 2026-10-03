import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import GameSetup from "./components/GameSetup";
import GameBoard from "./components/GameBoard";
import GameStats from "./components/GameStats";
import Footer from "./components/Footer";

function App() {
  const [targetNumber, setTargetNumber] = useState("");
  const [selectedChances, setSelectedChances] = useState(3);

  const [gameStarted, setGameStarted] = useState(false);
  const [chances, setChances] = useState(3);
  const [randomNumber, setRandomNumber] = useState(null);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const [timeLeft, setTimeLeft] = useState(30);

  const [score, setScore] = useState(0);
  const [wins, setWins] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);

  const [bestScore, setBestScore] = useState(() => {
    return Number(localStorage.getItem("numberMatchBestScore")) || 0;
  });

  // Timer
  useEffect(() => {
    if (!gameStarted || result || timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, result, timeLeft]);

  // Time over
  useEffect(() => {
    if (gameStarted && timeLeft === 0 && !result) {
      setResult("lose");
      setGameStarted(false);
      setGamesPlayed((previousGames) => previousGames + 1);
    }
  }, [timeLeft, gameStarted, result]);

  // Start game
  const startGame = () => {
    const target = Number(targetNumber);

    if (!targetNumber || target < 1 || target > 100) {
      alert("Please enter a target number between 1 and 100.");
      return;
    }

    setChances(selectedChances);
    setGameStarted(true);
    setRandomNumber(null);
    setResult("");
    setHistory([]);
    setTimeLeft(30);
  };

  // Generate random number
  const generateNumber = () => {
    if (!gameStarted || chances === 0 || result) {
      return;
    }

    const random = Math.floor(Math.random() * 100) + 1;
    const remainingChances = chances - 1;

    setRandomNumber(random);
    setChances(remainingChances);

    setHistory((previousHistory) => [
      ...previousHistory,
      random,
    ]);

    // Win
    if (random === Number(targetNumber)) {
      const earnedScore = remainingChances * 10;
      const newScore = score + earnedScore;

      setResult("win");
      setGameStarted(false);
      setScore(newScore);
      setWins((previousWins) => previousWins + 1);
      setGamesPlayed((previousGames) => previousGames + 1);

      if (newScore > bestScore) {
        setBestScore(newScore);

        localStorage.setItem(
          "numberMatchBestScore",
          newScore
        );
      }

      return;
    }

    // Lose when chances are finished
    if (remainingChances === 0) {
      setResult("lose");
      setGameStarted(false);
      setGamesPlayed((previousGames) => previousGames + 1);
    }
  };

  // Play again with same settings
  const playAgain = () => {
    setChances(selectedChances);
    setGameStarted(true);
    setRandomNumber(null);
    setResult("");
    setHistory([]);
    setTimeLeft(30);
  };

  // Reset everything
  const resetGame = () => {
    setTargetNumber("");
    setSelectedChances(3);
    setChances(3);
    setGameStarted(false);
    setRandomNumber(null);
    setResult("");
    setHistory([]);
    setTimeLeft(30);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">

      <Navbar />

      <main className="flex-1 pt-16">

        {/* Hero */}
        <section className="border-b border-slate-200 bg-white flex justify-center text-center">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
              ⚛️ REACT.JS GAME PROJECT
            </span>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Number Match
              <span className="block text-blue-600">
                Challenge
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Choose your target number, set your chances,
              and generate random numbers. Match the target
              before your chances or time run out.
            </p>

          </div>
        </section>

        {/* Game */}
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-6 lg:grid-cols-5">

              <div className="lg:col-span-2">
                <GameSetup
                  targetNumber={targetNumber}
                  setTargetNumber={setTargetNumber}
                  selectedChances={selectedChances}
                  setSelectedChances={setSelectedChances}
                  startGame={startGame}
                  gameStarted={gameStarted}
                />
              </div>

              <div className="lg:col-span-3">
                <GameBoard
                  gameStarted={gameStarted}
                  randomNumber={randomNumber}
                  chances={chances}
                  result={result}
                  history={history}
                  timeLeft={timeLeft}
                  generateNumber={generateNumber}
                  playAgain={playAgain}
                  resetGame={resetGame}
                />
              </div>

            </div>

          </div>
        </section>

        {/* Statistics */}
        <GameStats
          score={score}
          wins={wins}
          gamesPlayed={gamesPlayed}
          bestScore={bestScore}
        />

      </main>

      <Footer />

    </div>
  );
}

export default App;