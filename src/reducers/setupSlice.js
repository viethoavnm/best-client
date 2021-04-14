import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSetupByKey, getHomeData } from '../services/setup';
import { MENU_WEB_CONFIG, HOME_WEB_CONFIG } from '../utils/constant';
import Lodash from 'lodash';
import { getSafeValue } from 'utils';

export const fetchMenuWeb = createAsyncThunk('setup/fetchMenuWeb', async () => {
  const response = await getSetupByKey(MENU_WEB_CONFIG);
  const dataMenu = getSafeValue(response, 'data.data', []);
  return dataMenu;
});

export const fetchHomeData = createAsyncThunk(
  'setup/fetchHomeData',
  async () => {
    const response = await getHomeData();
    const data = getSafeValue(response, 'data', []);
    return data;
  }
);

export const setupSlice = createSlice({
  name: 'setup',
  initialState: {
    menu: [],
    homeData: []
  },
  reducers: {
    // updateMenu: (state, action) => {
    //   state.menu = action.payload.menu;
    // },
    // updateHomeData: (state, action) => {
    //   state.homeData = action.payload.homeData;
    // }
  },
  extraReducers: {
    [fetchMenuWeb.fulfilled]: (state, action) => {
      state.menu = action.payload;
    },
    [fetchHomeData.fulfilled]: (state, action) => {
      state.homeData = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment } = setupSlice.actions;

export default setupSlice.reducer;