import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";
import navbarReducer from "./navbar";

const store = configureStore({
  reducer: {
    user: userReducer,
    navbar: navbarReducer,
  },
});

export { login, logout } from "./user";
export { hideAuth, showAuth } from "./navbar";

export default store;
