import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
   name: 'about',
   initialState: {
      active: null
   },
   reducers: {
      aboutActive: (state, action) => {
         state.active = action.payload
      },
      clearAboutActive: (state) => {
         state.active = null
      }
   }
});

export const { aboutActive, clearAboutActive } = aboutSlice.actions;
export default aboutSlice.reducer;