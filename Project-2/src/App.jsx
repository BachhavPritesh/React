import { useEffect, useState } from "react";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch API (runs once)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter & Sort
  useEffect(() => {
    let updatedProducts = [...products];

    if (category !== "All") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (sortOption === "lowToHigh") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [category, sortOption, products]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Listing</h1>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
      </select>

      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort By Price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductPage;
