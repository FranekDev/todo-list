export class Task {
    constructor(title) {
        this.title = title;
        this.status = false;
        console.log('dodano task');
    }

    getTitle = () => { return this.title; }
    markAsRead = () => { this.status = true; }
    showTask = (tasks) => {
        const task = document.createElement('div');
        task.classList.add('task');
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
        date.textContent = 'dd/mm/rrrr';
        const pickDate = document.createElement('input');
        pickDate.type = 'date';
        const remove = document.createElement('div');
        remove.textContent = 'Del';

        // const trashLogo = require();


        secondaryInfo.appendChild(date);
        secondaryInfo.appendChild(remove);

        task.appendChild(mainInfo);
        task.appendChild(secondaryInfo);

        tasks.appendChild(task);
    }
};