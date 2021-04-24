import fs from 'fs';
import Joi from 'joi';
import crypto from 'crypto';
import Post from '../../models/post';

async function DataUrlToFile(image) {
    let regex = /^data:.+\/(.+);base64,(.*)$/;

    let matches = image.match(regex);
    let ext = matches[1];
    let data = matches[2];
    let buffer = Buffer.from(data, 'base64');
    try {
        let name = crypto.createHash('sha512').update(new Date().toString()).digest('hex') + '.' + ext
        fs.writeFileSync('images/'+ name, buffer);
        return name;
    } catch(e) {
        console.log(e);
    }
}

export const list = async ctx => {
    try {
        const {category} = ctx.query;
        const posts = await Post.find({category : category}).exec();
        ctx.body = posts;
    } catch(e) {
        ctx.throw(500, e);
    }
}

export const write = async ctx => {
    let contents = JSON.parse(ctx.request.body.contents)['ops']
                       .filter(content => content['insert'] !== '\n' );
    let title = ctx.request.body.title;

    // 입력예시
    // { insert : { image : 'data:image/~' }} => [fileName, undefined]
    // { attributes : { italic: true, bold: true }, insert: 'aaa' } => ['aaa', {italic:true, bold: true}]
    // { insert : '\nf\ndaf\ndaf\nas\nfd\nasf\nsdaf\n\n' } => { insert : 'f' }, {insert : 'daf'} => ['f', undefined], ['daf', undefined]
    let finalContents = []
    console.log(contents);
    for(let content of contents) {
        // image file 저장하기
        if(content['insert']['image'] != undefined) {
            finalContents.push([DataUrlToFile(content['insert']['image']), undefined]);
        }
        else {
            if(content['attributes'] != undefined) {
                finalContents.push([content['insert'], JSON.stringify(content['attributes'])]);
            }
            else {
                let splitedContents = content['insert'].split('\n').filter(content => content !== '');
                for(let splitedContent of splitedContents) {
                    finalContents.push([splitedContent, undefined]);
                }
            }
        }
    }

    try {
        let post = new Post({
            title : title,
            contents: finalContents,
        });
        await post.save();
    } catch(e) {
        console.log(e);
    }
}

export const read = async ctx => {
    let post = new Post
}
