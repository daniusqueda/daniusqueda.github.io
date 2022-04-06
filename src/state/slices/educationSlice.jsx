import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
   name: 'education',
   initialState: {
      active: null
   },
   reducers: {
      educationActive: (state, action) => {
         state.active = action.payload
      },
      clearEducationActive: (state) => {
         state.active = null
      }
   }
});

export const { educationActive, clearEducationActive} = educationSlice.actions;
export default educationSlice.reducer;