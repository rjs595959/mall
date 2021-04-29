import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/post';

const CHANGE_FIELD = 'post/CHANGE_FIELD';
const INITIALIZE_FORM = 'post/INITIALIZE_FORM';
const APPEND_CATEGORY = 'post/APPEND_CATEGORY';
const [WRITE, WRITE_SUCCESS, WRITE_FAILURE] = createRequestActionTypes('post/write');

export const write = createAction(WRITE, (formData) => (formData))
export const changeField = createAction( CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const initializeForm = createAction(INITIALIZE_FORM);
export const appendCategory = createAction(APPEND_CATEGORY, ({category}) => ({category}) );

const writeSaga = createRequestSaga(WRITE, postAPI.write);
export function* postSaga() {
    yield takeLatest(WRITE, writeSaga);
}

const initialState = {
    title : '',
    text : '',
    price : '',
    category : '',
    categories : [],
    writeError: null,
};

const post = handleActions(
    {
        [CHANGE_FIELD] : (state, {payload: { key, value }}) => produce(state, draft => {
            draft[key] = value;
        }),
        [INITIALIZE_FORM] : (state, payload) => ({
            ...initialState,
            writeError: state['writeError'],
        }),
        [APPEND_CATEGORY] : (state, {payload : {category}}) => ({
            ...state,
            category : '',
            categories : state.categories.concat(category)
        }),
        [WRITE_SUCCESS] : (state, payload) => ({
            ...state,
            writeError: false,
        }),
        [WRITE_FAILURE] : (state, {payload: error}) => ({
            ...state,
            writeError: error
        })
    },
    initialState
);

export default post;