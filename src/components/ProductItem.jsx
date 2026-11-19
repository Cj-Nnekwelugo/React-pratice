function ProductItem({ product }) {
    return (
        <div className="max-w-md mx-auto p-10 bg-white rounded-lg shadow-md gap-9">
            <h2 className="text-blue-500">{product.name}</h2>
            <p className="text-red-300">${product.price.toFixed(2)}</p>
            <p className="text-gray-400">{product.description}</p>
            <button>Add to Cart</button>

        </div>
    );
}

export default ProductItem;