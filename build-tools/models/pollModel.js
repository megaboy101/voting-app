import mongoose, { Schema } from 'mongoose';

const Poll = mongoose.model('Poll', new Schema({
    id: Schema.Types.ObjectId,
    title: String,
    topic: String,
    date: String,
    owner: String,
    voterList: Schema.Types.Mixed,
    options: Schema.Types.Mixed
}));

export default Poll;
