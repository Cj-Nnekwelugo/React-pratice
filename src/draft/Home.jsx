function Home() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-medium tracking-wide text-slate-200 ring-1 ring-white/15">
              Smart spending starts here
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Manage your lifestyle with clarity.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Track your daily transactions, stay in control of your money, and make smarter decisions with a clean, modern dashboard built for everyday life.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-400">
                Get Started
              </button>
              <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                View Reports
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
            <div className="rounded-2xl bg-slate-900/70 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Available balance</p>
                  <h2 className="mt-2 text-3xl font-bold text-white">₦382,500</h2>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-300">
                  +12.4%
                </span>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-slate-800 p-3">
                  <div>
                    <p className="text-sm text-slate-400">Salary Payment</p>
                    <p className="text-xs text-slate-500">Today</p>
                  </div>
                  <span className="font-semibold text-emerald-400">+₦250,000</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-800 p-3">
                  <div>
                    <p className="text-sm text-slate-400">Shoprite Groceries</p>
                    <p className="text-xs text-slate-500">Yesterday</p>
                  </div>
                  <span className="font-semibold text-rose-400">-₦18,500</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-800 p-3">
                  <div>
                    <p className="text-sm text-slate-400">Freelance Income</p>
                    <p className="text-xs text-slate-500">Last week</p>
                  </div>
                  <span className="font-semibold text-emerald-400">+₦120,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;