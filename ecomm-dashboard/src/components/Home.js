import React, { useEffect, useState } from "react";
import axios from "axios";

import { backend_url } from "../Consts";
import ProductList from "./utilities/ProductList";

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(4);
  const [searchTitle, setSearchTitle] = useState("");

  const search = (title) => {
    setSearchTitle(title);
  };

  const goToTarget = (e) => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    axios
      .get(backend_url + "products")
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <div>
      <div>
        <div className="absolute mt-32 ml-5">
          <h1 className="mb-10 text-7xl text-white">Welcome To Badi Shop</h1>
          <button className="banner-btn absolute ml-5 bg-Orange bg-opacity-90 text-Black hover:bg-opacity-100">
            <a
              href="#products"
              className="text-lg"
              onClick={(e) => goToTarget(e)}
            >
              Check our products
            </a>
          </button>
        </div>
        <img src="images/banner.jpg" alt="banner" />
      </div>
      <div id="products" className="mx-40 mt-10 mb-5">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl">All products</h1>
          <input
            type="text"
            placeholder="search"
            className="mr-2 rounded-md px-2 py-1 ring-2 ring-Blue"
            onChange={(e) => search(e.target.value)}
          />
        </div>
        {products && (
          <ProductList
            products={products
              .filter((product) => {
                return product.name
                  .toLowerCase()
                  .includes(searchTitle.toLocaleLowerCase());
              })
              .slice(0, page)}
            setPage={setPage}
            length={products.length}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
