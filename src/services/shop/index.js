import axios from 'utils/axios';
import { urlShop } from '../urlAPI';

export const searchShop = config => {
  return axios.get(`${urlShop}/search`, config);
};
