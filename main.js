/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/Project.js":
/*!*******************************!*\
  !*** ./src/assets/Project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/assets/task.js");


class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.addDate = new Date();
    }

    getName() { return this.name; }

    addTask = (taskToAdd) => {
        this.tasks.push(taskToAdd);
    }

    getTasks() { return this.tasks; }
}

/***/ }),

/***/ "./src/assets/UI.js":
/*!**************************!*\
  !*** ./src/assets/UI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
class UI {
    showTask = (tasks, id, status, taskTitle, dueDate) => {
        const task = document.createElement('div');
        task.classList.add('task');
        (status === false) ? task.classList.add('not_finished') : task.classList.add('finished');
        task.setAttribute('data-id', id);
        const title = document.createElement('p');
        title.classList.add('task_title');

        title.textContent = taskTitle;

        const read = document.createElement('input');
        read.type = 'checkbox';

        read.checked = (status === true) ? true : false;

        const mainInfo = document.createElement('div');
        mainInfo.classList.add('info');
        mainInfo.appendChild(read);
        mainInfo.appendChild(title);

        const secondaryInfo = document.createElement('div');
        secondaryInfo.classList.add('info');

        const date = document.createElement('p');
        date.classList.add('date');

        const pickDate = document.createElement('input');
        pickDate.type = 'date';
        pickDate.classList.add('input_date');

        if(dueDate != '') {
            date.textContent = dueDate;
            pickDate.style.display = 'none';
        }

        const remove = document.createElement('div');
        remove.classList.add('delete_task');
        this.showTrashIcon(remove);

        date.appendChild(pickDate);
        secondaryInfo.appendChild(date);
        secondaryInfo.appendChild(remove);

        task.appendChild(mainInfo);
        task.appendChild(secondaryInfo);

        tasks.appendChild(task);
    }

    showProject = (projectsArray) => {
        const projectsList = document.querySelector('.projects_list');
        projectsList.textContent = '';
        projectsArray.forEach((project) => {
            const projectLink = document.createElement('a');
            projectLink.classList.add('project');
            projectLink.textContent = project.getName();
            
            projectsList.appendChild(projectLink);
        });
    }

    setActiveProject(project) {
        if(!project.classList.contains('active_project')) {
            project.classList.add('active_project');
        }
        else {
            project.classList.remove('active_project');
        }
    }

    resetProject(project) {
        if(project.classList.contains('active_project')) {
            project.classList.remove('active_project');
        }
    }

    resetAllProjects() {
        const allProjects = document.querySelectorAll('.project');

        allProjects.forEach(project => {
            if(project.classList.contains('active_project')) {
                project.classList.remove('active_project');
            }
        });
    }

    setActiveDateFormat(dateLink) {
        if(!dateLink.classList.contains('active_project')) {
            dateLink.classList.add('active_project');
        }
        else if(dateLink.classList.contains('active_project')) {
            dateLink.classList.remove('active_project');
        }
    }

    resetDateFormats() {
        const dateLinks = document.querySelectorAll('.date_link');
        dateLinks.forEach(dateLink => {
            if(dateLink.classList.contains('active_project')) {
                dateLink.classList.remove('active_project');
            }
        });
    }

    showTrashIcon(node) {
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        iconSvg.setAttribute('fill', '#676767');
        iconSvg.setAttribute('viewBox', '0 0 24 24');
        iconSvg.setAttribute('stroke', '');
        iconSvg.classList.add('trash_icon');

        iconPath.setAttribute(
            'd',
            'M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z' 
        );
        iconPath.setAttribute('stroke-linecap', 'round');
        iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('stroke-width', '0');

        iconSvg.appendChild(iconPath);

        return node.appendChild(iconSvg);
    }

    showX(node) {
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        iconSvg.setAttribute('fill', '#676767');
        iconSvg.setAttribute('viewBox', '0 0 256 256');
        iconSvg.setAttribute('stroke', '');
        iconSvg.classList.add('x_icon');

        iconPath.setAttribute(
            'd',
            'M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z' 
        );

        iconPath.setAttribute('stroke-linecap', 'round');
        iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('stroke-width', '0');

        iconSvg.appendChild(iconPath);

        return node.appendChild(iconSvg);
    }

    formatDate(date) {
        date = date.split('-');
        return date.reverse().join('/');
    }
}

/***/ }),

/***/ "./src/assets/footer.js":
/*!******************************!*\
  !*** ./src/assets/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Footer = () => {

    // const content = document.querySelector('.content');
    const mainContent = document.querySelector('.main_content');
    const footer = document.createElement('footer');
    const githubLink = document.createElement('a');

    footer.textContent = 'Created by FranekDev ';
    githubLink.textContent = 'GitHub';
    githubLink.href = 'https://github.com/FranekDev/todo-list';
    githubLink.setAttribute('target', '_blank');

    footer.appendChild(githubLink);
    mainContent.appendChild(footer);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/assets/header.js":
/*!******************************!*\
  !*** ./src/assets/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/assets/footer.js");


const Header = () => {
    const body = document.querySelector('body');
    const header = document.createElement('header');

    // const content = document.createElement('div');
    // content.classList.add('content');
    const mainContent = document.createElement('main');
    mainContent.classList.add('main_content');

    const p = document.createElement('p');
    p.textContent = 'Todo List';

    
    header.appendChild(p);
    mainContent.appendChild(header);
    const taskContent = document.createElement('div');
    taskContent.classList.add('task_content');
    mainContent.appendChild(taskContent);
    body.appendChild(mainContent);
    // body.appendChild(header);
    // body.appendChild(content);
    (0,_footer__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/assets/localStorage.js":
/*!************************************!*\
  !*** ./src/assets/localStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorage)
/* harmony export */ });
class LocalStorage {

    constructor() {
        // this.project = '';
        // localStorage.clear();
    }

    checkIfProjectExists(project) {
        return localStorage.getItem(project.name);
    }

    saveProject(projectToSave) {
        if(this.checkIfProjectExists(projectToSave) == null) {
        localStorage.setItem(projectToSave.name, JSON.stringify(projectToSave));
        }
        else {
            alert('projekt ' + projectToSave.name + ' juz istanieje');
        }
        // this.project = projectToSave;
    }

    // updateProject(projectToUpdate) {
    //     this.project = projectToUpdate;
    // }

    getProject(project) {
        localStorage.getItem(project.name);
    }

    getProjects() {
        let projects = [];
        for ( var i = 0, len = localStorage.length; i < len; ++i ) {
            let projectTitle = JSON.parse(localStorage.getItem( localStorage.key( i ) ) || {});
            projects.push(projectTitle);
          }
          return projects;
    }

    getTasks(project) {
        let tasks = [];
        let projectData = JSON.parse(localStorage.getItem(project.name));
        // console.log('Project: ', projectData);
        tasks = projectData.tasks;
        // console.log('Tasks: ', tasks);
        return tasks;
    }

    addTask(taskToAdd, project) {
        let projectData = JSON.parse(localStorage.getItem(project.name)) || {};
        if(!projectData.hasOwnProperty('tasks')) {
            projectData.tasks = [];
        }
        projectData.tasks.push(taskToAdd);
        localStorage.setItem(projectData.name, JSON.stringify(projectData));
        console.log(localStorage.getItem(projectData.name));
    }

    updateTasks(tasks, project) {
        // console.log('Tasks to udpate', tasks);
        let projectData = JSON.parse(localStorage.getItem(project.name)) || {};
        // console.log(projectData);
        if(!projectData.hasOwnProperty('tasks')) {
            projectData.tasks = [];
        }
        projectData.tasks = tasks;
        localStorage.setItem(projectData.name, JSON.stringify(projectData));
    }

    removeProject(project) {
        localStorage.removeItem(project.name);
    }


}

/***/ }),

/***/ "./src/assets/mobileMenu.js":
/*!**********************************!*\
  !*** ./src/assets/mobileMenu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const MobileMenu = () => {
    const body = document.querySelector('body');
    
    const burgerMenu = document.createElement('div');
    burgerMenu.classList.add('burger_menu');

    const topLine = document.createElement('div');
    topLine.classList.add('top_line');

    const middleLine = document.createElement('div');
    middleLine.classList.add('middle_line');

    const bottomLine = document.createElement('div');
    bottomLine.classList.add('bottom_line');


    burgerMenu.appendChild(topLine);
    burgerMenu.appendChild(middleLine);
    burgerMenu.appendChild(bottomLine);
    
    body.appendChild(burgerMenu);

    const sidebar = document.querySelector('.sidebar');
    const newTaskForm = document.querySelector('.new_task_form');

    if(window.screen.width <= 600) {
        sidebar.style.display = 'none';
        sidebar.classList.add('sidebar_mobile');
    }
    // else {
        // sidebar.classList.remove('sidebar_mobile');
    // }
    // sidebar.style.display = 'none';

    let showMenu = false;
    burgerMenu.addEventListener('click', () => {
        const mainContent = document.querySelector('.main_content');
        (newTaskForm != null) ? newTaskForm.style.display = 'none' : '';
        if(!showMenu) {
            mainContent.style.animation = 'decreaseOpacity .5s forwards';
            topLine.style.position = 'absolute';
            middleLine.style.position = 'absolute';
            bottomLine.style.position = 'absolute';
            topLine.classList.remove('deactivate');
            middleLine.classList.remove('deactivate');
            bottomLine.classList.remove('deactivate');
            topLine.classList.add('active');
            middleLine.classList.add('active');
            bottomLine.classList.add('active');
            sidebar.style.display = 'flex';
            sidebar.style.animation = 'showSidebar .3s forwards';
            showMenu = true;
        }
        else {
            
        mainContent.style.opacity = '1';
        mainContent.style.animation = 'increaseOpacity .5s forwards';
            topLine.classList.remove('active');
            middleLine.classList.remove('active');
            bottomLine.classList.remove('active');
            topLine.classList.add('deactivate');
            middleLine.classList.add('deactivate');
            bottomLine.classList.add('deactivate');

            setTimeout(() => {
                topLine.style.position = 'static';
                middleLine.style.position = 'static';
                bottomLine.style.position = 'static';
                
                // topLine.style.animation = 'slowlyShow 1s';
                // middleLine.style.animation = 'slowlyShow 1s';
                // bottomLine.style.animation = 'slowlyShow 1s';
            }, 400);

            showMenu = false;
            // sidebar.style.animation = 'hideSidebar .3s forwards';
            sidebar.style.display = 'none';
        }
    });

    
  
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ "./src/assets/sidebar.js":
/*!*******************************!*\
  !*** ./src/assets/sidebar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/assets/Project.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/assets/UI.js");



const Sidebar = () => {
    let ui = new _UI__WEBPACK_IMPORTED_MODULE_1__["default"]();
    // ui.showProject();
    const body = document.querySelector('body');
    const sidebar = document.createElement('aside');
    sidebar.classList.add('sidebar');
    body.appendChild(sidebar);

    const sidebarBackground = document.createElement('div');
    sidebarBackground.classList.add('sidebar_bg');

    const backgorundText = document.createElement('div');
    backgorundText.classList.add('bg_text');
    const textSpan = document.createElement('span');
    textSpan.textContent = 'ToDo';
    backgorundText.appendChild(textSpan);
    
    const nav = document.createElement('nav');
    nav.classList.add('todo_nav');
    

    const dateLinks = document.createElement('ul');
    dateLinks.classList.add('date_links');
    let dateFormats = ['Today', 'This week'];

    dateFormats.forEach(dateFormat => {
        const element = document.createElement('li');
        const link = document.createElement('a');
        link.classList.add('date_link', 'project_namejkl');
        link.textContent = dateFormat;
        element.appendChild(link);
        dateLinks.appendChild(link);
    });

    // const today = document.createElement('a');
    // const thisWeek = document.createElement('a');
    
    // today.textContent = 'Today';
    // thisWeek.textContent = 'This week';

    const projects = document.createElement('div');
    projects.classList.add('projects');

    const projectsDescription = document.createElement('span');
    projectsDescription.textContent = 'Projects';

    projects.appendChild(projectsDescription);

    // nav.appendChild(today);
    // nav.appendChild(thisWeek);
    nav.appendChild(dateLinks);
    nav.appendChild(projects);
    
    sidebarBackground.appendChild(nav);
    sidebarBackground.appendChild(backgorundText);

    sidebar.appendChild(sidebarBackground);

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/assets/task.js":
/*!****************************!*\
  !*** ./src/assets/task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/assets/UI.js");


class Task {

    constructor(title, dueDate) {
        const date = new Date();
        this.title = title;
        this.status = false;
        this.addDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        dueDate = dueDate.split('-');
        this.dueDate = dueDate.reverse().join('/');
        this.ui = new _UI__WEBPACK_IMPORTED_MODULE_0__["default"]();
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

/***/ }),

/***/ "./src/assets/tasks.js":
/*!*****************************!*\
  !*** ./src/assets/tasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/assets/task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/assets/Project.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./src/assets/UI.js");




const Tasks = (project, storage) => {
    const ui = new _UI__WEBPACK_IMPORTED_MODULE_2__["default"]();

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
                let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](name.value, date.value);
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

    const editTaskTitle = () => {
        let tasksElements = document.querySelectorAll('.task');

        tasksElements.forEach((task) => {

            const taskToEdit = task.querySelector('.task_title');
            let secondInfo = task.querySelectorAll('.info')[0];
            
            taskToEdit.addEventListener('click', () => {
                const idOfTask = task.dataset.id;
                let currentTitle = taskToEdit.textContent;
                console.log(idOfTask);
                
                taskToEdit.textContent = '';
                const title = document.createElement('input');
                title.type = 'text';
                    
                title.addEventListener('blur', (e) => {
                    title.style.display = 'none';
                    if(title.value.length > 0) {
                        taskToEdit.textContent += e.target.value;
                        tasks.find((obj, index) => {
                            if(index == idOfTask) {
                                tasks[idOfTask].title = title.value;
                                storage.updateTasks(tasks, project);
                            }
                        });
                    }
                    else {
                        taskToEdit.textContent = currentTitle;
                    }
                });

                secondInfo.insertBefore(title, secondInfo.lastChild);
                title.focus();

            }); 
        });
    };

    const editTaskDueDate = () => {
        let tasksElements = document.querySelectorAll('.task');

        tasksElements.forEach((task) => {

            const taskToEdit = task.querySelector('.date');
            let secondInfo = task.querySelectorAll('.info')[1];

            taskToEdit.addEventListener('click', () => {
                const idOfTask = task.dataset.id;
                let currentDate = taskToEdit.textContent;
                
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
                                    storage.updateTasks(tasks, project);
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
        const inputDate = document.querySelectorAll('.input_date');
        inputDate.forEach(input => { input.style.display = 'none';});
        tasksContent.textContent = '';
        tasks = storage.getTasks(project);
        tasks.forEach((task, index) => {
            ui.showTask(tasksContent, index, task.status, task.title, task.dueDate);
        });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);

/***/ }),

/***/ "./src/assets/todo.js":
/*!****************************!*\
  !*** ./src/assets/todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/assets/UI.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/assets/Project.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/assets/tasks.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/assets/task.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/assets/localStorage.js");






const TODO = () => {


    const ui = new _UI__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const storage = new _localStorage__WEBPACK_IMPORTED_MODULE_4__["default"]();

    let projectToSave = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"]('Main project');
    if(storage.checkIfProjectExists(projectToSave) == null) {
        projectToSave.addDate = new Date(0);
        storage.saveProject(projectToSave);
    }

    let firstProject = storage.getProjects()[0];

    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])(firstProject, storage);
    const projects = document.querySelector('.projects');

    const newProjects = document.createElement('div');
    newProjects.classList.add('new_projects');

    const newProjectInput = document.createElement('input');
    newProjectInput.type = 'text';
    newProjects.appendChild(newProjectInput);

    const newProject = document.createElement('button');
    newProject.textContent = 'new';

    const projectsList = document.createElement('div');
    projectsList.classList.add('projects_list');
    
    let allProjects = document.querySelectorAll('.project_name_container');

    
    const mainTasks = document.querySelector('.task_content');

    const changeDateFormatView = () => {
        const dateLinks = document.querySelectorAll('.date_link');
        
        dateLinks.forEach(dateLink => {
            dateLink.addEventListener('click', () => {
                ui.resetAllProjects();
                ui.resetDateFormats();
                ui.setActiveDateFormat(dateLink);
                // console.log(dateLink.textContent);
            });
        });
    }
    changeDateFormatView();

    const changeProjectView = () => {
        allProjects = document.querySelectorAll('.project_name_container');

        firstProject = storage.getProjects();
        let activeProject = '';
        
        allProjects.forEach((project, index) => {
            let p = project.querySelector('.project');
            p.addEventListener('click', () => {
                ui.resetAllProjects();
                allProjects.forEach(p => ui.resetProject(p));
                ui.resetDateFormats();
                mainTasks.textContent = '';
                ui.setActiveProject(p);
                activeProject = ((firstProject[index] == null) ? firstProject[0] : firstProject[index]);
                (0,_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])(activeProject, storage);
            });

            let remove = project.querySelector('.x_icon');
            remove.addEventListener('click', () => {

                let projects = storage.getProjects().sort((p1, p2) => { 
                    return new Date(p1.addDate) - new Date(p2.addDate);
                });

                if(activeProject.name != projects[index]) {
                    storage.removeProject(projects[index]);
                    ui.resetAllProjects();
                }
                showProjects();
                changeProjectView();
            });
        });
    };
    changeProjectView();

    
    const showProjects = () => {
        let localProjects = storage.getProjects();
        
        localProjects.sort((p1, p2) => { 
            return new Date(p1.addDate) - new Date(p2.addDate);
        });

        projectsList.textContent = '';

        localProjects.forEach((project, index) => {
            const projectNameContainer = document.createElement('div');
            projectNameContainer.classList.add('project_name_container');

            const projectLink = document.createElement('a');
            projectLink.classList.add('project', 'project_name');

            (index === 0) ? projectLink.classList.add('active_project') : '';

            projectLink.textContent = project.name;
            projectNameContainer.appendChild(projectLink);
            ui.showX(projectNameContainer);
            
            projectsList.appendChild(projectNameContainer);
        });

        allProjects = document.querySelectorAll('.project_name_container');
    };

    showProjects();

    const projectHighlight = () => {
        const projectsToHighlight = document.querySelectorAll('.project_name');
        projectsToHighlight.forEach(project => {
            project.addEventListener('click', () => {
                ui.resetAllProjects();
                ui.resetDateFormats();
                ui.setActiveProject(project);
            });
        });
    }


 
    newProject.addEventListener('click', () => {

        const projects = document.querySelectorAll('.project_name_container');
        projects.forEach(project => { ui.resetProject(project);});

        let addedTask = false;
        newProjectInput.style.display = 'block';
        newProject.textContent = 'add';

        if(newProjectInput.value.trim().length > 0) {
            storage.saveProject(new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](newProjectInput.value));
            newProjectInput.value = '';
            addedTask = true;
        }

        hideAddTask(addedTask);
        showProjects();
        changeProjectView();
    });

    const hideAddTask = (addedTask) => {
        if(addedTask) {
            addedTask = false;
            newProject.textContent = 'new';
            newProjectInput.style.display = 'none';
        }
    };
    
    newProjects.appendChild(newProject);

    projects.appendChild(projectsList);
    projects.appendChild(newProjects);
 
    changeProjectView();
    projectHighlight();

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TODO);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/header */ "./src/assets/header.js");
/* harmony import */ var _assets_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sidebar */ "./src/assets/sidebar.js");
/* harmony import */ var _assets_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/todo */ "./src/assets/todo.js");
/* harmony import */ var _assets_mobileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/mobileMenu */ "./src/assets/mobileMenu.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");






(0,_assets_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_assets_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_assets_todo__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_assets_mobileMenu__WEBPACK_IMPORTED_MODULE_3__["default"])();
// Footer();
// Tasks();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQzFCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQ2pCUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQU07QUFDVjtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUMxQk47QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsU0FBUztBQUM3RCw2RkFBNkY7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDRTtBQUNOO0FBQ1k7QUFDbkI7QUFDMUI7QUFDQSwwREFBTTtBQUNOLDJEQUFPO0FBQ1Asd0RBQUk7QUFDSiw4REFBVTtBQUNWO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2Fzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2JpbGVNZW51LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgICAgICB0aGlzLmFkZERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cclxuXHJcbiAgICBhZGRUYXNrID0gKHRhc2tUb0FkZCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrVG9BZGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tzKCkgeyByZXR1cm4gdGhpcy50YXNrczsgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gICAgc2hvd1Rhc2sgPSAodGFza3MsIGlkLCBzdGF0dXMsIHRhc2tUaXRsZSwgZHVlRGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICAoc3RhdHVzID09PSBmYWxzZSkgPyB0YXNrLmNsYXNzTGlzdC5hZGQoJ25vdF9maW5pc2hlZCcpIDogdGFzay5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpO1xyXG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfdGl0bGUnKTtcclxuXHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHJlYWQudHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG4gICAgICAgIHJlYWQuY2hlY2tlZCA9IChzdGF0dXMgPT09IHRydWUpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1haW5JbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcclxuICAgICAgICBtYWluSW5mby5hcHBlbmRDaGlsZChyZWFkKTtcclxuICAgICAgICBtYWluSW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzZWNvbmRhcnlJbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGlja0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHBpY2tEYXRlLnR5cGUgPSAnZGF0ZSc7XHJcbiAgICAgICAgcGlja0RhdGUuY2xhc3NMaXN0LmFkZCgnaW5wdXRfZGF0ZScpO1xyXG5cclxuICAgICAgICBpZihkdWVEYXRlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xyXG4gICAgICAgICAgICBwaWNrRGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZV90YXNrJyk7XHJcbiAgICAgICAgdGhpcy5zaG93VHJhc2hJY29uKHJlbW92ZSk7XHJcblxyXG4gICAgICAgIGRhdGUuYXBwZW5kQ2hpbGQocGlja0RhdGUpO1xyXG4gICAgICAgIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChyZW1vdmUpO1xyXG5cclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKG1haW5JbmZvKTtcclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHNlY29uZGFyeUluZm8pO1xyXG5cclxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvamVjdCA9IChwcm9qZWN0c0FycmF5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX2xpc3QnKTtcclxuICAgICAgICBwcm9qZWN0c0xpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBwcm9qZWN0c0FycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgICAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgaWYoIXByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVfcHJvamVjdCcpKSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBpZihwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlX3Byb2plY3QnKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xyXG5cclxuICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlX3Byb2plY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfcHJvamVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlRGF0ZUZvcm1hdChkYXRlTGluaykge1xyXG4gICAgICAgIGlmKCFkYXRlTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgZGF0ZUxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihkYXRlTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgZGF0ZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXREYXRlRm9ybWF0cygpIHtcclxuICAgICAgICBjb25zdCBkYXRlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZV9saW5rJyk7XHJcbiAgICAgICAgZGF0ZUxpbmtzLmZvckVhY2goZGF0ZUxpbmsgPT4ge1xyXG4gICAgICAgICAgICBpZihkYXRlTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VHJhc2hJY29uKG5vZGUpIHtcclxuICAgICAgICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICAgICAgICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG5cclxuICAgICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjNjc2NzY3Jyk7XHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICAgICAgICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAnZCcsXHJcbiAgICAgICAgICAgICdNNiAxOWEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlY3SDZ2MTJNOCA5aDh2MTBIOFY5bTcuNS01bC0xLTFoLTVsLTEgMUg1djJoMTRWNGgtMy41WicgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICAgICAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gICAgICAgIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbm9kZS5hcHBlbmRDaGlsZChpY29uU3ZnKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93WChub2RlKSB7XHJcbiAgICAgICAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgICAgICAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcclxuXHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzY3Njc2NycpO1xyXG4gICAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNTYgMjU2Jyk7XHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICAgICAgICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3hfaWNvbicpO1xyXG5cclxuICAgICAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICdkJyxcclxuICAgICAgICAgICAgJ00yMDguNDkgMTkxLjUxYTEyIDEyIDAgMCAxLTE3IDE3TDEyOCAxNDVsLTYzLjUxIDYzLjQ5YTEyIDEyIDAgMCAxLTE3LTE3TDExMSAxMjhMNDcuNTEgNjQuNDlhMTIgMTIgMCAwIDEgMTctMTdMMTI4IDExMWw2My41MS02My41MmExMiAxMiAwIDAgMSAxNyAxN0wxNDUgMTI4WicgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gICAgICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICAgICAgICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5vZGUuYXBwZW5kQ2hpbGQoaWNvblN2Zyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgZGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcclxuICAgICAgICByZXR1cm4gZGF0ZS5yZXZlcnNlKCkuam9pbignLycpO1xyXG4gICAgfVxyXG59IiwiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9jb250ZW50Jyk7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgRnJhbmVrRGV2ICc7XHJcbiAgICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gJ0dpdEh1Yic7XHJcbiAgICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0ZyYW5la0Rldi90b2RvLWxpc3QnO1xyXG4gICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHJcbiAgICAvLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvLyBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbl9jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSAnVG9kbyBMaXN0JztcclxuXHJcbiAgICBcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwKTtcclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFza19jb250ZW50Jyk7XHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcclxuICAgIC8vIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIC8vIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICBGb290ZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9qZWN0ID0gJyc7XHJcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZlByb2plY3RFeGlzdHMocHJvamVjdCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0Lm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVQcm9qZWN0KHByb2plY3RUb1NhdmUpIHtcclxuICAgICAgICBpZih0aGlzLmNoZWNrSWZQcm9qZWN0RXhpc3RzKHByb2plY3RUb1NhdmUpID09IG51bGwpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0VG9TYXZlLm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3RUb1NhdmUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdwcm9qZWt0ICcgKyBwcm9qZWN0VG9TYXZlLm5hbWUgKyAnIGp1eiBpc3RhbmllamUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5wcm9qZWN0ID0gcHJvamVjdFRvU2F2ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGVQcm9qZWN0KHByb2plY3RUb1VwZGF0ZSkge1xyXG4gICAgLy8gICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RUb1VwZGF0ZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0Lm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3RzKCkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0cyA9IFtdO1xyXG4gICAgICAgIGZvciAoIHZhciBpID0gMCwgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSA8IGxlbjsgKytpICkge1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggbG9jYWxTdG9yYWdlLmtleSggaSApICkgfHwge30pO1xyXG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RUaXRsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza3MocHJvamVjdCkge1xyXG4gICAgICAgIGxldCB0YXNrcyA9IFtdO1xyXG4gICAgICAgIGxldCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdC5uYW1lKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1Byb2plY3Q6ICcsIHByb2plY3REYXRhKTtcclxuICAgICAgICB0YXNrcyA9IHByb2plY3REYXRhLnRhc2tzO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdUYXNrczogJywgdGFza3MpO1xyXG4gICAgICAgIHJldHVybiB0YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2tUb0FkZCwgcHJvamVjdCkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdC5uYW1lKSkgfHwge307XHJcbiAgICAgICAgaWYoIXByb2plY3REYXRhLmhhc093blByb3BlcnR5KCd0YXNrcycpKSB7XHJcbiAgICAgICAgICAgIHByb2plY3REYXRhLnRhc2tzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2plY3REYXRhLnRhc2tzLnB1c2godGFza1RvQWRkKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0RGF0YS5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3REYXRhLm5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYXNrcyh0YXNrcywgcHJvamVjdCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdUYXNrcyB0byB1ZHBhdGUnLCB0YXNrcyk7XHJcbiAgICAgICAgbGV0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0Lm5hbWUpKSB8fCB7fTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0RGF0YSk7XHJcbiAgICAgICAgaWYoIXByb2plY3REYXRhLmhhc093blByb3BlcnR5KCd0YXNrcycpKSB7XHJcbiAgICAgICAgICAgIHByb2plY3REYXRhLnRhc2tzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2plY3REYXRhLnRhc2tzID0gdGFza3M7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdERhdGEubmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0Lm5hbWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJjb25zdCBNb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIFxyXG4gICAgY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKCdidXJnZXJfbWVudScpO1xyXG5cclxuICAgIGNvbnN0IHRvcExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvcExpbmUuY2xhc3NMaXN0LmFkZCgndG9wX2xpbmUnKTtcclxuXHJcbiAgICBjb25zdCBtaWRkbGVMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtaWRkbGVMaW5lLmNsYXNzTGlzdC5hZGQoJ21pZGRsZV9saW5lJyk7XHJcblxyXG4gICAgY29uc3QgYm90dG9tTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm90dG9tTGluZS5jbGFzc0xpc3QuYWRkKCdib3R0b21fbGluZScpO1xyXG5cclxuXHJcbiAgICBidXJnZXJNZW51LmFwcGVuZENoaWxkKHRvcExpbmUpO1xyXG4gICAgYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChtaWRkbGVMaW5lKTtcclxuICAgIGJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQoYm90dG9tTGluZSk7XHJcbiAgICBcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYnVyZ2VyTWVudSk7XHJcblxyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfdGFza19mb3JtJyk7XHJcblxyXG4gICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA8PSA2MDApIHtcclxuICAgICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX21vYmlsZScpO1xyXG4gICAgfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyX21vYmlsZScpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIGxldCBzaG93TWVudSA9IGZhbHNlO1xyXG4gICAgYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2NvbnRlbnQnKTtcclxuICAgICAgICAobmV3VGFza0Zvcm0gIT0gbnVsbCkgPyBuZXdUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIDogJyc7XHJcbiAgICAgICAgaWYoIXNob3dNZW51KSB7XHJcbiAgICAgICAgICAgIG1haW5Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9ICdkZWNyZWFzZU9wYWNpdHkgLjVzIGZvcndhcmRzJztcclxuICAgICAgICAgICAgdG9wTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIG1pZGRsZUxpbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBib3R0b21MaW5lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgdG9wTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlJyk7XHJcbiAgICAgICAgICAgIG1pZGRsZUxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnZGVhY3RpdmF0ZScpO1xyXG4gICAgICAgICAgICBib3R0b21MaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGUnKTtcclxuICAgICAgICAgICAgdG9wTGluZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbWlkZGxlTGluZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgYm90dG9tTGluZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdzaG93U2lkZWJhciAuM3MgZm9yd2FyZHMnO1xyXG4gICAgICAgICAgICBzaG93TWVudSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBtYWluQ29udGVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIG1haW5Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9ICdpbmNyZWFzZU9wYWNpdHkgLjVzIGZvcndhcmRzJztcclxuICAgICAgICAgICAgdG9wTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbWlkZGxlTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgYm90dG9tTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgdG9wTGluZS5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XHJcbiAgICAgICAgICAgIG1pZGRsZUxpbmUuY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZScpO1xyXG4gICAgICAgICAgICBib3R0b21MaW5lLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9wTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgICAgICAgICAgICAgbWlkZGxlTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyB0b3BMaW5lLnN0eWxlLmFuaW1hdGlvbiA9ICdzbG93bHlTaG93IDFzJztcclxuICAgICAgICAgICAgICAgIC8vIG1pZGRsZUxpbmUuc3R5bGUuYW5pbWF0aW9uID0gJ3Nsb3dseVNob3cgMXMnO1xyXG4gICAgICAgICAgICAgICAgLy8gYm90dG9tTGluZS5zdHlsZS5hbmltYXRpb24gPSAnc2xvd2x5U2hvdyAxcyc7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcblxyXG4gICAgICAgICAgICBzaG93TWVudSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBzaWRlYmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdoaWRlU2lkZWJhciAuM3MgZm9yd2FyZHMnO1xyXG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcbiAgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51OyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCBVSSBmcm9tICcuL1VJJztcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgdWkgPSBuZXcgVUkoKTtcclxuICAgIC8vIHVpLnNob3dQcm9qZWN0KCk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XHJcblxyXG4gICAgY29uc3Qgc2lkZWJhckJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpZGViYXJCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfYmcnKTtcclxuXHJcbiAgICBjb25zdCBiYWNrZ29ydW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFja2dvcnVuZFRleHQuY2xhc3NMaXN0LmFkZCgnYmdfdGV4dCcpO1xyXG4gICAgY29uc3QgdGV4dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9ICdUb0RvJztcclxuICAgIGJhY2tnb3J1bmRUZXh0LmFwcGVuZENoaWxkKHRleHRTcGFuKTtcclxuICAgIFxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgndG9kb19uYXYnKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGRhdGVMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBkYXRlTGlua3MuY2xhc3NMaXN0LmFkZCgnZGF0ZV9saW5rcycpO1xyXG4gICAgbGV0IGRhdGVGb3JtYXRzID0gWydUb2RheScsICdUaGlzIHdlZWsnXTtcclxuXHJcbiAgICBkYXRlRm9ybWF0cy5mb3JFYWNoKGRhdGVGb3JtYXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdkYXRlX2xpbmsnLCAncHJvamVjdF9uYW1lamtsJyk7XHJcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGRhdGVGb3JtYXQ7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBkYXRlTGlua3MuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIC8vIGNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgXHJcbiAgICAvLyB0b2RheS50ZXh0Q29udGVudCA9ICdUb2RheSc7XHJcbiAgICAvLyB0aGlzV2Vlay50ZXh0Q29udGVudCA9ICdUaGlzIHdlZWsnO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBwcm9qZWN0c0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcclxuXHJcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c0Rlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAvLyBuYXYuYXBwZW5kQ2hpbGQodG9kYXkpO1xyXG4gICAgLy8gbmF2LmFwcGVuZENoaWxkKHRoaXNXZWVrKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChkYXRlTGlua3MpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKHByb2plY3RzKTtcclxuICAgIFxyXG4gICAgc2lkZWJhckJhY2tncm91bmQuYXBwZW5kQ2hpbGQobmF2KTtcclxuICAgIHNpZGViYXJCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGJhY2tnb3J1bmRUZXh0KTtcclxuXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJCYWNrZ3JvdW5kKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyIsImltcG9ydCBVSSBmcm9tICcuL1VJJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGREYXRlID0gZGF0ZS5nZXREYXRlKCkgKyAnLycgKyBkYXRlLmdldE1vbnRoKCkgKyAnLycgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgZHVlRGF0ZSA9IGR1ZURhdGUuc3BsaXQoJy0nKTtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlLnJldmVyc2UoKS5qb2luKCcvJyk7XHJcbiAgICAgICAgdGhpcy51aSA9IG5ldyBVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlID0gKCkgPT4geyByZXR1cm4gdGhpcy50aXRsZTsgfVxyXG5cclxuICAgIG1hcmtBc1JlYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUYXNrKHRhc2tzLCBpZCkge1xyXG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKHRoaXMudWkuc2hvd1Rhc2soaWQsIHRoaXMuc3RhdHVzLCB0aGlzLnRpdGxlLCB0aGlzLmR1ZURhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0dXMgPSAoc3RhdHVzVG9TZXQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c1RvU2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldER1ZURhdGUoZGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGRhdGU7XHJcbiAgICB9XHJcblxyXG59OyIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCBVSSBmcm9tICcuL1VJJztcclxuXHJcbmNvbnN0IFRhc2tzID0gKHByb2plY3QsIHN0b3JhZ2UpID0+IHtcclxuICAgIGNvbnN0IHVpID0gbmV3IFVJKCk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrX2NvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluX3Rhc2tzJyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICAgIGxldCB0YXNrcyA9IHN0b3JhZ2UuZ2V0VGFza3MocHJvamVjdCk7XHJcbiAgICAvLyBpZih0YXNrcyA9PSBudWxsKSB7XHJcbiAgICAvLyAgICAgdGFza3MgPSBbXTtcclxuICAgIC8vIH1cclxuICAgIGxldCB0YXNrSWQgPSAxO1xyXG5cclxuICAgIGNvbnN0IHRhc2tzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza3NDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzX2xpc3QnKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza3NDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGRfdGFzaycpO1xyXG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICcrIGFkZCB0YXNrJztcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XHJcblxyXG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ25ld190YXNrX2Zvcm0nKTtcclxuXHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZS50eXBlID0gJ3RleHQnO1xyXG4gICAgbmFtZS5wbGFjZWhvbGRlciA9ICdUYXNrIG5hbWUnO1xyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGF0ZS50eXBlID0gJ2RhdGUnO1xyXG5cclxuICAgIGNvbnN0IHNob3ROZXdUYXNrRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBuZXdUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICBhZGRUYXNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgc2hvdE5ld1Rhc2tGb3JtKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fY29udGVudCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNpZGViYXIuc3R5bGUuYW5pbWF0aW9uID0gJ2RlY3JlYXNlT3BhY2l0eSAuNXMgZm9yd2FyZHMnO1xyXG4gICAgICAgIG1haW5Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9ICdkZWNyZWFzZU9wYWNpdHkgLjVzIGZvcndhcmRzJztcclxuICAgICAgICBuZXdUYXNrRm9ybS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHJcbiAgICAgICAgc2hvd0lucHV0cygpO1xyXG5cclxuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihuYW1lLnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKG5hbWUudmFsdWUsIGRhdGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdC5hZGRUYXNrKHsgaWQ6IHRhc2tJZCsrLCBwYXJhbTogbmV3VGFzayB9KTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuYWRkVGFzayhuZXdUYXNrLCBwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QuZ2V0TmFtZSgpLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XHJcbiAgICAgICAgICAgICAgICAvLyBzdG9yYWdlLnNhdmVQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbHMgJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdC5nZXROYW1lKCkpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICBtYWluQ29udGVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdpbmNyZWFzZU9wYWNpdHkgLjVzIGZvcndhcmRzJztcclxuICAgICAgICAgICAgbWFpbkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gJ2luY3JlYXNlT3BhY2l0eSAuNXMgZm9yd2FyZHMnO1xyXG4gICAgICAgICAgICBuYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIC8vIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGVfbmV3X3Rhc2tfZm9ybScpO1xyXG4gICAgICAgICAgICAvLyBuZXdUYXNrRm9ybS5zdHlsZS5hbmltYXRpb24gPSAnaGlkZVRhc2tGb3JtIC40cyBmb3J3YXJkcyc7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzaG93VGFza3MoKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dJbnB1dHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuXHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZVRhc2tTdGF0dXMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuXHJcbiAgICAgICAgdGFza3NFbGVtZW50cy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjaGVja2JveCA9IHRhc2sucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuXHJcbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkT2ZUYXNrID0gdGFzay5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZVRhc2sgPSB0YXNrcy5maW5kKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09IGlkT2ZUYXNrO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZihzaW5nbGVUYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza3NbaWRPZlRhc2tdLnN0YXR1cyA9ICh0YXNrc1tpZE9mVGFza10uc3RhdHVzID09IGZhbHNlKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UudXBkYXRlVGFza3ModGFza3MsIHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcygpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBlZGl0VGFza1RpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuXHJcbiAgICAgICAgdGFza3NFbGVtZW50cy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrVG9FZGl0ID0gdGFzay5xdWVyeVNlbGVjdG9yKCcudGFza190aXRsZScpO1xyXG4gICAgICAgICAgICBsZXQgc2Vjb25kSW5mbyA9IHRhc2sucXVlcnlTZWxlY3RvckFsbCgnLmluZm8nKVswXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRhc2tUb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZE9mVGFzayA9IHRhc2suZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGl0bGUgPSB0YXNrVG9FZGl0LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWRPZlRhc2spO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0YXNrVG9FZGl0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aXRsZS50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBpZih0aXRsZS52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tUb0VkaXQudGV4dENvbnRlbnQgKz0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzLmZpbmQoKG9iaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID09IGlkT2ZUYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza3NbaWRPZlRhc2tdLnRpdGxlID0gdGl0bGUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS51cGRhdGVUYXNrcyh0YXNrcywgcHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RvRWRpdC50ZXh0Q29udGVudCA9IGN1cnJlbnRUaXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRJbmZvLmluc2VydEJlZm9yZSh0aXRsZSwgc2Vjb25kSW5mby5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZWRpdFRhc2tEdWVEYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuXHJcbiAgICAgICAgdGFza3NFbGVtZW50cy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrVG9FZGl0ID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xyXG4gICAgICAgICAgICBsZXQgc2Vjb25kSW5mbyA9IHRhc2sucXVlcnlTZWxlY3RvckFsbCgnLmluZm8nKVsxXTtcclxuXHJcbiAgICAgICAgICAgIHRhc2tUb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZE9mVGFzayA9IHRhc2suZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IHRhc2tUb0VkaXQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnREYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrVG9FZGl0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBpY2tlci50eXBlID0gJ2RhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVQaWNrZXIudmFsdWUgPSBjdXJyZW50RGF0ZS5zcGxpdCgnLycpLnJldmVyc2UoKS5qb2luKCctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlUGlja2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGVQaWNrZXIudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RvRWRpdC50ZXh0Q29udGVudCA9IGRhdGVQaWNrZXIudmFsdWUuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza3MuZmluZCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID09IGlkT2ZUYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzW2lkT2ZUYXNrXS5kdWVEYXRlID0gdWkuZm9ybWF0RGF0ZShkYXRlUGlja2VyLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS51cGRhdGVUYXNrcyh0YXNrcywgcHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrVG9FZGl0LnRleHRDb250ZW50ID0gdWkuZm9ybWF0RGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRJbmZvLmluc2VydEJlZm9yZShkYXRlUGlja2VyLCBzZWNvbmRJbmZvLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVQaWNrZXIuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuXHJcbiAgICAgICAgdGFza3NFbGVtZW50cy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrVG9EZWxldGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVfdGFzaycpO1xyXG5cclxuICAgICAgICAgICAgdGFza1RvRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWRPZlRhc2sgPSB0YXNrLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgICAgICAgICB0YXNrcy5maW5kKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPT0gaWRPZlRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS51cGRhdGVUYXNrcyh0YXNrcywgcHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICAgICAgfSk7IFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93VGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0X2RhdGUnKTtcclxuICAgICAgICBpbnB1dERhdGUuZm9yRWFjaChpbnB1dCA9PiB7IGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7fSk7XHJcbiAgICAgICAgdGFza3NDb250ZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGFza3MgPSBzdG9yYWdlLmdldFRhc2tzKHByb2plY3QpO1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHVpLnNob3dUYXNrKHRhc2tzQ29udGVudCwgaW5kZXgsIHRhc2suc3RhdHVzLCB0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNoYW5nZVRhc2tTdGF0dXMoKTtcclxuICAgICAgICBlZGl0VGFza1RpdGxlKCk7XHJcbiAgICAgICAgZWRpdFRhc2tEdWVEYXRlKCk7XHJcbiAgICAgICAgZGVsZXRlVGFzaygpO1xyXG4gICAgICAgIHVwZGF0ZUR1ZURhdGUoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBzaG93VGFza3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVEdWVEYXRlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgdGFza3NFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XHJcblxyXG4gICAgICAgIHRhc2tzRWxlbWVudHMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dERhdGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dF9kYXRlJyk7XHJcbiAgICAgICAgICAgIGlucHV0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkT2ZUYXNrID0gdGFzay5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgdGFza3MuZmluZCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID09IGlkT2ZUYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzW2lkT2ZUYXNrXS5kdWVEYXRlID0gdWkuZm9ybWF0RGF0ZShpbnB1dERhdGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnVwZGF0ZVRhc2tzKHRhc2tzLCBwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Rhc2tzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNob3dUYXNrcygpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrczsiLCJpbXBvcnQgVUkgZnJvbSAnLi9VSSc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCBUYXNrcyBmcm9tICcuL3Rhc2tzJztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcclxuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XHJcblxyXG5jb25zdCBUT0RPID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCB1aSA9IG5ldyBVSSgpO1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2UoKTtcclxuXHJcbiAgICBsZXQgcHJvamVjdFRvU2F2ZSA9IG5ldyBQcm9qZWN0KCdNYWluIHByb2plY3QnKTtcclxuICAgIGlmKHN0b3JhZ2UuY2hlY2tJZlByb2plY3RFeGlzdHMocHJvamVjdFRvU2F2ZSkgPT0gbnVsbCkge1xyXG4gICAgICAgIHByb2plY3RUb1NhdmUuYWRkRGF0ZSA9IG5ldyBEYXRlKDApO1xyXG4gICAgICAgIHN0b3JhZ2Uuc2F2ZVByb2plY3QocHJvamVjdFRvU2F2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpcnN0UHJvamVjdCA9IHN0b3JhZ2UuZ2V0UHJvamVjdHMoKVswXTtcclxuXHJcbiAgICBUYXNrcyhmaXJzdFByb2plY3QsIHN0b3JhZ2UpO1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3UHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnbmV3X3Byb2plY3RzJyk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5ld1Byb2plY3RJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgbmV3UHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdElucHV0KTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ25ldyc7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfbGlzdCcpO1xyXG4gICAgXHJcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdF9uYW1lX2NvbnRhaW5lcicpO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgbWFpblRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tfY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZURhdGVGb3JtYXRWaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlX2xpbmsnKTtcclxuICAgICAgICBcclxuICAgICAgICBkYXRlTGlua3MuZm9yRWFjaChkYXRlTGluayA9PiB7XHJcbiAgICAgICAgICAgIGRhdGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdWkucmVzZXRBbGxQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdWkucmVzZXREYXRlRm9ybWF0cygpO1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0QWN0aXZlRGF0ZUZvcm1hdChkYXRlTGluayk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlTGluay50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlRGF0ZUZvcm1hdFZpZXcoKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VQcm9qZWN0VmlldyA9ICgpID0+IHtcclxuICAgICAgICBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0X25hbWVfY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgIGZpcnN0UHJvamVjdCA9IHN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcclxuICAgICAgICBsZXQgYWN0aXZlUHJvamVjdCA9ICcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xyXG4gICAgICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdWkucmVzZXRBbGxQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaChwID0+IHVpLnJlc2V0UHJvamVjdChwKSk7XHJcbiAgICAgICAgICAgICAgICB1aS5yZXNldERhdGVGb3JtYXRzKCk7XHJcbiAgICAgICAgICAgICAgICBtYWluVGFza3MudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgIHVpLnNldEFjdGl2ZVByb2plY3QocCk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQcm9qZWN0ID0gKChmaXJzdFByb2plY3RbaW5kZXhdID09IG51bGwpID8gZmlyc3RQcm9qZWN0WzBdIDogZmlyc3RQcm9qZWN0W2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBUYXNrcyhhY3RpdmVQcm9qZWN0LCBzdG9yYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVtb3ZlID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcueF9pY29uJyk7XHJcbiAgICAgICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdHMgPSBzdG9yYWdlLmdldFByb2plY3RzKCkuc29ydCgocDEsIHAyKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShwMS5hZGREYXRlKSAtIG5ldyBEYXRlKHAyLmFkZERhdGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlUHJvamVjdC5uYW1lICE9IHByb2plY3RzW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2UucmVtb3ZlUHJvamVjdChwcm9qZWN0c1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHVpLnJlc2V0QWxsUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNob3dQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlUHJvamVjdFZpZXcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY2hhbmdlUHJvamVjdFZpZXcoKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbG9jYWxQcm9qZWN0cyA9IHN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFByb2plY3RzLnNvcnQoKHAxLCBwMikgPT4geyBcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHAxLmFkZERhdGUpIC0gbmV3IERhdGUocDIuYWRkRGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHByb2plY3RzTGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgICAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfbmFtZV9jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ3Byb2plY3RfbmFtZScpO1xyXG5cclxuICAgICAgICAgICAgKGluZGV4ID09PSAwKSA/IHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9wcm9qZWN0JykgOiAnJztcclxuXHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XHJcbiAgICAgICAgICAgIHVpLnNob3dYKHByb2plY3ROYW1lQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RfbmFtZV9jb250YWluZXInKTtcclxuICAgIH07XHJcblxyXG4gICAgc2hvd1Byb2plY3RzKCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEhpZ2hsaWdodCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0c1RvSGlnaGxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RfbmFtZScpO1xyXG4gICAgICAgIHByb2plY3RzVG9IaWdobGlnaHQuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0QWxsUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0RGF0ZUZvcm1hdHMoKTtcclxuICAgICAgICAgICAgICAgIHVpLnNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiBcclxuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RfbmFtZV9jb250YWluZXInKTtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4geyB1aS5yZXNldFByb2plY3QocHJvamVjdCk7fSk7XHJcblxyXG4gICAgICAgIGxldCBhZGRlZFRhc2sgPSBmYWxzZTtcclxuICAgICAgICBuZXdQcm9qZWN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICdhZGQnO1xyXG5cclxuICAgICAgICBpZihuZXdQcm9qZWN0SW5wdXQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3RvcmFnZS5zYXZlUHJvamVjdChuZXcgUHJvamVjdChuZXdQcm9qZWN0SW5wdXQudmFsdWUpKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGFkZGVkVGFzayA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoaWRlQWRkVGFzayhhZGRlZFRhc2spO1xyXG4gICAgICAgIHNob3dQcm9qZWN0cygpO1xyXG4gICAgICAgIGNoYW5nZVByb2plY3RWaWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoaWRlQWRkVGFzayA9IChhZGRlZFRhc2spID0+IHtcclxuICAgICAgICBpZihhZGRlZFRhc2spIHtcclxuICAgICAgICAgICAgYWRkZWRUYXNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSAnbmV3JztcclxuICAgICAgICAgICAgbmV3UHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgbmV3UHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcblxyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcclxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3RzKTtcclxuIFxyXG4gICAgY2hhbmdlUHJvamVjdFZpZXcoKTtcclxuICAgIHByb2plY3RIaWdobGlnaHQoKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUT0RPOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2Fzc2V0cy9oZWFkZXInO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL2Fzc2V0cy9zaWRlYmFyJztcclxuaW1wb3J0IFRPRE8gZnJvbSAnLi9hc3NldHMvdG9kbyc7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vYXNzZXRzL21vYmlsZU1lbnUnO1xyXG5pbXBvcnQgJy4vc2Fzcy9tYWluLnNjc3MnO1xyXG5cclxuSGVhZGVyKCk7XHJcblNpZGViYXIoKTtcclxuVE9ETygpO1xyXG5Nb2JpbGVNZW51KCk7XHJcbi8vIEZvb3RlcigpO1xyXG4vLyBUYXNrcygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=