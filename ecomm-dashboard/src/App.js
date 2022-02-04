import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import Header from "./components/layout/Header";
import Web from "./routes/routes";
import store from "./features";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Web />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
