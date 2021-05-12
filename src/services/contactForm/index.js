import axios from 'utils/axios';
import { urlContactForm } from '../urlAPI';

/**
 * The library article get in here with subType = library
 */

export const postContactForm = body => {
  return axios.post(urlContactForm, body);
};
