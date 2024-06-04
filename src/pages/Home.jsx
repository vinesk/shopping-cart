import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { fetchProducts } from "../services/api";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-xl);
`;

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    scale: 1.01;
  }
`;

const StyledTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledImage = styled.img`
  height: 200px;
  object-fit: contain;
`;

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  function handleQuantityChange(product, event) {
    const value = parseInt(event.target.value, 10);
    const quantity = value > 10 ? 10 : value;

    const newProducts = products.map((item) =>
      item.id === product.id ? { ...item, quantity } : item
    );
    setProducts(newProducts);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyledContainer>
      {products.map((product) => (
        <StyledProduct key={product.id}>
          <StyledTitle>{product.title}</StyledTitle>
          <p>{parseFloat(product.price).toFixed(2)} €</p>
          <StyledImage src={product.image} alt={product.title} />
          <input
            type="number"
            min="1"
            max="10"
            value={product.quantity}
            onChange={(event) => handleQuantityChange(product, event)}
          />
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </StyledProduct>
      ))}
    </StyledContainer>
  );
}

export default Home;
