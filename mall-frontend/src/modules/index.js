import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import nav, { navSaga } from './nav';
import user, { userSaga } from './user';
import auth, { authSaga } from './auth';

const rootReducer = combineReducers({
    loading, 
    user, 
    auth,
    nav
});

export function* rootSaga() {
    yield all([userSaga(), authSaga(), navSaga()]);
}

export default rootReducer;