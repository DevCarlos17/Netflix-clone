import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearUserData: (state, action) => {
      state.userData = null
    }
  }
})

export const { setUserData, clearUserData } = userSlice.actions;
export const selectUserData = (state) => state.user.userData;
export default userSlice.reducer;