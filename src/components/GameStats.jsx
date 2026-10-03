function GameStats({
  score,
  wins,
  gamesPlayed,
  bestScore,
}) {
  const stats = [
    {
      label: "Score",
      value: score,
      icon: "🏆",
    },
    {
      label: "Wins",
      value: wins,
      icon: "🎉",
    },
    {
      label: "Games",
      value: gamesPlayed,
      icon: "🎮",
    },
    {
      label: "Best Score",
      value: bestScore,
      icon: "⭐",
    },
  ];

  return (
    <section className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-6">
          <span className="text-xs font-bold tracking-wider text-blue-600">
            PERFORMANCE
          </span>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Game Statistics
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">
                  {stat.icon}
                </span>

                <span className="text-2xl font-black text-slate-900">
                  {stat.value}
                </span>
              </div>

              <p className="mt-3 text-sm font-medium text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default GameStats;