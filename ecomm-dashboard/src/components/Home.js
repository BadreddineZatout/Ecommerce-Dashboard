import React, { useEffect, useState } from "react";
import axios from "axios";

import { backend_url } from "../Consts";
import ProductList from "./utilities/ProductList";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(backend_url + "products")
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <div className="mx-40 mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl">All products</h1>
        <input
          type="text"
          placeholder="search"
          className="mr-2 rounded-md px-2 py-1 ring-2 ring-Blue"
        />
      </div>
      <ProductList products={products} />
      <div className="mt-12 flex justify-center">
        <div
          id="load-more"
          offset="3"
          className=" btn transform bg-Orange text-Black transition duration-300 ease-out hover:scale-125 hover:bg-opacity-50 hover:shadow-inner"
        >
          Load more
        </div>
      </div>
    </div>
  );
}

export default Home;
