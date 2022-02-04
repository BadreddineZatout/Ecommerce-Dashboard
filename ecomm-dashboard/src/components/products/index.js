import React from "react";
import protectRoute from "../../helpers/protectRoute";

function index() {
  return (<div>Products</div>);
}

export default protectRoute(index);
