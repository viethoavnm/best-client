import { vsprintf } from 'sprintf-js';
import Lodash from 'lodash';
import { VI_LANG, SubTypeArticle, TYPE_ARTICLE } from '../utils/constant';

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

export const getLinkFromArticle = article => {
  const type = getSafeValue(article, 'type', '');
  const subType = getSafeValue(article, 'subType', '');
  const id = getSafeValue(article, '_id', '');
  let linkUrl = '/';
  if (subType === SubTypeArticle.single) {
    // If subtype is single, this is a post.
    linkUrl = `/post/${id}`;
  } else {
    // Library have 4 type, we need to check it to navigate
    switch (type) {
      case TYPE_ARTICLE.file: {
        linkUrl = `library/post/${id}`;
        break;
      }

      case TYPE_ARTICLE.news: {
        linkUrl = `library/post/${id}`;
        break;
      }

      case TYPE_ARTICLE.video: {
        linkUrl = `library/post/${id}`;
        break;
      }

      case TYPE_ARTICLE.image: {
        linkUrl = `library/post/${id}`;
        break;
      }

      default:
        break;
    }
  }

  return linkUrl;
};
