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

const persistUserConfig = {
  key: "user",
  version: 1,
  storage,
};
const persistNavbarConfig = {
  key: "navbar",
  version: 1,
  storage,
};
storage.removeItem("persist:user");
storage.removeItem("persist:navbar");
const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
const persistedNavbarReducer = persistReducer(
  persistNavbarConfig,
  navbarReducer
);

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

export * from "./user";
export * from "./navbar";

export default store;
