import toDoRouter from "./toDo.js";

export default (app) => {
    app.use('/',toDoRouter);
}