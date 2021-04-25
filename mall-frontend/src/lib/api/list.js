import client from './client';

export const showList = (category) => client.get(`/api/post?category=${category}`);
