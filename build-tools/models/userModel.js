import mongoose, { Schema } from 'mongoose';

const User = mongoose.model('User', new Schema({
    id: Schema.Types.ObjectId,
    pollsCreated: Number,
    pollsVoted: Number,
    optionsCreated: Number,
    verified: String,
    pollsVotedById: []
}));

export default User;
