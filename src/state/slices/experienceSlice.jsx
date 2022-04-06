import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
   name: 'experience',
   initialState: {
      active: null
   },
   reducers: {
      experienceActive: (state, action) => {
         state.active = action.payload
      },
      clearExperienceActive: (state) => {
         state.active = null
      }
   }
});

export const { experienceActive, clearExperienceActive} = experienceSlice.actions;
export default experienceSlice.reducer;