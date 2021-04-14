import axios from 'utils/axios';
import { urlArticle } from '../urlAPI';

export const getArticle = (params = {}) => {
  return axios.get(urlArticle, { params });
};

export const getArticleDetail = id => {
  return axios.get(`${urlArticle}/${id}`);
};
