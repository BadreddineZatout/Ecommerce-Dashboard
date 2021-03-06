import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { backend_public_url } from "../../Consts";

function ProductList({ products, setPage, length, setOpenShow, setProduct }) {
  return (
    <>
      <InfiniteScroll
        dataLength={products.length}
        next={() => setPage((prevPage) => prevPage + 4)}
        hasMore={products.length < length}
        className="mt-8 grid gap-10 p-10 lg:grid-cols-4"
      >
        {products.map((product) => (
          <div
            data-testid="productsList"
            className="card cursor-pointer"
            key={product.id}
            onClick={() => {
              setProduct(product);
              setOpenShow(false);
            }}
          >
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
      </InfiniteScroll>
      {length === 0 && (
        <div className="mt-10 flex w-full justify-center">
          <p className="text-2xl text-Black">
            <b>Sorry :'( No products yet</b>
          </p>
        </div>
      )}
      {products.length === length && length !== 0 && (
        <div className="mt-10 flex w-full justify-center">
          <p className="text-2xl text-Black">
            <b>Yay! You have seen it all</b>
          </p>
        </div>
      )}
    </>
  );
}

export default ProductList;
