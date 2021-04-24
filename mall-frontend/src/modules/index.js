import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import nav, { navSaga } from './nav';
import user, { userSaga } from './user';
import auth, { authSaga } from './auth';
import product, { productSaga } from './product';
import post, { postSaga } from './post';

const rootReducer = combineReducers({
    loading, 
    user, 
    auth,
    nav,
    product,
    post,
});

export function* rootSaga() {
    yield all([userSaga(), authSaga(), navSaga(), productSaga(), postSaga()]);
}

export default rootReducer;