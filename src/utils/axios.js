import axios from 'axios';
import { create } from 'apisauce';
import { urlBase } from 'services/urlAPI';

const instance = axios.create({
  baseURL: urlBase
});

export default instance;
