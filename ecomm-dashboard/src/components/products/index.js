import React, { useEffect, useState } from "react";
import axios from "axios";

import protectRoute from "../../helpers/protectRoute";
import { backend_url } from "../../Consts";
import Table from "../utilities/Table";

function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(backend_url + "products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);
  return <Table products={products} />;
}

export default protectRoute(Index);
