import "./App.css";
import Header from "./components/layout/Header";
import { BrowserRouter } from "react-router-dom";
import Web from "./routes/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Web />
      </BrowserRouter>
    </div>
  );
}

export default App;
