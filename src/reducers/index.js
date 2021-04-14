import { combineReducers } from 'redux';
import counterReducer from './counterSlice';
import setupReducer from './setupSlice';
import multiLangReducer from './multiLangSlice';

const rootReducer = {
  counter: counterReducer,
  setup: setupReducer,
  multiLang: multiLangReducer
};

export default rootReducer;
