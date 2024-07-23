import mongoose from 'mongoose'; // importa biblioteca de MongoDB chamada Mongoose


//EntrySchema define um novo esquema, ou estrutura de documentos
const EntrySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  situation: { type: String, required: true },
  feelings: { type: String, required: true },
  thoughts: { type: String, required: true },
  anxietyLevel: { type: Number, required: true },
});

// cria um modelo chamado Entry
const Entry = mongoose.model('Entry', EntrySchema);

export default Entry;
