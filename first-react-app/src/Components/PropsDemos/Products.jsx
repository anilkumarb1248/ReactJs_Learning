import ProductListView from "./ProductListView";


const Products = () => {
    const products = [
        {
            "id": 1,
            "name": "Wireless Bluetooth Headphones",
            "category": "Electronics",
            "price": 2499,
            "inStock": true,
            "rating": 4.4
        },
        {
            "id": 2,
            "name": "Smart LED TV 43 Inch",
            "category": "Electronics",
            "price": 27999,
            "inStock": false,
            "rating": 4.7
        },
        {
            "id": 3,
            "name": "Running Shoes",
            "category": "Footwear",
            "price": 1999,
            "inStock": true,
            "rating": 4.2
        },
        {
            "id": 4,
            "name": "Men's Cotton T-Shirt",
            "category": "Fashion",
            "price": 499,
            "inStock": true,
            "rating": 4.0
        },
        {
            "id": 5,
            "name": "Gaming Mouse RGB",
            "category": "Accessories",
            "price": 1299,
            "inStock": true,
            "rating": 4.5
        }
    ];

    return (
        <ProductListView products={products} />
    );
}

export default Products;