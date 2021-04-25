import Router from 'koa-router';

import * as postCtrl from './post.ctrl';

const post = new Router();
post.get('/', postCtrl.list);
post.post('/write', postCtrl.write);

export default post;