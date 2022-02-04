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
    hideAuth: (state, action) => {
      console.log(action);
      state.navigation.splice(2, 2);
    },
    showAuth: (state, action) => {
      console.log(action);
      state.value = initialState;
    },
  },
});

export const { hideAuth, showAuth } = navbarSlice.actions;

export default navbarSlice.reducer;
