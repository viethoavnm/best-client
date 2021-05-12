import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';
import { convertTranslations, getSafeValue } from 'utils';
import { getHomeData, getSetupByKey } from '../services/setup';
import { MENU_WEB_CONFIG, TYPE_MENU, TYPE_MENU_LINK } from '../utils/constant';

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
        let menu = action.payload?.filter(element => {
          if (
            !TYPE_MENU_LINK[element?.type] ||
            (element?.type === TYPE_MENU.CATEGORY &&
              isEmpty(element?.id_category)) ||
            (element?.type === TYPE_MENU.POST && isEmpty(element?.id_post))
          ) {
            return false;
          } else {
            return true;
          }
        });
        state.menuData = menu.map(menu => convertTranslations({ ...menu }));
      }
    },
    [fetchHomeData.fulfilled]: (state, action) => {
      state.homeData = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment } = setupSlice.actions;

export default setupSlice.reducer;
