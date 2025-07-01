import express, { Application } from 'express';
import cors from 'cors';
import bookRoutes from './routes/book-routes';  

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use(bookRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));