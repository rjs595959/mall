import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import user, { userSaga } from './user';
import auth, { authSaga } from './auth';

const rootReducer = combineReducers({
    loading, 
    user, 
    auth
});

export function* rootSaga() {
    yield all([userSaga(), authSaga()]);
}

export default rootReducer;