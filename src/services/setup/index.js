import axios from 'utils/axios';
import { urlSetup } from '../urlAPI';

export const getSetupByKey = keySetup => {
  return axios.get(`${urlSetup}/${keySetup}`);
};

export const getHomeData = () => {
  return axios.get(`${urlSetup}/home-data`);
};
