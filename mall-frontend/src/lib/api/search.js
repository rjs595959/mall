import client from './client';

export const search = (val) => client.get(`/api/search?val=${val}`);

