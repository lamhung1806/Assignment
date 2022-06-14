import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import User, { UserReduxState } from './User/UserReducer';
import UserSaga from './User/UserSaga';

export interface RootState {
  User: UserReduxState;
}

const rootReducer = combineReducers<RootState>({
  User: User,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(UserSaga);
export default store;
