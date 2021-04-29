import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Blob from 'blob';

const PostSchema = new Schema({
    title : String,
    price : String,
    thumbnail : String,
    html : String,
    author: String,
    categories: Array,
    date : {type: Date, default: new Date()}
});

PostSchema.statics.findCategory = async (category) => {
    try {
        if(category === "undefined") {
            return await mongoose.model('Post').find();
        } else {
            return await mongoose.model('Post').find({categories : {'$in' : [category]}});
        }
    }
    catch(e) {
        console.log(e);
    }
    
}

const Post = mongoose.model('Post', PostSchema);
export default Post;