import axios from 'axios';
import { ActionResponse } from '../../type/user';

export const requestGetStoreInfo = async (page?: number) => {
  const data = await axios
    .get<ActionResponse>(`https://randomuser.me/api/?page=${page}&results=10`)
    .then(res => res.data.results);
  return data;
};
