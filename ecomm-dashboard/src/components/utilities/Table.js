export default function Table({ products, search, setOpen, setProductId }) {
  return (
    <div className="mt-10 flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:mx-32">
        <div className="inline-block min-w-full py-2 align-middle  sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="mb-2 p-4 text-3xl font-semibold text-Black">
              Products
            </h1>
            <div>
              <input
                type="text"
                placeholder="search"
                className="mr-2 rounded-md px-2 py-1 ring-2 ring-Blue"
                onChange={(e) => search(e.target.value)}
              />
              <a
                href="#"
                className="rounded-md border-2 border-Blue py-1 px-3 font-semibold text-Blue hover:bg-Blue hover:font-bold hover:text-white"
              >
                Add Product
              </a>
            </div>
          </div>
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-Blue">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-Black"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-Black"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-Black"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-Black"
                  >
                    Price
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.id}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-Black">{product.name}</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-Black">
                        {product.description}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-Black">
                      {product.price}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium ">
                      <button className="mr-3 font-bold text-Orange">
                        Edit
                      </button>
                      <button
                        className="font-bold text-Orange"
                        onClick={() => {
                          setOpen(true);
                          setProductId(product.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
