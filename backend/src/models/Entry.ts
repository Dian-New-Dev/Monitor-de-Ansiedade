import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
    feelings: { type: String, required: true },
    thoughts: { type: String, required: true },
    situation: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true }
});

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;
