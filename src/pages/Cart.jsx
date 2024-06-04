import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styled from "styled-components";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    scale: 1.01;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
    justify-content: center;
    align-items: center;
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const ProductTitle = styled.h2`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.p`
  font-weight: bold;
`;

const ProductQuantity = styled.input`
  width: 80px;
`;

const Total = styled.p`
  align-self: flex-end;
  font-weight: bold;
  font-size: 1.25rem;
`;

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotal } =
    useContext(CartContext);

  function handleQuantityChange(product, event) {
    updateQuantity(product, Number(event.target.value));
  }

  return (
    <CartContainer>
      {cart.map((product, index) => (
        <ProductContainer key={index}>
          <ProductImage src={product.image} alt={product.title} />
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{parseFloat(product.price).toFixed(2)} €</ProductPrice>
          <ProductQuantity
            type="number"
            min="1"
            value={product.quantity}
            onChange={(event) => handleQuantityChange(product, event)}
          />
          <button onClick={() => removeFromCart(product)}>Remove</button>
        </ProductContainer>
      ))}
      <Total>Total: {getTotal()} €</Total>
      <button onClick={clearCart}>Clear cart</button>
    </CartContainer>
  );
}

export default Cart;
