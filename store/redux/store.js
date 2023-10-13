import { configureStore } from "@reduxjs/toolkit";

import favoriteReducers from "./favorites";

export const store = configureStore({
  reducer: {
    favorieMeals: favoriteReducers,
  },
});
