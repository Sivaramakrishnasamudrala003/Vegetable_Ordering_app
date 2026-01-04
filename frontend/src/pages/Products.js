import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
  <section>
    <h2>Products</h2>
    {products.map(p => (
      <div className="product" key={p.id}>
        <span>{p.name}</span>
        <span>₹{p.price}/kg</span>
      </div>
    ))}
  </section>
);

}

export default Products;
