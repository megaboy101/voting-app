import mongoose, { Schema } from 'mongoose';

const User = mongoose.model('User', new Schema({
    username: String
}));

export default User;
