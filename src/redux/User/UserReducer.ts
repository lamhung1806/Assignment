import { User } from "../../type/user"
import { IUserAction, UserACtion } from "./UserAction"

export interface UserReduxState {
userList: User[];
currentPage: number;

}


const UserInitialState:UserReduxState = {
   userList: [],
   currentPage:1 ,
}
const User = (state:UserReduxState = UserInitialState, action:IUserAction) => {
    switch (action.type) {
        case UserACtion.GET_USER:
            
            return{ 
                ...state,userList:action.data.results
            }

        case UserACtion.NEXT_PAGINATION : 
             
   
            return{ 
                ...state,currentPage:state.currentPage + 1,
            }
      
        case UserACtion.PREVIOS_PAGINATION : 
   
            return{ 
                ...state,currentPage:state.currentPage - 1,
            }
      
        default:
            return state
    }
}

export default User