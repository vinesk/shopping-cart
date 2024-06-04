import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-primary);
  color: var(--white);
  padding: var(--spacing-lg) var(--spacing-xl);
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLinks = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  font-weight: bold;
  font-size: 1.25rem;
`;

function Header() {
  const { getQuantity } = useContext(CartContext);

  return (
    <StyledHeader>
      <StyledNav>
        <h1>
          <Link to="/">Shopping Cart</Link>
        </h1>
        <StyledLinks>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({getQuantity()})</Link>
          <Link to="/checkout">Checkout</Link>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
