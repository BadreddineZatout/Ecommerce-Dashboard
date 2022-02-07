import React, { useEffect, useState } from "react";
import axios from "axios";

import protectRoute from "../../helpers/protectRoute";
import { backend_url } from "../../Consts";
import Table from "../utilities/Table";
import Delete from "./delete";

function Index() {
  const [products, setProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const search = (title) => {
    setSearchTitle(title);
  };

  useEffect(() => {
    axios.get(backend_url + "products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <Table
        products={products.filter((product) => {
          return product.name
            .toLowerCase()
            .includes(searchTitle.toLocaleLowerCase());
        })}
        search={search}
        setOpen={setOpen}
        setDeleteProduct={setDeleteProduct}
      />
      <Delete open={open} setOpen={setOpen} deleteProduct={deleteProduct} />
    </div>
  );
}

export default protectRoute(Index);
