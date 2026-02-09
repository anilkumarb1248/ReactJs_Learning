// import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Header from "./Header.jsx";
import Shop from "./Shop.jsx";
// import CartContext from "../../store/shopping-cart-context.jsx";
// import Product from "./Product.jsx";
import CartContextProvider from "../../store/shopping-cart-context.jsx";

function UdemyDemos() {
  return (
    // <CartContext> // We can also configure context without provider from React 19 version
    // <CartContext.Provider value={contextValue}>
    <CartContextProvider>
      {/* <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      /> */}
      <Header />
      {/* <Shop onAddItemToCart={handleAddItemToCart} /> */}
      <Shop />
      {/* Component Composistion - one of the way to get rid of the  props drilling*/}
      {/* <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop> */}
    </CartContextProvider>
  );
}

export default UdemyDemos;
