import mongoose, { Schema } from 'mongoose';

const Poll = mongoose.model('Poll', new Schema({
    id: Schema.Types.ObjectId,
    title: String,
    topic: String,
    dateCreated: String,
    options: Schema.Types.Mixed
}));

export default Poll;
