import axios from 'utils/axios';
import { urlEmail } from '../urlAPI';

/**
 * The library article get in here with subType = library
 */

export const postEmail = body => {
  return axios.post(urlEmail, body);
};
