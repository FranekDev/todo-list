import UI from './UI';

export default class Task {

    constructor(title, dueDate) {
        const date = new Date();
        this.title = title;
        this.status = false;
        this.addDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        dueDate = dueDate.split('-');
        this.dueDate = dueDate.reverse().join('/');
        this.ui = new UI();
    }

    getTitle = () => { return this.title; }

    markAsRead = () => {
        this.status = true;
    }

    showTask(tasks, id) {
        tasks.appendChild(this.ui.showTask(id, this.status, this.title, this.dueDate));
    }

    setStatus = (statusToSet) => {
        this.status = statusToSet;
    }

    setDueDate(date) {
        this.dueDate = date;
    }

};