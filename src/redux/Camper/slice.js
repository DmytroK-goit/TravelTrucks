import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCampersId } from "./operations";

const initialState = {
  items: [],
  itemId: null,
  total: 0,
};

const slice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.fulfilled, (state, action) => {
        state.items = action.payload.items || [];
        state.total = action.payload.total || 0;
      })
      .addCase(getCampersId.fulfilled, (state, action) => {
        state.itemId = action.payload || null;
      });
  },
});

export const campersReducer = slice.reducer;
