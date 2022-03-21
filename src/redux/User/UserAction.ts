export enum UserACtion{
    GET_USER = "GET_USER",
    NEXT_PAGINATION = "NEXT_PAGINATION",
    PREVIOS_PAGINATION = "PREVIOS_PAGINATION"
}

export const getUser = (data?:any) =>{
   return { 
       type: UserACtion.GET_USER,
       data
   }
}
export const next = (data?:any) =>{
   return { 
       type: UserACtion.NEXT_PAGINATION,
       data
   }
}
export const previos = (data?:any) =>{
   return { 
       type: UserACtion.PREVIOS_PAGINATION,
       data
   }
}
export interface IUserAction {
    type: UserACtion;
    data: any;
  }