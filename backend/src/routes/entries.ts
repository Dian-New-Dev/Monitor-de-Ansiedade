import { Router, Request, Response } from 'express';
import Entry from '../models/Entry';

const router = Router();

router.post('/entries', async (req: Request, res: Response) => {
    console.log('Recebendo dados:', req.body);
    try {
        const entry = new Entry(req.body);
        await entry.save();
        res.status(201).json(entry);
    } catch (error) {
        console.error('Erro ao salvar entrada:', error);
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'Unknown error' });
        }
    }
});

export default router;
