import fs from 'fs';
import Joi from 'joi';
import crypto from 'crypto';
import Post from '../../models/post';
import Blob from 'node-blob';

/**
 * @list 
 * {GET} http://localhost:4000/api/post/list?category=
 */
export const list = async ctx => {
    try {
        const {category} = ctx.query;
        let results = await Post.findCategory(category);
        ctx.body = results;
    } catch(e) {
        ctx.throw(500, e);
    }
}

/**
 * @write 
 * {POST} http://localhost:4000/api/post/write
 * title, html, price, author, thumbnail
 */

export const write = async ctx => { 
    let thumbnail, files = ctx.request.files;
    let {title, html, price} = ctx.request.body;
    let categories = JSON.parse(ctx.request.body.categories);

    let regex = /<imageFile>/
    let index=-1

    html = html.replace(regex, function() {
        index += 1
        return '"' + files[index].path + '"'
    })

    if(files[0] !== undefined) {
        thumbnail = files[0].path;
    }
    
    try {
        let post = new Post({
            title,
            html, 
            price,
            author: ctx.state.user.nickname,
            thumbnail,
            categories,
        });
        await post.save();
    } catch(e) {
        console.log(e);
    }
}

export const read = async ctx => {
    let post = new Post
}
