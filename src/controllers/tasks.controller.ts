import { Request, Response, NextFunction } from "express";
import { validationResult } from 'express-validator';
import { TaskNotFoundError } from "../error/task.error";
import { TaskService } from "../services/task.service";

export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await TaskService.getAllTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const addTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title } = req.body;
    const newTask = await TaskService.addTask(title);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

export const getTaskById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const task = await TaskService.getTaskById(id);
    res.json(task);
  } catch (err) {
    if (err instanceof TaskNotFoundError) {
      res.status(404).json({ message: err.message });
    } else {
      next(err);
    }
  }
};

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const { title, completed } = req.body;
    const updatedTask = await TaskService.updateTask(id, { title, completed });
    res.status(200).json(updatedTask);
  } catch (err) {
    if (err instanceof TaskNotFoundError) {
      res.status(404).json({ message: err.message });
    } else {
      next(err);
    }
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    await TaskService.deleteTask(id);
    res.status(204).send();
  } catch (err) {
    if (err instanceof TaskNotFoundError) {
      res.status(404).json({ message: err.message });
    } else {
      next(err);
    }
  }
};
