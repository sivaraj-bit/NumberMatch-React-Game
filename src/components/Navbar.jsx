function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl">
            🎯
          </div>

          <div>
            <h1 className="text-base font-bold text-slate-900 sm:text-lg">
              NumberMatch
            </h1>

            <p className="hidden text-xs text-slate-500 sm:block">
              Number Challenge Game
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden text-sm text-slate-500 md:block">
            React Game
          </span>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            React.js
          </span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;