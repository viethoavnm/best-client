import { combineReducers } from 'redux';
import counterReducer from './counterSlice';
import setupReducer from './setupSlice';
import multiLangReducer from './multiLangSlice';
import rightBarSlice from './rightBarSlice';

const rootReducer = {
  counter: counterReducer,
  setup: setupReducer,
  multiLang: multiLangReducer,
  rightBar: rightBarSlice
};

export default rootReducer;
