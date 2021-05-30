import axios from 'utils/axios';
import { urlEvent } from '../urlAPI';

export const getEvent = (params = {}) => {
  return axios.get(urlEvent, { params });
};

export const getEventDetail = slug => {
  return axios.get(`${urlEvent}/slug/${slug}`);
};

export const getEventByYear = year => {
  return axios.get(`${urlEvent}/byYear/${year}`);
};
