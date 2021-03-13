import Router from 'koa-router';
import auth from './auth';
import search from './search';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/search', search.routes());
export default api;
