import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotal } =
    useContext(CartContext);

  function handleQuantityChange(product, event) {
    updateQuantity(product, Number(event.target.value));
  }

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product, index) => (
        <div key={index}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.image} alt={product.title} />
          <input
            type="number"
            min="1"
            value={product.quantity}
            onChange={(event) => handleQuantityChange(product, event)}
          />
          <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
      ))}
      <p>Total: {getTotal()}</p>
      <button onClick={clearCart}>Clear cart</button>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;
