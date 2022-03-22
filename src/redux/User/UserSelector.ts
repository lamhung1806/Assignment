import { RootState } from '../reduxStore';

export const sGetUserList = (state: RootState) => state.User.userList;
export const sGetCurrentPage = (state: RootState) => state.User.currentPage;
