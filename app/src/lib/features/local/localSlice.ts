import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ThemeState } from "@/types/local.type";

const initialState: ThemeState = {
  darkMode: false,
};


export const localSlice = createSlice({
  name: "local",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
      if (state.darkMode === true) {
        localStorage.setItem("darkmode", "true");
      } else {
        localStorage.removeItem("darkmode");
      }
    },
  },
});

export const { changeTheme } = localSlice.actions;

export default localSlice.reducer;
