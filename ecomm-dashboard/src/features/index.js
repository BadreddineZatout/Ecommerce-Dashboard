import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user";
import navbarReducer from "./navbar";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedNavbarReducer = persistReducer(persistConfig, navbarReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    navbar: persistedNavbarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export { login, logout } from "./user";
export { hideAuth, showAuth } from "./navbar";

export default store;
