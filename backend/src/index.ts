import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import entriesRouter from './routes/entries'; // Certifique-se de que o caminho está correto

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; // Ou qualquer outra porta que preferir

// Conexão com o MongoDB
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/anxiety-tracker';
mongoose.connect(uri)
    .then(() => console.log('MongoDB conectado com sucesso'))
    .catch((error) => {
        if (error instanceof Error) {
            console.error(`Erro na conexão com o MongoDB: ${error.message}`);
        } else {
            console.error('Erro na conexão com o MongoDB:', error);
        }
    });

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.json());
app.use(express.json()); // Para lidar com JSON no corpo da solicitação

// Rota de teste
app.get('/', (req: Request, res: Response) => {
    res.send('Servidor Express funcionando!');
});

// Usar as rotas definidas para manipulação de entradas
app.use('/api/entries', entriesRouter);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
