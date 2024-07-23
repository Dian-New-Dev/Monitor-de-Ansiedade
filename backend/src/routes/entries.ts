import { Router, Request, Response } from 'express';
// Router: cria um roteador de middleware e todas
// request e response: definem tipos para requisições e respostas http

const router = Router();

// Rota para clientes poderem criar uma nova entrada
router.post('/entries', (req: Request, res: Response) => {
    const newEntry = req.body;
    // Aqui você pode adicionar lógica para salvar a entrada no banco de dados
    res.status(201).json(newEntry);
});

// Rota para clientes poderem obter todas as entradas
router.get('/entries', (req: Request, res: Response) => {
    // Aqui você pode adicionar lógica para obter entradas do banco de dados
    res.status(200).json([]);
});

export default router;
