function ProductItem({ productName, price, description, }) {
    return (
        <div className="max-w-md mx-auto p-10 bg-white rounded-lg shadow-md gap-9">
            <h2 className="text-blue-500">{productName}</h2>
            <p className="text-red-300">${price.toFixed(2)}</p>
            <p className="text-gray-400">{description}</p>
            <button
                type="button"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-blue-500 p-2 text-white transition hover:bg-blue-600"
                aria-label={`Add ${productName} to cart`}
            >
                <ShoppingCartPlus size={16} />
            </button>
        </div>
    );
}

function ShoppingCartPlus({ size = 24 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h7.78a2 2 0 0 0 1.95-1.57L20 9H6.13" />
            <path d="M12 6v6" />
            <path d="M9 9h6" />
        </svg>
    );
}

export default ProductItem;