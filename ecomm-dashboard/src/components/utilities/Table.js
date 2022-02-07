export default function Table({ products }) {
  return (
    <div className="flex flex-col mt-36">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:mx-32">
        <div className="py-2 align-middle inline-block min-w-full  sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="p-4 text-3xl font-semibold text-Black mb-2">
              Products
            </h1>
            <div>
            <input type="text" placeholder="search"  className="mr-2 px-2 py-1 rounded-md ring-2 ring-Blue"/>
              <a
                href="#"
                className="border border-2 border-Blue rounded-md py-1 px-3 font-semibold text-Blue hover:bg-Blue hover:text-white hover:font-bold"
              >
                Add Product
              </a>
            </div>
          </div>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-Blue">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-Black uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-Black uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-Black uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-Black uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {product.id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-Black">{product.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-Black">
                        {product.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-Black">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-Orange font-bold">
                        Edit
                      </a>
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
