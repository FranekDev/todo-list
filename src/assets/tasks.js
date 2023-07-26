import Task from './task';
import UI from './UI';

const Tasks = (project, storage) => {
    const ui = new UI();
    
    const content = document.querySelector('.task_content');
    
    const main = document.createElement('div');
    main.classList.add('main_tasks');
    content.appendChild(main);
    
    let tasks = storage.getTasks(project);
    
    if(project.name == 'Today') {
        tasks = storage.getTodayTasks();
    }
    else if(project.name == 'This week') {
        tasks = storage.getThisWeekTasks();
    }

    let tasksContent = document.createElement('div');
    tasksContent.classList.add('tasks_list');
    main.appendChild(tasksContent);

    const addTaskBtn = document.createElement('a');
    addTaskBtn.classList.add('add_task');
    addTaskBtn.textContent = '+ add task';
    if(project.name != 'Today' && project.name != 'This week') {
        main.appendChild(addTaskBtn);
    }

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
        newTaskForm.style.position = 'fixed';

        showInputs();

        addBtn.addEventListener('click', () => {

            if(name.value.trim().length > 0) {
                let newTask = new Task(name.value.trim(), date.value);
                storage.addTask(newTask, project);
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
                if(project.name == 'Today' || project.name == 'This week') {
                    storage.updateTodayTask(tasks[idOfTask], tasks[idOfTask].taskID);
                }
                else {
                    storage.updateTasks(tasks, project);
                }
                
                renderTasks();

            });
        });

    };

    const editTaskTitle = () => {
        let tasksElements = document.querySelectorAll('.task');

        tasksElements.forEach((task) => {
            const taskToEdit = task.querySelector('.task_title');
            let secondInfo = task.querySelectorAll('.info')[0];
            
            taskToEdit.addEventListener('click', () => {
                const taskStatus = task.querySelector('input[type=checkbox]');
                const idOfTask = task.dataset.id;
                const currentTitle = taskToEdit.textContent;
                
                if(taskStatus.checked == false) {
                    taskToEdit.textContent = '';
                    const title = document.createElement('input');
                    title.type = 'text';
                    title.value = currentTitle;
                        
                    title.addEventListener('blur', (e) => {
                        title.style.display = 'none';
                        if(title.value.trim().length > 0) {
                            taskToEdit.textContent += e.target.value.trim();

                            tasks.find((obj, index) => {

                                if(index == idOfTask) {
                                    tasks[idOfTask].title = title.value.trim();
                                    if(project.name == 'Today' || project.name == 'This week') {
                                        storage.updateTodayTask(tasks[idOfTask], tasks[idOfTask].taskID);
                                    }
                                    else {
                                        storage.updateTasks(tasks, project);
                                    }
                                }
                            });
                        }
                        else {
                            taskToEdit.textContent = currentTitle;
                        }
                    });
                    
                    secondInfo.insertBefore(title, secondInfo.lastChild);
                    title.focus();
                }

            }); 
        });
    };

    const editTaskDueDate = () => {
        let tasksElements = document.querySelectorAll('.task');

        tasksElements.forEach((task) => {

            const taskToEdit = task.querySelector('.date');
            let secondInfo = task.querySelectorAll('.info')[1];

            taskToEdit.addEventListener('click', () => {
                
                const taskStatus = task.querySelector('input[type=checkbox]');
                const idOfTask = task.dataset.id;
                let currentDate = taskToEdit.textContent;
                
                if(taskStatus.checked == false) {
                    if(currentDate.length > 0) {
                        taskToEdit.textContent = '';

                        const datePicker = document.createElement('input');
                        datePicker.type = 'date';
                        datePicker.value = currentDate.split('/').reverse().join('-');
                        
                        datePicker.addEventListener('blur', () => {
                            datePicker.style.display = 'none';

                            if(datePicker.value.length > 0) {
                                taskToEdit.textContent = datePicker.value.split('-').reverse().join('/');

                                tasks.find((obj, index) => {

                                    if(index == idOfTask) {

                                        tasks[idOfTask].dueDate = ui.formatDate(datePicker.value);
                                        if(project.name == 'Today' || project.name == 'This week') {
                                            storage.updateTodayTask(tasks[idOfTask], tasks[idOfTask].taskID);
                                        }
                                        else {
                                            storage.updateTasks(tasks, project);
                                        }
                                        showTasks();
                                    }
                                });
                            }
                            else {
                                taskToEdit.textContent = ui.formatDate(currentDate);
                            }
                        });
                        
                        secondInfo.insertBefore(datePicker, secondInfo.firstChild);
                        datePicker.focus();
                    }
                }
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
                        if(project.name == 'Today' || project.name == 'This week') {
                            storage.updateTodayTask(tasks[idOfTask], tasks[idOfTask].taskID, 'delete');
                        }
                        else {
                            tasks.splice(index, 1);
                            storage.updateTasks(tasks, project);
                        }
                    }
                })
                
                renderTasks();
            }); 

        });
    }

    const showTasks = () => {
        const inputDate = document.querySelectorAll('.input_date');
        inputDate.forEach(input => { input.style.display = 'none';});
        tasksContent = document.querySelector('.tasks_list');
        tasksContent.textContent = '';

        if(project.name == 'Today' && project.tasks.length == 0) {
            tasks = storage.getTodayTasks();
        }
        else if(project.name == 'This week' && project.tasks.length == 0) {
            tasks = storage.getThisWeekTasks();
        } 
        else {
            tasks = storage.getTasks(project);
        }
        
        if(tasks.length == 0) {
            const noTasksMessage = document.createElement('p');
            noTasksMessage.textContent = 'No tasks';
            tasksContent.appendChild(noTasksMessage);
        }
        else {
            tasks.forEach((task, index) => {
                ui.showTask(tasksContent, index, task.status, task.title, task.dueDate);
            });
        }
        
        changeTaskStatus();
        editTaskTitle();
        editTaskDueDate();
        deleteTask();
        updateDueDate();
    };

    const renderTasks = () => {
        newTaskForm.textContent = '';
        showTasks();
    }

    const updateDueDate = () => {

        let tasksElements = document.querySelectorAll('.task');

        tasksElements.forEach((task) => {
            const inputDate = task.querySelector('.input_date');
            
            inputDate.addEventListener('input', () => {
                const idOfTask = task.dataset.id;
                tasks.find((obj, index) => {
                    if(index == idOfTask) {
                        tasks[idOfTask].dueDate = ui.formatDate(inputDate.value);
                        storage.updateTasks(tasks, project);
                        showTasks();
                    }
                })
                
                renderTasks();
            });
        });
    };

    showTasks();
}

export default Tasks;