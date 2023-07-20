import Task from './task';

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getName() { return this.name; }

    addTask = (taskToAdd) => {
        this.tasks.push(taskToAdd);
    }

    getTasks() { return this.tasks; }
}