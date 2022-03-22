import { User } from '../../type/user';
import { IUserAction, UserAction } from './UserAction';

export interface UserReduxState {
  userList: User[];
  currentPage: number;
}

const UserInitialState: UserReduxState = {
  userList: [],
  currentPage: 1,
};
const User = (state: UserReduxState = UserInitialState, action: IUserAction) => {
  switch (action.type) {
    case UserAction.GET_USER:
      return {
        ...state,
        userList: action.data,
      };

    case UserAction.NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case UserAction.PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    default:
      return state;
  }
};

export default User;
