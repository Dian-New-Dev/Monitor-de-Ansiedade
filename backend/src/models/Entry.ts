import mongoose from 'mongoose';

const EntrySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  situation: { type: String, required: true },
  feelings: { type: String, required: true },
  thoughts: { type: String, required: true },
  anxietyLevel: { type: Number, required: true },
});

const Entry = mongoose.model('Entry', EntrySchema);

export default Entry;
