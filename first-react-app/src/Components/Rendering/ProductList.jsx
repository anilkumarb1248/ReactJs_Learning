

import React from 'react'
import ProductView from './ProductView';

function ProductList() {
    const productList = [
        { "id": 1, "name": "Bluetooth", "price": 1999, "brand": "Sony" },
        { "id": 2, "name": "Smart TV", "price": 49999, "brand": "Samsung" },
        { "id": 3, "name": "Shoes", "price": 2999, "brand": "Nike" },
        { "id": 4, "name": "Backpack", "price": 1299, "brand": "Wildcraft" },
        { "id": 5, "name": "Mobile", "price": 150000, "brand": "Apple" }
    ]
    return (
        <div>
            {
            productList.map(product => <ProductView key={product.id} product={product}></ProductView>)
            }
        </div>
    )
}
export default ProductList;
