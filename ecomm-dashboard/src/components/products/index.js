import React, { useEffect, useState } from "react";
import axios from "axios";

import protectRoute from "../../helpers/protectRoute";
import { backend_url } from "../../Consts";
import Table from "../utilities/Table";
import Delete from "./delete";
import Create from "./create";
import Edit from "./edit";

function Index() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [product, setProduct] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const search = (title) => {
    setSearchTitle(title);
  };

  const getProducts = () => {
    axios.get(backend_url + "products").then((response) => {
      setProducts(response.data);
    });
  };

  const getProduct = (id) => {
    setProduct(products.filter((item) => item.id === id)[0]);
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
        setOpenEdit={setOpenEdit}
        setOpenDelete={setOpenDelete}
        setProductId={setProductId}
        getProduct={getProduct}
      />
      <Create open={openCreate} setOpen={setOpenCreate} />
      {openEdit && (
        <Edit open={openEdit} setOpen={setOpenEdit} product={product} />
      )}
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
