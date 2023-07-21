import Task from './task';
import Project from './Project';
import UI from './UI';

const Tasks = (project, storage) => {
    const ui = new UI();

    console.log('Active project', project);


    const content = document.querySelector('.task_content');
    
    const main = document.createElement('div');
    main.classList.add('main_tasks');
    content.appendChild(main);

    let tasks = storage.getTasks(project);
    // if(tasks == null) {
    //     tasks = [];
    // }
    let taskId = 1;

    const tasksContent = document.createElement('div');
    tasksContent.classList.add('tasks_list');
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
    name.placeholder = 'Task name';

    const date = document.createElement('input');
    date.type = 'date';

    const shotNewTaskForm = () => {
        addTaskBtn.addEventListener('click', () => {
            newTaskForm.style.display = 'flex';
            addTask();
        });
    };
    shotNewTaskForm();
    
    const addTask = () => {
        const sidebar = document.querySelector('.sidebar');

        const mainContent = document.querySelector('.main_content');
        
        sidebar.style.animation = 'decreaseOpacity .5s forwards';
        mainContent.style.animation = 'decreaseOpacity .5s forwards';
        newTaskForm.textContent = '';
        newTaskForm.style.position = 'absolute';

        showInputs();

        addBtn.addEventListener('click', () => {

            if(name.value.trim().length > 0) {
                let newTask = new Task(name.value, date.value);
                // project.addTask({ id: taskId++, param: newTask });
                storage.addTask(newTask, project);
                // localStorage.setItem(project.getName(), JSON.stringify(project));
                // storage.saveProject(project);
            // console.log('ls ', localStorage.getItem(project.getName()));
            }

            sidebar.style.opacity = '1';
            mainContent.style.opacity = '1';
            sidebar.style.animation = 'increaseOpacity .5s forwards';
            mainContent.style.animation = 'increaseOpacity .5s forwards';
            name.value = '';
            // newTaskForm.classList.add('hide_new_task_form');
            // newTaskForm.style.animation = 'hideTaskForm .4s forwards';
            newTaskForm.style.display = 'none';
            
            showTasks();

        });
    };

    const showInputs = () => {
        const body = document.querySelector('body');

        newTaskForm.appendChild(name);
        newTaskForm.appendChild(date);
        newTaskForm.appendChild(addBtn);

        body.appendChild(newTaskForm);
    };

    const changeTaskStatus = () => {

        let tasksElements = document.querySelectorAll('.task');

        tasksElements.forEach((task) => {
            let checkbox = task.querySelector('input[type=checkbox]');

            checkbox.addEventListener('click', () => {
                let idOfTask = task.dataset.id;
                let singleTask = tasks.find((obj, index) => {
                    return index == idOfTask;
                });
                if(singleTask) {
                    tasks[idOfTask].status = (tasks[idOfTask].status == false) ? true : false;
                }
                storage.updateTasks(tasks, project);
                
                renderTasks();

            });
        });

    };

    const deleteTask = () => {
        let tasksElements = document.querySelectorAll('.task');

        tasksElements.forEach((task) => {

            const taskToDelete = task.querySelector('.delete_task');

            taskToDelete.addEventListener('click', () => {
                const idOfTask = task.dataset.id;
                tasks.find((obj, index) => {
                    if(index == idOfTask) {
                        tasks.splice(index, 1);
                        storage.updateTasks(tasks, project);
                    }
                })
                
                renderTasks();
            }); 

        });
    }

    const showTasks = () => {
        tasksContent.textContent = '';
        tasks = storage.getTasks(project);
        tasks.forEach((task, index) => {
            ui.showTask(tasksContent, index, task.status, task.title, task.dueDate);
        });
        changeTaskStatus();
        deleteTask();
    };

    const renderTasks = () => {
        newTaskForm.textContent = '';
        showTasks();
    }

    showTasks();
}

export default Tasks;