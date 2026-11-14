function ProductItem({ productName, description, price, badge }) {
  return (
    <article className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-slate-600">
          {badge || "Featured"}
        </span>
        <span className="text-sm font-semibold text-emerald-600">In stock</span>
      </div>

      <h3 className="text-xl font-semibold text-slate-800">{productName}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>

      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
        <span className="text-2xl font-bold text-slate-800">{price}</span>
        <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default ProductItem;