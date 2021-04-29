import Router from 'koa-router';
import fs from 'fs';

const images = new Router();

images.get('/:fileName', ctx => {
    let fileName = ctx.params.fileName;
    ctx.body = fs.readFileSync('./images/'+fileName);
})

export default images;
