import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  user: {
    name: "",
    email: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log(action);
      state.isLogged = true;
      state.user = action.payload;
    },
    logout: (state, action) => {
      console.log(action);
      state.value = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
