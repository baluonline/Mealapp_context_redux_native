import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavories: (state, payload) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorites = favoriteSlice.actions.addFavorites;
export const removeFavories = favoriteSlice.actions.removeFavories;
export default favoriteSlice.reducer;
