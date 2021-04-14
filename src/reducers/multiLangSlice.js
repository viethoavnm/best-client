import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { VI_LANG } from '../utils/constant';

export const multiLangSlice = createSlice({
  name: 'multiLang',
  initialState: {
    lang: VI_LANG
  },
  reducers: {
    updateLang: (state, action) => {
      state.lang = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { updateLang } = multiLangSlice.actions;

export default multiLangSlice.reducer;
