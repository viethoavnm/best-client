import axios from 'utils/axios';
import { urlCategory } from '../urlAPI';

/**
 * The library article get in here with subType = library
 */
export const getCategoryDetail = slug => {
  return axios.get(`${urlCategory}/slug/${slug}`, {
    validateStatus: status => {
      return 200 <= status && status < 500;
    }
  });
};
