import React from "react";
import { backend_public_url } from "../../Consts";

function ProductList({ products }) {
  return (
    <div id="cards" className="mt-8 grid gap-10 pt-10 lg:grid-cols-4">
      {products.map((product) => (
        <div className="card cursor-pointer" key={product.id}>
          <img
            className="h-32 w-full object-cover sm:h-48"
            src={
              backend_public_url +
              `${product.media[0].id}/${product.media[0].file_name}`
            }
            alt={product.media[0].file_name}
          />
          <div className="m-4">
            <span className="font-bold">{product.name}</span>
            <span className="block text-sm text-gray-500">
              Added by {product.user.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
