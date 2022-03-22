export enum UserACtion {
  GET_USER = "GET_USER",
  NEXT_PAGE = "NEXT_PAGE",
  PREVIOS_PAGE = "PREVIOS_PAGE",
}

export const getUser = (data?: any) => {
  return {
    type: UserACtion.GET_USER,
    data,
  };
};
export const next = () => {
  return {
    type: UserACtion.NEXT_PAGE,
  };
};
export const previos = () => {
  return {
    type: UserACtion.PREVIOS_PAGE,
  };
};
export interface IUserAction {
  type: UserACtion;
  data: any;
}
