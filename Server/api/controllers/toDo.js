import * as toDoService from "../services/toDo.js";


export const index = async(request,response) => {
    try {
        const toDos = await toDoService.search();
        response.status(200);
        response.json(toDos);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};

export const save = async(request,response) => {
    try {
        const todo = {...request.body}; // shallow clone
        const newTodo = await toDoService.create(todo);
        response.status(200);
        response.json(newTodo);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};

export const get = async(request,response) => {
    try {
        const id = request.params.id;
        const todo = await toDoService.get(id);
        response.status(200);
        response.json(todo);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};

export const update = async(request,response) => {
    try {
        const id = request.params.id;
        const todo = {...request.body,_id: id};
        const updatedToDo = await toDoService.update(todo);
        response.status(200);
        response.json(updatedToDo);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
};

export const remove = async (request,response) => {
    try {
        const id = request.params.id;
        const todo = await toDoService.remove(id);
        response.status(200);
        response.json(todo);
    } catch (e) {
        response.status(500);
        response.json(e.message);
    }
}

