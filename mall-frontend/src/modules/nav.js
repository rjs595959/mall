import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as searchAPI from '../lib/api/search';

const CHANGE_FIELD = 'nav/CHANGE_FIELD';
const [SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE] = createRequestActionTypes('nav/SEARCH');

export const search = createAction(
    SEARCH,
    val => val
);

export const changeField = createAction(
    CHANGE_FIELD,
    val => val
)

const searchSaga = createRequestSaga(SEARCH, searchAPI.search);
export function* navSaga() {
    yield takeLatest(SEARCH, searchSaga);
}

const initialState = {
    val : '',
    queries : [],
    searchError: null,
};

const nav = handleActions({
    [CHANGE_FIELD] : (state, {payload: val}) => ({
        ...state,
        val,
    }),
    [SEARCH_SUCCESS] : (state, {payload: queries}) => ({
                ...state,
                queries : queries['queries'],
                searchError: null,
    }),
    [SEARCH_FAILURE] : (state, {payload : e}) => ({
        ...state,
        searchError : e
    })
}, initialState);

export default nav;