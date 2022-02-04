import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  user: {
    id: null,
    name: "",
    email: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isLogged = false;
      state.user = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
