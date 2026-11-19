function ProductItem({ product }) {
    return (
        <div className="max-w-md mx-auto p-10 bg-white rounded-lg shadow-md">
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            <button>Add to Cart</button>

        </div>
    );
}

export default ProductItem;