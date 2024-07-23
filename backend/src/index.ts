import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import entriesRouter from './routes/entries'; // Certifique-se de que o caminho está correto

const app = express();
const port = 5000; // Ou qualquer outra porta que preferir

// Função de conexão com o MongoDB
const connectDB = async () => {
    try {
        // Substitua <DB_URI> pela URI de conexão do MongoDB (local ou Atlas)
        const conn = await mongoose.connect('<mongodb://localhost:27017/anxiety-tracker>', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

// Conectar ao banco de dados
connectDB();

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.json());

// Rota de teste
app.get('/', (req: Request, res: Response) => {
    res.send('Servidor Express funcionando!');
});

// Usar as rotas definidas para manipulação de entradas
app.use('/api', entriesRouter);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

import entryRoutes from './routes/entryRoutes';

// Configuração de middleware e rotas
app.use(express.json()); // Para lidar com JSON no corpo da solicitação
app.use('/api', entryRoutes);