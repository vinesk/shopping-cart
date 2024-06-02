/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function removeFromCart(product) {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  }

  function updateQuantity(product, quantity) {
    const newCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity } : item
    );
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  function getTotal() {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
