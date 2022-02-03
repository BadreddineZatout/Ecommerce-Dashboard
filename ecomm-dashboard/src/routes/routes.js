import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Products from "../components/products/index";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default routes;
