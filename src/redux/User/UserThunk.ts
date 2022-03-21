import axios from "axios";
import { getUser } from "./UserAction";

export const getUserThunk = (page?: number) => async (distpatch: any) => {
  try {
    const res = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=10`
    );
    const data = res.data;
    distpatch(getUser(data));
  } catch (err) {
    console.log(err);
  }
};
