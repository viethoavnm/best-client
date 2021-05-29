export const DATE_FORMAT = 'DD/MM/YYYY';
export const VI_LANG = 'vi';
export const EN_LANG = 'en';
export const MENU_WEB_CONFIG = 'MENU_WEB_CONFIG';
export const HOME_WEB_CONFIG = 'HOME_WEB_CONFIG';

export const TYPE_MENU = {
  HOME: 'home',
  CATEGORY: 'category',
  POST: 'post',
  EVENT: 'event',
  LIBRARY: 'library'
};

export const TYPE_MENU_LINK = {
  [TYPE_MENU.HOME]: '/home',
  [TYPE_MENU.CATEGORY]: '/category',
  [TYPE_MENU.POST]: '/post',
  [TYPE_MENU.EVENT]: '/event',
  [TYPE_MENU.LIBRARY]: '/library'
};

export const TYPE_ARTICLE = {
  image: 'image',
  video: 'video',
  news: 'news',
  file: 'file'
};

export const SubTypeArticle = {
  single: 'single',
  library: 'library'
};

export const TYPE_HOME_DATA = {
  NEWS: 'news',
  CATEGORY: 'category',
  LIBRARY: 'library',
  EVENT: 'event',
  COMPANY_LOCATION: 'company-location'
};

export const UI_TYPE_HOME_DATA = {
  ONE: '1',
  TWO: '2',
  THREE: '3'
};

export const LIST_LOADING = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// google map
export const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;
export const SHOP_SEARCH_RADIUS =
  process.env.REACT_APP_SHOP_SEARCH_RADIUS || 50;
export const DEFAULT_LAT =
  parseFloat(process.env.REACT_APP_DEFAULT_LAT) || 21.027763;
export const DEFAULT_LNG =
  parseFloat(process.env.REACT_APP_DEFAULT_LNG) || 105.83416;
export const DEFAULT_DEBOUNCE =
  parseInt(process.env.REACT_APP_DEFAULT_DEBOUNCE) || 800;
