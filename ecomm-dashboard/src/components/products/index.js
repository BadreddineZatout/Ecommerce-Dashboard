import React, { useEffect, useState } from "react";
import axios from "axios";

import protectRoute from "../../helpers/protectRoute";
import { backend_url } from "../../Consts";
import Table from "../utilities/Table";

function Index() {
  const [products, setProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const search = (title) => {
    setSearchTitle(title);
  };

  useEffect(() => {
    axios.get(backend_url + "products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Table
      products={products.filter((product) => {
        return product.name.toLowerCase().includes(searchTitle.toLocaleLowerCase());
      })}
      search={search}
    />
  );
}

export default protectRoute(Index);
