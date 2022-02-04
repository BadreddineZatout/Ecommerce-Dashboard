import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { login, logout } from "./user";

export default store;
