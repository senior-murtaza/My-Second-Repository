export default function Products() {
  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 200 },
    { id: 3, name: "Air pods", price: 50 },
    { id: 4, name: "Hands Fre", price: 20 },
    { id: 5, name: "Camera", price: 700 },
    { id: 6, name: "Paly Station", price: 600 },
    { id: 7, name: "X Box", price: 800 },
  ];

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


