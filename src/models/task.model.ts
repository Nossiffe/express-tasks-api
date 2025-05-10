import mongoose, { Document, Schema } from 'mongoose';

export interface Task extends Document {
  title: string;
  completed: boolean;
}

const taskSchema = new Schema<Task>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const TaskModel = mongoose.model<Task>('Task', taskSchema);

export default TaskModel;
