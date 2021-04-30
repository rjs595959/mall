import Router from 'koa-router';
import fs from 'fs';

const images = new Router();

images.get('/:fileName', ctx => {
    let fileName = decodeURI(ctx.params.fileName);
    if(fileName.indexOf('..') != -1) {
        ctx.throw(401, '허락되지 않는 접근입니다.');
    } else {
        ctx.body = fs.readFileSync('./images/'+fileName);
    }
})

export default images;
