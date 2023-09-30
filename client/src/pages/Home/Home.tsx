import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Page, ProductPreviewCard } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import "./Home.style.scss";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      const json = await ServiceAPI.fetchProducts();
      setProducts(json.data.products);
    };

    fetchData();
  }, []);

  return (
    <Page>
      <div className="home-page">
        <button className = "LightMode">Light Mode</button>
        <button className = "DarkMode">Dark Mode</button>
        <script>
        function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
       </script>
        <h1 className="home-page__title">Home</h1>
        <h2>Products:</h2>
        <p className="home-page__title"> Hello World </p>
        <input type="text" id="search" name="search" onChange={handleChange} />
        <h2 className="home-page__products">Search Content: {search}</h2>
        <div className="home-page__products">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={`${product.id}`}>
              <ProductPreviewCard
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                key={`${product.id}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </Page>
  );
}

export default Home;
