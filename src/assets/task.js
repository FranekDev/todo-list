export class Task {

    constructor(title, dueDate) {
        const date = new Date();
        this.title = title;
        this.status = false;
        this.addDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        dueDate = dueDate.split('-');
        this.dueDate = dueDate.reverse().join('/');
    }

    getTitle = () => { return this.title; }

    markAsRead = () => {
        this.status = true;
        this.changeTaskToRead();
    }

    showTask = (tasks, id) => {
        const task = document.createElement('div');
        task.classList.add('task');
        (this.status === false) ? task.classList.add('not_finished') : task.classList.add('finished');
        task.setAttribute('data-id', id);
        const title = document.createElement('p');
        title.classList.add('task_title');

        title.textContent = this.title;

        const read = document.createElement('input');
        read.type = 'checkbox';

        read.checked = (this.status === true) ? true : false;

        const mainInfo = document.createElement('div');
        mainInfo.classList.add('info');
        mainInfo.appendChild(read);
        mainInfo.appendChild(title);

        const secondaryInfo = document.createElement('div');
        secondaryInfo.classList.add('info');

        const date = document.createElement('p');
        date.textContent = this.dueDate;

        const pickDate = document.createElement('input');
        pickDate.type = 'date';

        const remove = document.createElement('div');
        remove.classList.add('delete_task');
        remove.textContent = 'Del';

        secondaryInfo.appendChild(date);
        secondaryInfo.appendChild(remove);

        task.appendChild(mainInfo);
        task.appendChild(secondaryInfo);

        tasks.appendChild(task);
    }

    changeTaskToRead = () => {
        const task = document.querySelector('.task');
        task.style.border = 'none';
    };

    getTask = () => {
        const task = document.querySelector('.task');
        return task;
    };

};