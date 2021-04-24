import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const PostSchema = new Schema({
    title : String,
    contents : Array,
    author: String,
    date : {type: Date, default: new Date()}
});

const Post = mongoose.model('Post', PostSchema);
export default Post;