function GameBoard({
  gameStarted,
  randomNumber,
  chances,
  result,
  history,
  timeLeft,
  generateNumber,
  playAgain,
  resetGame,
}) {
  const gameFinished = result === "win" || result === "lose";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <span className="text-xs font-bold tracking-wider text-blue-600">
            GAME BOARD
          </span>

          <h2 className="mt-2 text-xl font-bold text-slate-900">
            Match the Number
          </h2>
        </div>

        <div className="flex gap-2">

          <div className="rounded-full bg-slate-100 px-4 py-2">
            <span className="text-xs text-slate-500">
              Chances
            </span>

            <span className="ml-2 font-bold text-slate-900">
              {chances}
            </span>
          </div>

          {gameStarted && !gameFinished && (
            <div className="rounded-full bg-orange-50 px-4 py-2">
              <span className="text-xs text-orange-600">
                ⏱️ {timeLeft}s
              </span>
            </div>
          )}

        </div>

      </div>

      {/* Number */}
      <div className="mt-6 rounded-2xl bg-slate-50 px-5 py-10 text-center">

        <p className="text-sm font-medium text-slate-500">
          Generated Number
        </p>

        <div className="my-5 flex h-28 items-center justify-center">

          {randomNumber !== null ? (
            <span className="text-6xl font-black text-blue-600 sm:text-7xl">
              {randomNumber}
            </span>
          ) : (
            <span className="text-5xl font-black text-slate-300">
              ?
            </span>
          )}

        </div>

        <p className="text-sm text-slate-500">
          {!gameStarted
            ? "Start the game to begin."
            : randomNumber === null
              ? "Generate your first number."
              : "Check if it matches your target."}
        </p>

      </div>

      {/* Win */}
      {result === "win" && (
        <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">

          <div className="text-4xl">
            🎉
          </div>

          <h3 className="mt-2 text-xl font-bold text-emerald-700">
            You Win!
          </h3>

          <p className="mt-1 text-sm text-emerald-600">
            Great job! You matched the target number.
          </p>

        </div>
      )}

      {/* Lose */}
      {result === "lose" && (
        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-5 text-center">

          <div className="text-4xl">
            😢
          </div>

          <h3 className="mt-2 text-xl font-bold text-red-700">
            You Lose!
          </h3>

          <p className="mt-1 text-sm text-red-600">
            Your chances or time ran out.
          </p>

        </div>
      )}

      {/* Buttons */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2">

        <button
          onClick={generateNumber}
          disabled={!gameStarted || chances === 0 || gameFinished}
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          🎲 Generate Number
        </button>

        <button
          onClick={gameFinished ? playAgain : resetGame}
          className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          {gameFinished ? "↻ Play Again" : "↻ Reset Game"}
        </button>

      </div>

      {/* History */}
      <div className="mt-8">

        <div className="mb-3 flex items-center justify-between">

          <h3 className="font-semibold text-slate-900">
            Attempt History
          </h3>

          <span className="text-xs text-slate-400">
            {history.length} attempt{history.length !== 1 ? "s" : ""}
          </span>

        </div>

        {history.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center">

            <p className="text-sm text-slate-400">
              Your generated numbers will appear here.
            </p>

          </div>
        ) : (
          <div className="flex flex-wrap gap-3">

            {history.map((number, index) => (
              <div
                key={index}
                className={`flex h-12 w-12 items-center justify-center rounded-xl font-bold ${
                  result === "win" &&
                  index === history.length - 1
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {number}
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default GameBoard;