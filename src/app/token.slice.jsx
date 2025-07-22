import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",

  initialState: {
    token: null,
  },

  reducers: {
    setToken: (perviousState) => {
      perviousState.token = localStorage.getItem("token") || sessionStorage.getItem("token");
    },

    logOut: (perviousState) => {
      perviousState.token = null;
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
  },
});

export const tokenReducer = tokenSlice.reducer;
export const actions = tokenSlice.actions;
