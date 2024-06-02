import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.map((product) => ({ ...product, quantity: 1 })));
        setLoading(false);
      });
  }, []);

  function handleQuantityChange(product, event) {
    const newProducts = products.map((item) =>
      item.id === product.id
        ? { ...item, quantity: Number(event.target.value) }
        : item
    );
    setProducts(newProducts);
  }

  function addToCart(product) {
    setCart([...cart, product]);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Home</h1>
      {products.map((product) => (
        <div key={product.id}>
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
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
