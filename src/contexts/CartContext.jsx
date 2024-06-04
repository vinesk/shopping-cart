/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const localCart = window.localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

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

  function getQuantity() {
    return cart.reduce((total, product) => total + product.quantity, 0);
  }

  function clearCart() {
    setCart([]);
  }

  function getTotal() {
    return cart.reduce(
      (total, product) =>
        parseFloat(total + product.price * product.quantity).toFixed(2),
      0
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getQuantity,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
