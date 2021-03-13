import Router from 'koa-router';
import * as searchCtrl from './search.ctrl';

const search = new Router();
search.get('/', searchCtrl.search);

export default search;