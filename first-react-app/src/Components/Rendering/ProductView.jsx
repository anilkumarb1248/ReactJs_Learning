
import React from 'react'

function ProductView({product}) {
  return (
    <div>
      <h3>{product.id} - Product: {product.name}, Price: {product.price}, Brand: {product.brand} </h3>
    </div>
  )
}

export default ProductView;
