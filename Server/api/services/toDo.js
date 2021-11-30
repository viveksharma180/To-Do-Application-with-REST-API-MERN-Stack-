import ToDo from "../models/toDo.js";

export const search = (params = {}) => {
    const promise = ToDo.find(params).exec();
    return promise;
};

export const create = (todo) => {
    const newToDo = new ToDo(todo);
    return newToDo.save();
};

export const get = (id) => {
    const promise = ToDo.findById(id).exec();
    return promise;
};

export const update = (todo) => {
    todo._id = todo.id;
    todo.lastModifiedDate = Date.now();
    const promise = ToDo.findByIdAndUpdate({_id: todo.id}, todo, {new:true}).exec();
    return promise;
};

export const remove = (id) => {
    const promise = ToDo.findByIdAndDelete({_id: id}).exec();
    return promise;
};
