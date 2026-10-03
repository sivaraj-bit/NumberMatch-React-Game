function GameSetup({
  targetNumber,
  setTargetNumber,
  selectedChances,
  setSelectedChances,
  startGame,
  gameStarted,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      <div className="mb-6">
        <span className="text-xs font-bold tracking-wider text-blue-600">
          GAME SETUP
        </span>

        <h2 className="mt-2 text-xl font-bold text-slate-900">
          Create Your Challenge
        </h2>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          Choose your target number and number of chances.
        </p>
      </div>

      <div className="space-y-5">

        {/* Target */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Target Number
          </label>

          <input
            type="number"
            min="1"
            max="100"
            value={targetNumber}
            onChange={(e) => setTargetNumber(e.target.value)}
            placeholder="Enter 1 - 100"
            disabled={gameStarted}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100"
          />
        </div>

        {/* Chances */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Number of Chances
          </label>

          <select
            value={selectedChances}
            onChange={(e) => setSelectedChances(Number(e.target.value))}
            disabled={gameStarted}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100"
          >
            <option value={1}>1 Chance</option>
            <option value={2}>2 Chances</option>
            <option value={3}>3 Chances</option>
            <option value={4}>4 Chances</option>
            <option value={5}>5 Chances</option>
            <option value={6}>6 Chances</option>
            <option value={7}>7 Chances</option>
            <option value={8}>8 Chances</option>
            <option value={9}>9 Chances</option>
            <option value={10}>10 Chances</option>
          </select>
        </div>

      </div>

      <button
        onClick={startGame}
        disabled={gameStarted}
        className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {gameStarted ? "Game In Progress" : "Start Game"}
      </button>

    </div>
  );
}

export default GameSetup;