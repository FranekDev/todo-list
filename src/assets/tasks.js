import { Task } from './task';

const Tasks = () => {

    const content = document.querySelector('.content');
    const main = document.createElement('main');
    content.appendChild(main);

    let tasks = [new Task('Testowy task')];
    const tasksContent = document.createElement('div');
    main.appendChild(tasksContent);

    const addTaskBtn = document.createElement('a');
    addTaskBtn.classList.add('add_task');
    addTaskBtn.textContent = '+ add task';
    main.appendChild(addTaskBtn);


    const newTaskForm = document.createElement('div');
    newTaskForm.classList.add('new_task_form');

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';
    const name = document.createElement('input');
    name.type = 'text';

    const date = document.createElement('input');
    date.type = 'date';

    addTaskBtn.addEventListener('click', () => {
        console.log('add task');
        addTask();
    });

    
    
    const addTask = () => {
        newTaskForm.textContent = '';
        showInputs();
        addBtn.addEventListener('click', () => {
            tasks.push(new Task(name.value));
            tasks.forEach(task => console.log('Title: ' + task.getTitle()));
            showTasks();
            name.value = '';
        });

    };

    const showInputs = () => {
        
        newTaskForm.appendChild(name);
        newTaskForm.appendChild(date);
        newTaskForm.appendChild(addBtn);
        main.appendChild(newTaskForm);
    };


    const showTasks = () => {
        tasksContent.textContent = '';
        tasks.forEach(task => task.showTask(tasksContent));
    };
    showTasks();
}

export default Tasks;