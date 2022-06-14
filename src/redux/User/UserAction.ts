import { User } from './../../type/user';
export enum UserAction {
  GET_USER = 'GET_USER',
  NEXT_PAGE = 'NEXT_PAGE',
  PREVIOUS_PAGE = 'PREVIOUS_PAGE',
  GET_USER_ASYNC = 'GET_USER_ASYNC',
}

export const getUser = (data?: User[]) => {
  return {
    type: UserAction.GET_USER,
    data,
  };
};
export const getUserAsync = () => {
  return {
    type: UserAction.GET_USER_ASYNC,
  };
};
export const next = () => {
  return {
    type: UserAction.NEXT_PAGE,
  };
};
export const previous = () => {
  return {
    type: UserAction.PREVIOUS_PAGE,
  };
};
export interface IUserAction {
  type: UserAction;
  data: any;
}
