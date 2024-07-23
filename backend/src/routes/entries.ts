import { Router, Request, Response } from 'express';

const router = Router();

// Rota para criar uma nova entrada
router.post('/entries', (req: Request, res: Response) => {
    const newEntry = req.body;
    // Aqui você pode adicionar lógica para salvar a entrada no banco de dados
    res.status(201).json(newEntry);
});

// Rota para obter todas as entradas
router.get('/entries', (req: Request, res: Response) => {
    // Aqui você pode adicionar lógica para obter entradas do banco de dados
    res.status(200).json([]);
});

export default router;
