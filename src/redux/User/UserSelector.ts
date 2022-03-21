import { RootState } from "../reduxStore";

export const sUserList = (state:RootState) => state.User.userList;
export const sCurrentPage = (state:RootState) => state.User.currentPage;
