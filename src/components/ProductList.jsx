import ProductItem from "./ProductItem";

const products = [
  {
    productName: "Laptop",
    description: "High-performance laptop for work and play.",
    price: "$1200",
    badge: "Best seller",
  },
  {
    productName: "Smartphone",
    description: "Latest model smartphone with excellent camera.",
    price: "$800",
    badge: "New",
  },
  {
    productName: "Tablet",
    description: "Portable tablet for entertainment and productivity.",
    price: "$500",
    badge: "Popular",
  },
];

function ProductList() {
  return (
    <section className="w-full bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Shop</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-800">Our Products</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <ProductItem
              key={product.productName}
              productName={product.productName}
              description={product.description}
              price={product.price}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;