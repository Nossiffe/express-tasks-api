// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { TaskNotFoundError } from '../error/task.error';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  if (err instanceof TaskNotFoundError) {
    res.status(404).json({ message: err.message });
  }

  res.status(500).json({ message: 'Quelque chose a mal tourné' });
  return;
};
