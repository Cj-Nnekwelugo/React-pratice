function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-8 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">XYZ App</h3>
          <p className="mt-2 text-sm text-slate-400">
            Smart tools for modern living and better daily decisions.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-4 text-sm">
          <a href="#" className="transition hover:text-white">Home</a>
          <a href="#" className="transition hover:text-white">Products</a>
          <a href="#" className="transition hover:text-white">Transactions</a>
          <a href="#" className="transition hover:text-white">Support</a>
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-3 py-1.5 transition hover:border-slate-500 hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-3 py-1.5 transition hover:border-slate-500 hover:text-white"
          >
            X
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-3 py-1.5 transition hover:border-slate-500 hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
