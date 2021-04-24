import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/post';

const [WRITE, WRITE_SUCCESS, WRITE_FAILURE] = createRequestActionTypes('post/write');

export const write = createAction(WRITE, ({contents}) => ({
    contents
}));

const writeSaga = createRequestSaga(WRITE, postAPI.write);
export function* postSaga() {
    yield takeLatest(WRITE, writeSaga);
}

const initialState = {
    write : {
        contents: '',
        writeError: null,
    }
};

const post = handleActions(
    {
        [WRITE_SUCCESS] : (state, payload) => ({
            ...state,
            writeError: null
        }),
        [WRITE_FAILURE] : (state, {payload: error}) => ({
            ...state,
            writeError: error
        })
    },
    initialState
);

export default post;