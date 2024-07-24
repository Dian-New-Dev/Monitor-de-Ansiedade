import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import entriesRouter from './routes/entries'; 
import entryRoutes from './routes/entryRoutes'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Configurar o middleware cors para permitir requisições de diferentes origens
app.use(cors());

// Função de conexão com o MongoDB
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

// Rota de teste
app.get('/', (req: Request, res: Response) => {
    res.send('Servidor Express funcionando!');
});

// Usar as rotas definidas para manipulação de entradas
app.use('/api', entriesRouter);
app.use('/api', entryRoutes);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
