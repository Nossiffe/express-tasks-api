import express, { Request, Response } from 'express';
import taskRoutes from './routes/tasks.routes';
import { errorHandler } from './middleware/errorHandler';
import connectDB from './database';

const app = express();
const port = 3000;

app.use(express.json());
connectDB();

app.use('/tasks', taskRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue sur ton API Express + TypeScript 🚀');
});

app.use(errorHandler);


app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
