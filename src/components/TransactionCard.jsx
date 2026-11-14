function TransactionCard({ transaction }) {
  if (!transaction) {
    return null;
  }

  const amountFormatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  });

  const isCredit = transaction.type === "credit";
  const formattedAmount = amountFormatter.format(transaction.amount);

  return (
    <article className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-slate-600">
          {transaction.category}
        </span>
        <span className={`text-sm font-semibold ${isCredit ? "text-emerald-600" : "text-rose-600"}`}>
          {isCredit ? "Credit" : "Debit"}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-slate-800">{transaction.description}</h3>
      <p className="mt-2 text-sm text-slate-500">Transaction ID: {transaction.id}</p>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-slate-500">Date</span>
        <span className="font-medium text-slate-700">{transaction.date}</span>
      </div>

      <p className={`mt-4 text-2xl font-bold ${isCredit ? "text-emerald-600" : "text-rose-600"}`}>
        {isCredit ? "+" : "-"}
        {formattedAmount}
      </p>
    </article>
  );
}

export default TransactionCard;