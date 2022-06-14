import orderBy from 'lodash/orderBy';
import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { User } from '../../type/user';
import { UserAction } from './UserAction';
import { requestGetStoreInfo } from './userRepository';
import { sGetCurrentPage } from './UserSelector';

function* fetchUser() {
  const currentPage: number = yield select(sGetCurrentPage);
  const res: User[] = yield call(requestGetStoreInfo, currentPage);
  const dataOrder = orderBy(
    res,
    res => {
      return res.name.first;
    },
    ['asc'],
  );

  yield put({ type: UserAction.GET_USER, data: dataOrder });
}

export function* fetchUserAsync() {
  yield takeEvery(UserAction.GET_USER_ASYNC, fetchUser);
}
function* nextUserPage() {
  yield takeEvery(UserAction.NEXT_PAGE, fetchUser);
}
function* praviousUserPage() {
  yield takeEvery(UserAction.PREVIOUS_PAGE, fetchUser);
}

function* UserSaga() {
  yield all([fetchUserAsync(), praviousUserPage(), nextUserPage()]);
}

export default UserSaga;
