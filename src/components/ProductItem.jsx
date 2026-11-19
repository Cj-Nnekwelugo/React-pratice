function ProductItem({ productName, price, description }) {
    return (
        <div className="max-w-md mx-auto p-10 bg-white rounded-lg shadow-md gap-9">
            <h2 className="text-blue-500">{productName}</h2>
            <p className="text-red-300">${price.toFixed(2)}</p>
            <p className="text-gray-400">{description}</p>
            <button>Add to cart</button>
        </div>
    );
}

export default ProductItem;