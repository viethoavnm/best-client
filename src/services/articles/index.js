import axios from 'utils/axios';
import { urlArticle } from '../urlAPI';

/**
 * The library article get in here with subType = library
 */
export const getArticle = (params = {}) => {
  return axios.get(urlArticle, { params });
};

export const getLibraryArticle = (params = {}) => {
  return axios.get(`${urlArticle}/library`, {
    params,
    validateStatus: status => {
      return 200 <= status && status < 500;
    }
  });
};

export const getArticleDetail = id => {
  return axios.get(`${urlArticle}/${id}`, {
    validateStatus: status => {
      return 200 <= status && status < 500;
    }
  });
};
