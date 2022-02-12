import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore } from "redux-persist";

import store from "../../features";
import Home from "../Home";

const persistor = persistStore(store);

const MockHome = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

it("renders Home page before getting products", async () => {
  render(<MockHome />);
  let checkProducts = await screen.findByText("Check our products");
  expect(checkProducts).toBeInTheDocument();
  let noProducts = await screen.findByText("Sorry :'( No products yet");
  expect(noProducts).toBeInTheDocument();
  let productsList = await screen.findByTestId("productsList");
  expect(productsList).toContainHTML("div");
  let endOfProducts = await screen.findByText("Yay! You have seen it all");
  expect(endOfProducts).toBeInTheDocument();
});
