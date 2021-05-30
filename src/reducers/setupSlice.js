import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { convertTranslations, getSafeValue } from 'utils';
import { getHomeData, getSetupByKey } from '../services/setup';
import {
  MENU_WEB_CONFIG,
  TYPE_HOME_DATA
} from '../utils/constant';

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
    homeData: [],
    menuData: []
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
      if (Array.isArray(action.payload)) {
        let menu = action.payload;
        state.menuData = menu.map(menu => convertTranslations({ ...menu }));
      }
    },
    [fetchHomeData.fulfilled]: (state, action) => {
      let homeData = action.payload;
      if (Array.isArray(homeData)) {
        homeData.forEach(item => {
          switch (item?.type) {
            case TYPE_HOME_DATA.NEWS:
            case TYPE_HOME_DATA.CATEGORY:
            case TYPE_HOME_DATA.LIBRARY:
            case TYPE_HOME_DATA.EVENT:
              if (Array.isArray(item?.data)) {
                item.data.forEach(element => {
                  convertTranslations(element);
                });
              }
          }
        });
      }
      state.homeData = homeData;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment } = setupSlice.actions;

export default setupSlice.reducer;
