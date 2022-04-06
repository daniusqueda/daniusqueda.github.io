import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
   name: 'portfolio',
   initialState: {
      active: null
   },
   reducers: {
      portfolioActive: (state, action) => {
         state.active = action.payload
      },
      clearPortfolioActive: (state) => {
         state.active = null
      }
   }
});

export const { portfolioActive, clearPortfolioActive } = portfolioSlice.actions;
export default portfolioSlice.reducer;