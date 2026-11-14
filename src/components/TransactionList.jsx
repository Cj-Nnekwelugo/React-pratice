import transactions from "../data/transaction";
import TransactionCard from "./TransactionCard";

function TransactionList() {
  return (
    <div className="flex w-full flex-col items-center border p-6">
      <h2 className="text-5xl font-bold">Our Transactions</h2>
      <div className="mt-6 flex w-full flex-wrap justify-center gap-4">
        {transactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}

export default TransactionList;