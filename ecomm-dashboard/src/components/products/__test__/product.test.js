import { fireEvent, render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore } from "redux-persist";

import Products from "..";
import store from "../../../features";

const persistor = persistStore(store);

const MockProducts = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Products />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

describe("Products Index", () => {
  it("render products table", async () => {
    render(<MockProducts />);
    let rows = await screen.findAllByRole("row");
    expect(rows.length).toBe(1);
    let search = screen.getByPlaceholderText("search");
    fireEvent.change(search, {
      target: { value: "i-pad" },
    });
    expect(search.value).toBe("i-pad");
    expect(rows.length).toBe(1);
  });

  it("render create product form", () => {
    render(<MockProducts />);
    let create = screen.getByText("Add Product");
    fireEvent.click(create);
    let createProduct = screen.getByTestId("createProduct");
    expect(createProduct).toBeInTheDocument();
  });
});
