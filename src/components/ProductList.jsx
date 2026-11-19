



import ProductItem from "./ProductItem";

function ProductList() {
    return (
         <div>
          <ProductItem
            productName="Product 1"
            price={299.99}
            description="High-performance laptop with powerful features"
             
          />
          <ProductItem
            productName="Product 2"
            price={499.99}
            description="Sleek and stylish smartphone with advanced features"
             
          />
          <ProductItem
            productName="Product 3"
            price={199.99}
            description="Wireless headphones with immersive sound quality"
             
          />
        </div>

    )
}

export default ProductList;