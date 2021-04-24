import { createAction, handleActions } from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as productAPI from '../lib/api/product';

const [GET_PRODUCTS_INFO, GET_PRODUCTS_INFO_SUCCESS, GET_PRODUCTS_INFO_FAILURE] = createRequestActionTypes('product/GET_PRODUCT_INFO');

export const getProductsInfo = createAction(
    GET_PRODUCTS_INFO,
    category => category
);

const getProductsInfoSaga = createRequestSaga(GET_PRODUCTS_INFO, productAPI.getProductsInfo);
export function* productSaga() {
    yield takeLatest(GET_PRODUCTS_INFO, getProductsInfoSaga);
}

const initialState = {
    products : [],
    error : null,
};

const product = handleActions(
    {
        [GET_PRODUCTS_INFO_SUCCESS] : (state, {payload: products}) => ({
            ...state,
            products,
            error: null,
        }),
        [GET_PRODUCTS_INFO_FAILURE] : (state, {payload: e}) => ({
            ...state,
            error: e
        })
    },
    initialState,
)

export default product;