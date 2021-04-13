import axios from 'utils/axios';
import { urlEvent } from '../urlAPI';

export const getEvent = (params = {}) => {
  return axios.get(urlEvent, { params });
};

export const getEventDetail = id => {
  return axios.get(`${urlEvent}/${id}`);
};

export const getEventByYear = year => {
  return axios.get(`${urlEvent}/byYear/${year}`);
};
