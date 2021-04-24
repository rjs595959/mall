import client from './client';

export const getProductsInfo = (category) => client.get(`/api/post?category=${category}`);
