import './ProductListView.css'

const ProductListView = (props) =>{
    console.log(props)
    const productLists = props.products.map((product, index) =>
        <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.inStock ? 'Yes' : 'No'}</td>
            <td>{product.rating}</td>
        </tr>
    )

    return (
        <>
            <h2>List of Products</h2>
            <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>InStock</th>
                  <th>Rating</th>
               </tr>
            </thead>
            <tbody>
               {productLists}
            </tbody>
         </table>
        </>
    );

}

export default ProductListView;