import TaskModel, { Task } from "../models/task.model";
import { TaskNotFoundError } from "../error/task.error";

export class TaskService {
  static async getAllTasks() {
    return TaskModel.find();
  }

  static async getTaskById(id: string) {
    const task = await TaskModel.findById(id);
    if (!task) {
      throw new TaskNotFoundError('Tâche non trouvée');
    }
    return task;
  }

  static async addTask(title: string) {
    const newTask = new TaskModel({ title });
    await newTask.save();
    return newTask;
  }

  static async updateTask(id: string, updates: Partial<Task>) {
    const task = await TaskModel.findByIdAndUpdate(id, updates, { new: true });
    if (!task) {
      throw new TaskNotFoundError('Tâche non trouvée');
    }
    return task;
  }

  static async deleteTask(id: string) {
    const task = await TaskModel.findByIdAndDelete(id);
    if (!task) {
      throw new TaskNotFoundError('Tâche non trouvée');
    }
  }
}
