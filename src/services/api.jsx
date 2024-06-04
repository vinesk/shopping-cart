export async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data.map((product) => ({ ...product, quantity: 1 }));
}
