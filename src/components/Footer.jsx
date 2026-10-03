function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 align-middle text-center sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

        <div>
          <p className="font-semibold text-slate-900">
            🎯 NumberMatch
          </p>

          <p className="text-xs text-slate-500">
            A React number matching game
          </p>
        </div>

        <p className="text-xs text-slate-500">
          © 2026 NumberMatch · React & Tailwind CSS
        </p>

      </div>

    </footer>
  );
}

export default Footer;