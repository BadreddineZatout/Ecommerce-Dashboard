import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { backend_public_url, backend_url } from "../../Consts";

export default function Edit({ open, setOpen, product }) {
  const user_id = useSelector((state) => state.user.user.id);
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-semibold leading-6 text-Black"
                >
                  Add Product
                </Dialog.Title>
                <div className="my-5 mx-auto w-full">
                  <form
                    action={backend_url + `products/${product.id}`}
                    method="POST"
                    encType="multipart/form-data"
                  >
                    <div className="overflow-hidden sm:rounded-md">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Product Name"
                              defaultValue={product.name}
                              className="mt-1  block w-full rounded-md border border-Blue p-2 shadow-sm sm:text-sm"
                            />
                          </div>

                          <div className="col-span-6">
                            <input
                              type="text"
                              name="description"
                              id="description"
                              placeholder="Product Description"
                              defaultValue={product.description}
                              className="mt-1  block w-full rounded-md border border-Blue p-2 shadow-sm sm:text-sm"
                            />
                          </div>

                          <div className="col-span-6">
                            <input
                              type="number"
                              name="price"
                              id="price"
                              placeholder="Product Price - DA"
                              defaultValue={product.price}
                              className="mt-1 block w-full rounded-md border border-Blue p-2 shadow-sm sm:text-sm"
                            />
                          </div>
                          <div className="hidden">
                            <input
                              type="hidden"
                              name="user_id"
                              defaultValue={user_id}
                            />
                          </div>
                          <div className="col-span-6">
                            <img
                              src={
                                backend_public_url +
                                `${product.media[0].id}/${product.media[0].file_name}`
                              }
                              alt={product.media[0].file_name}
                              className="h-52 w-full"
                            />
                          </div>
                          <div className="col-span-6">
                            <input
                              type="file"
                              name="image"
                              id="image"
                              className="mt-1 block w-full rounded-md border border-Blue p-2 shadow-sm sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-Blue px-4 py-2 text-sm font-medium text-Black hover:text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
