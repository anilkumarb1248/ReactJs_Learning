// import { DUMMY_PRODUCTS } from "./dummy-products.js";
// import Product from "./Product.jsx";

import { DUMMY_PRODUCTS } from "./dummy-products";
import Product from "./Product";

// export default function Shop({ onAddItemToCart }) {
// export default function Shop({ children }) {
export default function Shop() {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      {/* Moving this part to parent - to use Component Composition. and passing as children prop */}
      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
      {/* <ul>{children}</ul> */}
    </section>
  );
}
