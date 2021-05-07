import { vsprintf } from 'sprintf-js';
import Lodash from 'lodash';
import { VI_LANG, SubTypeArticle, TYPE_ARTICLE } from '../utils/constant';
import moment from 'moment';

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

  if (Lodash.has(objTrans, '_id')) {
    const newObj = Lodash.omit(objTrans, ['_id']);
    return newObj;
  } else {
    return objTrans;
  }
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
        linkUrl = `/library/file/${id}`;
        break;
      }

      case TYPE_ARTICLE.news: {
        linkUrl = `/library/news/${id}`;
        break;
      }

      case TYPE_ARTICLE.video: {
        linkUrl = `/library/video/${id}`;
        break;
      }

      case TYPE_ARTICLE.image: {
        linkUrl = `/library/image/${id}`;
        break;
      }

      default:
        break;
    }
  }

  return linkUrl;
};

export const formatDateLang = month => {
  switch (month) {
    case 'Tháng 1':
      return 'month.January';
    case 'Tháng 2':
      return 'month.February';
    case 'Tháng 3':
      return 'month.March';
    case 'Tháng 4':
      return 'month.April';
    case 'Tháng 5':
      return 'month.May';
    case 'Tháng 6':
      return 'month.June';
    case 'Tháng 7':
      return 'month.July';
    case 'Tháng 8':
      return 'month.August';
    case 'Tháng 9':
      return 'month.September';
    case 'Tháng 10':
      return 'month.October';
    case 'Tháng 11':
      return 'month.November';
    case 'Tháng 12':
      return 'month.December';
    default:
      return;
  }
};

// {
//   translations: [{ lang: 'vi' }]
// };
// =>
// {
//   translations: [{ lang: 'vi' }],
//   vi: { lang: 'vi' }
// };
export const convertTranslations = object => {
  if (typeof object === 'object' && object !== null) {
    let { translations } = object;
    if (Array.isArray(translations)) {
      for (let i = 0; i < translations.length; i++) {
        let lang = object.translations[i];
        object[lang?.lang] = lang;
      }
    }
  }
  return object;
};

export const formatDate = date => {
  if (typeof date === 'string') {
    return moment(date.trim()).format('DD/MM/YYYY');
  }
  return '';
};
