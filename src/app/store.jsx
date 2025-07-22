import { configureStore } from "@reduxjs/toolkit";
import { tokenReducer } from "./token.slice";

export const store = configureStore({
  reducer: {
    tokenReducer,
  },
});
