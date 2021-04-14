import { vsprintf } from 'sprintf-js';
import Lodash from 'lodash';
import { VI_LANG } from '../utils/constant';

export const replaceStrUrl = (baseUrl, arrStr) => {
  var path = vsprintf(baseUrl, arrStr);
  return path;
};

export const getSafeValue = (object, keyItem, defaultValue) => {
  var safeValue = Lodash.get(object, keyItem, defaultValue);
  if (safeValue === null) {
    safeValue = defaultValue;
  }

  if (safeValue === '') {
    safeValue = defaultValue;
  }

  if (
    safeValue !== null &&
    defaultValue !== null &&
    (typeof safeValue !== typeof defaultValue ||
      safeValue.constructor !== defaultValue.constructor)
  ) {
    safeValue = defaultValue;
  }

  return safeValue;
};

export const getTransObj = (listTrans, lang = VI_LANG) => {
  let objTrans = Lodash.find(listTrans, obj => obj.lang === lang);
  if (Lodash.isEmpty(objTrans) && listTrans.length > 0) {
    objTrans = listTrans[0];
  }

  const { _id, ...rest } = objTrans;
  return rest;
};
