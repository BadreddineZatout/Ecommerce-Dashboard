import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { backend_public_url } from "../../Consts";

export default function Show({ open, setOpen, product }) {
  console.log(product);
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
                  {product.name}
                </Dialog.Title>
                <div className="my-5 mx-auto w-full scroll-auto">
                  <div key={product.id}>
                    <img
                      className="w-full sm:h-1/6"
                      src={
                        backend_public_url +
                        `${product.media[0].id}/${product.media[0].file_name}`
                      }
                      alt={product.media[0].file_name}
                    />
                    <div className="m-4">
                      <span className="font-bold">{product.description}</span>
                      <span className="block font-semibold">
                        {product.price} DA
                      </span>
                      <span className="block text-sm text-gray-500">
                        Added by {product.user.name}
                      </span>
                      <span className="block text-sm text-gray-500">
                        Order by calling {product.user.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
