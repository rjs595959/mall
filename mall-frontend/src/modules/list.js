import { createAction, handleActions } from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as listAPI from '../lib/api/list';

const [SHOW_LIST, SHOW_LIST_SUCCESS, SHOW_LIST_FAILURE] = createRequestActionTypes('list/SHOW_LIST_INFO');

export const showList = createAction(
    SHOW_LIST,
    category => category
);

const showListSaga = createRequestSaga(SHOW_LIST, listAPI.showList);
export function* listSaga() {
    yield takeLatest(SHOW_LIST, showListSaga);
}

const initialState = {
    list : [{imgUrl: 'a', name : 'b', price : '1000', category: '1'}],
    error : null,
};

const list = handleActions(
    {
        [SHOW_LIST_SUCCESS] : (state, {payload: list}) => ({
            ...state,
            list,
            error: null,
        }),
        [SHOW_LIST_FAILURE] : (state, {payload: e}) => ({
            ...state,
            error: e
        })
    },
    initialState,
)

export default list;