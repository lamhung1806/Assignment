import User, { UserReduxState } from "./User/UserReducer";
import {combineReducers,createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"

export interface RootState {
   User: UserReduxState
}


const rootReducer = combineReducers<RootState>({
    User:User
})


const store = createStore(rootReducer,applyMiddleware(thunk))

export default store;
