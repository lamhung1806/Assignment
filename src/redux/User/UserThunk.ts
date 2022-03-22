import { ActionResponse, User } from './../../type/user';
import axios from 'axios';
import { getUser } from './UserAction';

export const getUserThunk = (curentPage: number) => async (distpatch: any) => {
  try {
    const res = await axios.get<ActionResponse>(`https://randomuser.me/api/?page=${curentPage}&results=10`);
    const data = res.data;

    distpatch(getUser(data.results));
  } catch (err) {
    console.log(err);
  }
};
