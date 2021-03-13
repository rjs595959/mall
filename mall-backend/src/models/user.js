import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    username: String,
    nickname: String,
    hashedPassword: String,
});

UserSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
}

UserSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;
}

UserSchema.methods.serialize = function() {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
}

UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
        {
            _id : this.id,
            username : this.username,
            nickname : this.nickname,
        },
        process.env.JWT_SECRET, // 두 번째 파라미터로 JWT 암호를 넣습니다.
        {
            expiresIn : '7d', // 7일동안 유효
        }
    );
    return token;
}

UserSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
}

UserSchema.statics.findByNickname = function(nickname) {
    return this.findOne({ nickname });
}

const User = mongoose.model('User', UserSchema);
export default User;