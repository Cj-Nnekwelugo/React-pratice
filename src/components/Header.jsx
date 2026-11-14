function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">XYZ App</h1>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-2">
            {[
              "Home",
              "Products",
              "Transactions",
              "Support",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-900"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;