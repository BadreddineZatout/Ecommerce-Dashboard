import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const protectRoute = (WrappedComponenet, type = "notAuth") => {
  const ProtectRoute = () => {
    let isLogged = useSelector((state) => state.user.isLogged);
    let navigate = useNavigate();
    useEffect(() => {
      if (type === "auth" && isLogged) return navigate("/");
      if (type === "notAuth" && !isLogged) {
        console.log("here");
        return navigate("/login");
      }
    }, []);

    return (<WrappedComponenet />);
  };
  return ProtectRoute;
};

export default protectRoute;
