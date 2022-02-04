import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navigation: [
    { name: "Home", href: "/", current: true },
    { name: "Products", href: "/products", current: false },
    { name: "Login", href: "/login", current: false },
    { name: "Register", href: "/register", current: false },
  ],
};

const navbarSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    hideAuth: (state) => {
      state.navigation.splice(2, 2);
    },
    showAuth: (state) => {
      state.navigation = initialState.navigation;
    },
    hideProducts: (state) => {
      if(state.navigation.find((item) => item.name === "Products")) state.navigation.splice(1, 1);
    },
    showProducts: (state) => {
      state.navigation = initialState.navigation;
    },
    setCurrent: (state, action) => {
      state.navigation.map((item) => {
        if (item.href === action.payload) item.current = true;
        else {
          if (item.current) {
            item.current = false;
          }
        }
      });
    },
  },
});

export const { hideAuth, showAuth, hideProducts, showProducts, setCurrent } =
  navbarSlice.actions;

export default navbarSlice.reducer;
