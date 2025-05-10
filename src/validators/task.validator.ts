import { body } from "express-validator";

export const addTaskValidation = [
  body('title')
    .isString()
    .withMessage('Le titre doit être une chaîne de caractères')
    .notEmpty()
    .withMessage('Le titre est requis'),
];

export const updateTaskValidation = [
  body("title")
    .optional()
    .isString()
    .withMessage("Le titre doit être une chaîne de caractères"),

  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Le champ 'completed' doit être un booléen"),
];