import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import "./App.css";
import Header from "./components/layout/Header";
import Web from "./routes/routes";
import store from "./features";

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Web />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
