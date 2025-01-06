import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  lang: "en" | "ar";
}

const initialState: LanguageState = {
  lang: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
