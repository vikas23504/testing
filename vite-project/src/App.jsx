import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: "₹2,999",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Headphones",
      price: "₹1,499",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Shoes",
      price: "₹2,199",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Mobile Phone",
      price: "₹14,999",
      image: "https://via.placeholder.com/200"
    }
  ];


  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="logo">ShopEasy</div>

        <nav>
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">Offers</a>
          <a href="/">Contact</a>
        </nav>

        <button className="cart-btn">Cart</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Big Sale is Live</h1>
          <p>Up to 50% Off on Fashion & Electronics</p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* Products */}
      <section className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 ShopEasy. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;