// src/routes/tasks.routes.ts

import express from "express";
import { getTasks, addTask, getTaskById, updateTask, deleteTask } from "../controllers/tasks.controller";
import { validateRequest } from "../middleware/validateRequest";
import { addTaskValidation, updateTaskValidation } from "../validators/task.validator";


const router = express.Router();

router.get("/", getTasks);
router.post("/", [...addTaskValidation, validateRequest, addTask]);
router.get("/:id", getTaskById);
router.patch("/:id", updateTaskValidation, validateRequest, updateTask);
router.delete("/:id", deleteTask);

export default router;
