import express from "express";
import * as toDoController from "../controllers/toDo.js";

const router = express.Router();

//check here for mistakes
router.route('/todos')
    .get(toDoController.index)
    .post(toDoController.save);

router.route('/todos/:id')
    .get(toDoController.get)
    .put(toDoController.update)
    .delete(toDoController.remove);
export default router;