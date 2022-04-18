import axios from '../utils/axios';
import { AxiosRequestConfig } from 'axios';

export interface ResponseType<T = any> {
  code: number;
  msg: string;
  data: T;
}


export function submitWords(params: AxiosRequestConfig<WordsForm>): Promise<ResponseType<null>> {
  return axios.post('/english/words/save', params)
}