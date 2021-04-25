import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import nav, { navSaga } from './nav';
import user, { userSaga } from './user';
import auth, { authSaga } from './auth';
import list, { listSaga } from './list';
import post, { postSaga } from './post';

const rootReducer = combineReducers({
    loading, 
    user, 
    auth,
    nav,
    list,
    post,
});

export function* rootSaga() {
    yield all([userSaga(), authSaga(), navSaga(), listSaga(), postSaga()]);
}

export default rootReducer;