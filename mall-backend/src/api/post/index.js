import Router from 'koa-router';
import multer from '@koa/multer';
import * as postCtrl from './post.ctrl';

// 이미지 파일을 에디터로 올릴 때 저장될 장소를 지정한다.
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images/')
    },
    filename: function(req, file, cb) {
        let type = file.mimetype;
        let date = new Date().getTime();
        cb(null, `${file.fieldname}-${date}.${type}`);
    }
})

const upload = multer( { storage: storage, limits : {fileSize: 3000000}});

const post = new Router();
post.get('/', postCtrl.list);
post.post('/write', upload.array('images'), postCtrl.write);

export default post;