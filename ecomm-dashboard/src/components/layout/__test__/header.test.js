import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { BrowserRouter } from "react-router-dom";

import Header from "../Header";
import store, { hideAuth, login, showProducts } from "../../../features";

const persistor = persistStore(store);

const MockHeader = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

it("renders header when user is not logged", () => {
  render(<MockHeader />);
  const home = screen.getByText("Home");
  const login = screen.getByText("Login");
  const logout = screen.getByText("Register");
  expect(home).toBeInTheDocument();
  expect(login).toBeInTheDocument();
  expect(logout).toBeInTheDocument();
});

it("renders header when user is logged", () => {
  store.dispatch(
    login({
      user: {
        id: "1",
        name: "badreddine zatout",
        email: "hb_zatout@esi.dz",
      },
    })
  );
  store.dispatch(hideAuth());
  store.dispatch(showProducts());

  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
  const home = screen.getByText("Home");
  const products = screen.getByText("Products");
  const userLink = screen.getByText(store.getState().user.user.name);
  expect(home).toBeInTheDocument();
  expect(products).toBeInTheDocument();
  expect(userLink).toBeInTheDocument();
});
