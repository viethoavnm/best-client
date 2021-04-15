import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { VI_LANG } from '../utils/constant';
import moment from 'moment';

export const updateLanguage = createAsyncThunk(
  'multiLang/updateLang',
  async lang => {
    console.log('came here');
    moment.locale(lang);
    return lang;
  }
);

export const multiLangSlice = createSlice({
  name: 'multiLang',
  initialState: {
    lang: VI_LANG
  },
  reducers: {
    updateLang: (state, action) => {
      state.lang = action.payload;
    }
  },
  extraReducers: {
    [updateLanguage.fulfilled]: (state, action) => {
      state.lang = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { updateLang } = multiLangSlice.actions;

export default multiLangSlice.reducer;
