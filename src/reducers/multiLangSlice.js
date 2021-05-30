import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { VI_LANG } from '../utils/constant';
import moment from 'moment';
import i18n from 'i18next';
import Cookies from 'js-cookie';
export const updateLanguage = createAsyncThunk(
  'multiLang/updateLang',
  async lang => {
    Cookies.set('language', lang, { expires: 365 });
    moment.locale(lang);
    i18n.changeLanguage(lang);
    return lang;
  }
);

export const multiLangSlice = createSlice({
  name: 'multiLang',
  initialState: {
    lang: Cookies.get('language') ? Cookies.get('language') : VI_LANG
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
