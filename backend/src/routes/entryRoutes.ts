import express from 'express';
import Entry from '../models/Entry';

const router = express.Router();

// Rota para criar uma nova entrada
router.post('/entries', async (req, res) => {
  try {
    const newEntry = new Entry(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para obter todas as entradas
router.get('/entries', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
