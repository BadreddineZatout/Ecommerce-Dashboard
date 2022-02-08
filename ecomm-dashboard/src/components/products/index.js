import React, { useEffect, useState } from "react";
import axios from "axios";

import protectRoute from "../../helpers/protectRoute";
import { backend_url } from "../../Consts";
import Table from "../utilities/Table";
import Delete from "./delete";
import Create from "./create";

function Index() {
  const [products, setProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [openCreate, setOpenCreate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [productId, setProductId] = useState(null);

  const search = (title) => {
    setSearchTitle(title);
  };

  const getProducts = () => {
    axios.get(backend_url + "products").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getProducts();
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
        setOpenCreate={setOpenCreate}
        setOpenDelete={setOpenDelete}
        setProductId={setProductId}
      />
      <Create
        open={openCreate}
        setOpen={setOpenCreate}
        getProducts={getProducts}
      />
      <Delete
        open={openDelete}
        setOpen={setOpenDelete}
        productId={productId}
        getProducts={getProducts}
      />
    </div>
  );
}

export default protectRoute(Index);
