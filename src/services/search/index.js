import axios from 'utils/axios'
import {urlArticle} from '../urlAPI'

export const getArticle = (params ={}) => {
  return axios.get(urlArticle, {params})
}