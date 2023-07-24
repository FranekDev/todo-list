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
    }

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

        tasks = projectData.tasks;

        return tasks;
    }

    addTask(taskToAdd, project) {
        let projectData = JSON.parse(localStorage.getItem(project.name)) || {};

        if(!projectData.hasOwnProperty('tasks')) {
            projectData.tasks = [];
        }

        projectData.tasks.push(taskToAdd);
        localStorage.setItem(projectData.name, JSON.stringify(projectData));
    }

    updateTasks(tasks, project) {
        let projectData = JSON.parse(localStorage.getItem(project.name)) || {};
        
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

    let newTaskForm = document.querySelector('.new_task_form');

    burgerMenu.appendChild(topLine);
    burgerMenu.appendChild(middleLine);
    burgerMenu.appendChild(bottomLine);
    
    body.appendChild(burgerMenu);

    const sidebar = document.querySelector('.sidebar');

    if(window.screen.width <= 600) {
        sidebar.style.display = 'none';
        sidebar.classList.add('sidebar_mobile');
    }

    let showMenu = false;
    burgerMenu.addEventListener('click', () => {
        const mainContent = document.querySelector('.main_content');
        newTaskForm = document.querySelector('.new_task_form');
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
            sidebar.style.position = 'fixed';
            if(newTaskForm != null) {
                newTaskForm.style.display = 'none';
            }
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
const Sidebar = () => {
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

    const projects = document.createElement('div');
    projects.classList.add('projects');

    const projectsDescription = document.createElement('span');
    projectsDescription.textContent = 'Projects';

    projects.appendChild(projectsDescription);

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
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/assets/UI.js");



const Tasks = (project, storage) => {
    const ui = new _UI__WEBPACK_IMPORTED_MODULE_1__["default"]();

    const content = document.querySelector('.task_content');
    
    const main = document.createElement('div');
    main.classList.add('main_tasks');
    content.appendChild(main);

    let tasks = storage.getTasks(project);

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
        newTaskForm.style.position = 'fixed';

        showInputs();

        addBtn.addEventListener('click', () => {

            if(name.value.trim().length > 0) {
                let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](name.value, date.value);
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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/assets/localStorage.js");





const TODO = () => {


    const ui = new _UI__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const storage = new _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"]();

    let projectToSave = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"]('Main project');

    if(storage.checkIfProjectExists(projectToSave) == null) {
        projectToSave.addDate = new Date(0);
        storage.saveProject(projectToSave);
    }

    let firstProject = storage.getProjects().sort((p1, p2) => { 
        return new Date(p1.addDate) - new Date(p2.addDate);
    })[0];

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
        // projectsList = document.querySelector('.projects_list');
        // const userProjects = document.querySelector('.user_projects');
        
        dateLinks.forEach(dateLink => {
            dateLink.addEventListener('click', () => {
                console.log(dateLink.textContent);
                ui.resetAllProjects();
                ui.resetDateFormats();
                ui.setActiveDateFormat(dateLink);
                mainTasks.textContent = '';
                // userProjects.textContent = '';
                // TODO(dateLink.textContent, storage);
            });
        });
    }
    changeDateFormatView();

    const changeProjectView = () => {
        allProjects = document.querySelectorAll('.project_name_container');

        firstProject = storage.getProjects().sort((p1, p2) => { 
            return new Date(p1.addDate) - new Date(p2.addDate);
        });
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
    // changeProjectView();

    
    const showProjects = () => {
        let localProjects = storage.getProjects();
        
        localProjects.sort((p1, p2) => { 
            return new Date(p1.addDate) - new Date(p2.addDate);
        });

        projectsList.textContent = '';

        // const userProjects = document.createElement('div');
        // userProjects.classList.add('user_projects');

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
            // userProjects.appendChild(projectNameContainer);
        });
        // projectsList.appendChild(userProjects);

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
        projects.forEach(project => { ui.resetProject(project); });

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQzFCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQ2pCUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQU07QUFDVjtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUMxQk47QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsU0FBUztBQUM3RCw2RkFBNkY7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ3JGekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDdEI7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkNBQUU7QUFDeEI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQzBCO0FBQ0o7QUFDdEI7QUFDQTtBQUNBLG1CQUFtQiwyQ0FBRTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw2Q0FBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsOEJBQThCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelFFO0FBQ1U7QUFDSjtBQUNjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJDQUFFO0FBQ3JCLHdCQUF3QixxREFBWTtBQUNwQztBQUNBLDRCQUE0QixnREFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSSxrREFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQUs7QUFDckIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywyQkFBMkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdEQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7O1VDM0xuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNFO0FBQ047QUFDWTtBQUNuQjtBQUMxQjtBQUNBLDBEQUFNO0FBQ04sMkRBQU87QUFDUCx3REFBSTtBQUNKLDhEQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2Fzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2JpbGVNZW51LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgICAgICB0aGlzLmFkZERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cclxuXHJcbiAgICBhZGRUYXNrID0gKHRhc2tUb0FkZCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrVG9BZGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tzKCkgeyByZXR1cm4gdGhpcy50YXNrczsgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gICAgc2hvd1Rhc2sgPSAodGFza3MsIGlkLCBzdGF0dXMsIHRhc2tUaXRsZSwgZHVlRGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICAoc3RhdHVzID09PSBmYWxzZSkgPyB0YXNrLmNsYXNzTGlzdC5hZGQoJ25vdF9maW5pc2hlZCcpIDogdGFzay5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpO1xyXG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfdGl0bGUnKTtcclxuXHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHJlYWQudHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG4gICAgICAgIHJlYWQuY2hlY2tlZCA9IChzdGF0dXMgPT09IHRydWUpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1haW5JbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcclxuICAgICAgICBtYWluSW5mby5hcHBlbmRDaGlsZChyZWFkKTtcclxuICAgICAgICBtYWluSW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzZWNvbmRhcnlJbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGlja0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHBpY2tEYXRlLnR5cGUgPSAnZGF0ZSc7XHJcbiAgICAgICAgcGlja0RhdGUuY2xhc3NMaXN0LmFkZCgnaW5wdXRfZGF0ZScpO1xyXG5cclxuICAgICAgICBpZihkdWVEYXRlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xyXG4gICAgICAgICAgICBwaWNrRGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZV90YXNrJyk7XHJcbiAgICAgICAgdGhpcy5zaG93VHJhc2hJY29uKHJlbW92ZSk7XHJcblxyXG4gICAgICAgIGRhdGUuYXBwZW5kQ2hpbGQocGlja0RhdGUpO1xyXG4gICAgICAgIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChyZW1vdmUpO1xyXG5cclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKG1haW5JbmZvKTtcclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHNlY29uZGFyeUluZm8pO1xyXG5cclxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvamVjdCA9IChwcm9qZWN0c0FycmF5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX2xpc3QnKTtcclxuICAgICAgICBwcm9qZWN0c0xpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBwcm9qZWN0c0FycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgICAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgaWYoIXByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVfcHJvamVjdCcpKSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBpZihwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlX3Byb2plY3QnKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xyXG5cclxuICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlX3Byb2plY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfcHJvamVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlRGF0ZUZvcm1hdChkYXRlTGluaykge1xyXG4gICAgICAgIGlmKCFkYXRlTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgZGF0ZUxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihkYXRlTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgZGF0ZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXREYXRlRm9ybWF0cygpIHtcclxuICAgICAgICBjb25zdCBkYXRlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZV9saW5rJyk7XHJcbiAgICAgICAgZGF0ZUxpbmtzLmZvckVhY2goZGF0ZUxpbmsgPT4ge1xyXG4gICAgICAgICAgICBpZihkYXRlTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VHJhc2hJY29uKG5vZGUpIHtcclxuICAgICAgICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICAgICAgICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG5cclxuICAgICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjNjc2NzY3Jyk7XHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICAgICAgICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAnZCcsXHJcbiAgICAgICAgICAgICdNNiAxOWEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlY3SDZ2MTJNOCA5aDh2MTBIOFY5bTcuNS01bC0xLTFoLTVsLTEgMUg1djJoMTRWNGgtMy41WicgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICAgICAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gICAgICAgIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbm9kZS5hcHBlbmRDaGlsZChpY29uU3ZnKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93WChub2RlKSB7XHJcbiAgICAgICAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgICAgICAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcclxuXHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzY3Njc2NycpO1xyXG4gICAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNTYgMjU2Jyk7XHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICAgICAgICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3hfaWNvbicpO1xyXG5cclxuICAgICAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICdkJyxcclxuICAgICAgICAgICAgJ00yMDguNDkgMTkxLjUxYTEyIDEyIDAgMCAxLTE3IDE3TDEyOCAxNDVsLTYzLjUxIDYzLjQ5YTEyIDEyIDAgMCAxLTE3LTE3TDExMSAxMjhMNDcuNTEgNjQuNDlhMTIgMTIgMCAwIDEgMTctMTdMMTI4IDExMWw2My41MS02My41MmExMiAxMiAwIDAgMSAxNyAxN0wxNDUgMTI4WicgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gICAgICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICAgICAgICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5vZGUuYXBwZW5kQ2hpbGQoaWNvblN2Zyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgZGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcclxuICAgICAgICByZXR1cm4gZGF0ZS5yZXZlcnNlKCkuam9pbignLycpO1xyXG4gICAgfVxyXG59IiwiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9jb250ZW50Jyk7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgRnJhbmVrRGV2ICc7XHJcbiAgICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gJ0dpdEh1Yic7XHJcbiAgICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0ZyYW5la0Rldi90b2RvLWxpc3QnO1xyXG4gICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHJcbiAgICAvLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvLyBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbl9jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSAnVG9kbyBMaXN0JztcclxuXHJcbiAgICBcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwKTtcclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFza19jb250ZW50Jyk7XHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcclxuICAgIC8vIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIC8vIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICBGb290ZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU3RvcmFnZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZlByb2plY3RFeGlzdHMocHJvamVjdCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0Lm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVQcm9qZWN0KHByb2plY3RUb1NhdmUpIHtcclxuICAgICAgICBpZih0aGlzLmNoZWNrSWZQcm9qZWN0RXhpc3RzKHByb2plY3RUb1NhdmUpID09IG51bGwpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdFRvU2F2ZS5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0VG9TYXZlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgncHJvamVrdCAnICsgcHJvamVjdFRvU2F2ZS5uYW1lICsgJyBqdXogaXN0YW5pZWplJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdHMoKSB7XHJcbiAgICAgICAgbGV0IHByb2plY3RzID0gW107XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBpID0gMCwgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSA8IGxlbjsgKytpICkge1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggbG9jYWxTdG9yYWdlLmtleSggaSApICkgfHwge30pO1xyXG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RUaXRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza3MocHJvamVjdCkge1xyXG4gICAgICAgIGxldCB0YXNrcyA9IFtdO1xyXG4gICAgICAgIGxldCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdC5uYW1lKSk7XHJcblxyXG4gICAgICAgIHRhc2tzID0gcHJvamVjdERhdGEudGFza3M7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2tUb0FkZCwgcHJvamVjdCkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdC5uYW1lKSkgfHwge307XHJcblxyXG4gICAgICAgIGlmKCFwcm9qZWN0RGF0YS5oYXNPd25Qcm9wZXJ0eSgndGFza3MnKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0RGF0YS50YXNrcyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvamVjdERhdGEudGFza3MucHVzaCh0YXNrVG9BZGQpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3REYXRhLm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFza3ModGFza3MsIHByb2plY3QpIHtcclxuICAgICAgICBsZXQgcHJvamVjdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QubmFtZSkpIHx8IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFwcm9qZWN0RGF0YS5oYXNPd25Qcm9wZXJ0eSgndGFza3MnKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0RGF0YS50YXNrcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9qZWN0RGF0YS50YXNrcyA9IHRhc2tzO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0RGF0YS5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3QubmFtZSk7XHJcbiAgICB9XHJcblxyXG59IiwiY29uc3QgTW9iaWxlTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyX21lbnUnKTtcclxuXHJcbiAgICBjb25zdCB0b3BMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b3BMaW5lLmNsYXNzTGlzdC5hZGQoJ3RvcF9saW5lJyk7XHJcblxyXG4gICAgY29uc3QgbWlkZGxlTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWlkZGxlTGluZS5jbGFzc0xpc3QuYWRkKCdtaWRkbGVfbGluZScpO1xyXG5cclxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvdHRvbUxpbmUuY2xhc3NMaXN0LmFkZCgnYm90dG9tX2xpbmUnKTtcclxuXHJcbiAgICBsZXQgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3X3Rhc2tfZm9ybScpO1xyXG5cclxuICAgIGJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQodG9wTGluZSk7XHJcbiAgICBidXJnZXJNZW51LmFwcGVuZENoaWxkKG1pZGRsZUxpbmUpO1xyXG4gICAgYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChib3R0b21MaW5lKTtcclxuICAgIFxyXG4gICAgYm9keS5hcHBlbmRDaGlsZChidXJnZXJNZW51KTtcclxuXHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuXHJcbiAgICBpZih3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDYwMCkge1xyXG4gICAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfbW9iaWxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNob3dNZW51ID0gZmFsc2U7XHJcbiAgICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fY29udGVudCcpO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld190YXNrX2Zvcm0nKTtcclxuICAgICAgICAobmV3VGFza0Zvcm0gIT0gbnVsbCkgPyBuZXdUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIDogJyc7XHJcbiAgICAgICAgaWYoIXNob3dNZW51KSB7XHJcbiAgICAgICAgICAgIG1haW5Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9ICdkZWNyZWFzZU9wYWNpdHkgLjVzIGZvcndhcmRzJztcclxuICAgICAgICAgICAgdG9wTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIG1pZGRsZUxpbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBib3R0b21MaW5lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgdG9wTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlJyk7XHJcbiAgICAgICAgICAgIG1pZGRsZUxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnZGVhY3RpdmF0ZScpO1xyXG4gICAgICAgICAgICBib3R0b21MaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGUnKTtcclxuICAgICAgICAgICAgdG9wTGluZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbWlkZGxlTGluZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgYm90dG9tTGluZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdzaG93U2lkZWJhciAuM3MgZm9yd2FyZHMnO1xyXG4gICAgICAgICAgICBzaG93TWVudSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgICAgICBpZihuZXdUYXNrRm9ybSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBtYWluQ29udGVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIG1haW5Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9ICdpbmNyZWFzZU9wYWNpdHkgLjVzIGZvcndhcmRzJztcclxuICAgICAgICAgICAgdG9wTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbWlkZGxlTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgYm90dG9tTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgdG9wTGluZS5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XHJcbiAgICAgICAgICAgIG1pZGRsZUxpbmUuY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZScpO1xyXG4gICAgICAgICAgICBib3R0b21MaW5lLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9wTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgICAgICAgICAgICAgbWlkZGxlTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyB0b3BMaW5lLnN0eWxlLmFuaW1hdGlvbiA9ICdzbG93bHlTaG93IDFzJztcclxuICAgICAgICAgICAgICAgIC8vIG1pZGRsZUxpbmUuc3R5bGUuYW5pbWF0aW9uID0gJ3Nsb3dseVNob3cgMXMnO1xyXG4gICAgICAgICAgICAgICAgLy8gYm90dG9tTGluZS5zdHlsZS5hbmltYXRpb24gPSAnc2xvd2x5U2hvdyAxcyc7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcblxyXG4gICAgICAgICAgICBzaG93TWVudSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBzaWRlYmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdoaWRlU2lkZWJhciAuM3MgZm9yd2FyZHMnO1xyXG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcbiAgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51OyIsImNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XHJcblxyXG4gICAgY29uc3Qgc2lkZWJhckJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpZGViYXJCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfYmcnKTtcclxuXHJcbiAgICBjb25zdCBiYWNrZ29ydW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFja2dvcnVuZFRleHQuY2xhc3NMaXN0LmFkZCgnYmdfdGV4dCcpO1xyXG4gICAgY29uc3QgdGV4dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9ICdUb0RvJztcclxuICAgIGJhY2tnb3J1bmRUZXh0LmFwcGVuZENoaWxkKHRleHRTcGFuKTtcclxuICAgIFxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgndG9kb19uYXYnKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGRhdGVMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBkYXRlTGlua3MuY2xhc3NMaXN0LmFkZCgnZGF0ZV9saW5rcycpO1xyXG4gICAgbGV0IGRhdGVGb3JtYXRzID0gWydUb2RheScsICdUaGlzIHdlZWsnXTtcclxuXHJcbiAgICBkYXRlRm9ybWF0cy5mb3JFYWNoKGRhdGVGb3JtYXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdkYXRlX2xpbmsnLCAncHJvamVjdF9uYW1lamtsJyk7XHJcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGRhdGVGb3JtYXQ7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBkYXRlTGlua3MuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0c0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcHJvamVjdHNEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XHJcblxyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNEZXNjcmlwdGlvbik7XHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGRhdGVMaW5rcyk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xyXG4gICAgXHJcbiAgICBzaWRlYmFyQmFja2dyb3VuZC5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgc2lkZWJhckJhY2tncm91bmQuYXBwZW5kQ2hpbGQoYmFja2dvcnVuZFRleHQpO1xyXG5cclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckJhY2tncm91bmQpO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7IiwiaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZERhdGUgPSBkYXRlLmdldERhdGUoKSArICcvJyArIGRhdGUuZ2V0TW9udGgoKSArICcvJyArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBkdWVEYXRlID0gZHVlRGF0ZS5zcGxpdCgnLScpO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUucmV2ZXJzZSgpLmpvaW4oJy8nKTtcclxuICAgICAgICB0aGlzLnVpID0gbmV3IFVJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUgPSAoKSA9PiB7IHJldHVybiB0aGlzLnRpdGxlOyB9XHJcblxyXG4gICAgbWFya0FzUmVhZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Rhc2sodGFza3MsIGlkKSB7XHJcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQodGhpcy51aS5zaG93VGFzayhpZCwgdGhpcy5zdGF0dXMsIHRoaXMudGl0bGUsIHRoaXMuZHVlRGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1cyA9IChzdGF0dXNUb1NldCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzVG9TZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVlRGF0ZShkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZGF0ZTtcclxuICAgIH1cclxuXHJcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcclxuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5cclxuY29uc3QgVGFza3MgPSAocHJvamVjdCwgc3RvcmFnZSkgPT4ge1xyXG4gICAgY29uc3QgdWkgPSBuZXcgVUkoKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tfY29udGVudCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW5fdGFza3MnKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgbGV0IHRhc2tzID0gc3RvcmFnZS5nZXRUYXNrcyhwcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCB0YXNrc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tzQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YXNrc19saXN0Jyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tzQ29udGVudCk7XHJcblxyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkX3Rhc2snKTtcclxuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnKyBhZGQgdGFzayc7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG5cclxuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCduZXdfdGFza19mb3JtJyk7XHJcblxyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWUudHlwZSA9ICd0ZXh0JztcclxuICAgIG5hbWUucGxhY2Vob2xkZXIgPSAnVGFzayBuYW1lJztcclxuXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGUudHlwZSA9ICdkYXRlJztcclxuXHJcbiAgICBjb25zdCBzaG90TmV3VGFza0Zvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbmV3VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgYWRkVGFzaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHNob3ROZXdUYXNrRm9ybSgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2NvbnRlbnQnKTtcclxuICAgICAgICBcclxuICAgICAgICBzaWRlYmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdkZWNyZWFzZU9wYWNpdHkgLjVzIGZvcndhcmRzJztcclxuICAgICAgICBtYWluQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSAnZGVjcmVhc2VPcGFjaXR5IC41cyBmb3J3YXJkcyc7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBuZXdUYXNrRm9ybS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcblxyXG4gICAgICAgIHNob3dJbnB1dHMoKTtcclxuXHJcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYobmFtZS52YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhuYW1lLnZhbHVlLCBkYXRlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuYWRkVGFzayhuZXdUYXNrLCBwcm9qZWN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICBtYWluQ29udGVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdpbmNyZWFzZU9wYWNpdHkgLjVzIGZvcndhcmRzJztcclxuICAgICAgICAgICAgbWFpbkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gJ2luY3JlYXNlT3BhY2l0eSAuNXMgZm9yd2FyZHMnO1xyXG4gICAgICAgICAgICBuYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIC8vIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGVfbmV3X3Rhc2tfZm9ybScpO1xyXG4gICAgICAgICAgICAvLyBuZXdUYXNrRm9ybS5zdHlsZS5hbmltYXRpb24gPSAnaGlkZVRhc2tGb3JtIC40cyBmb3J3YXJkcyc7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzaG93VGFza3MoKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dJbnB1dHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuXHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZVRhc2tTdGF0dXMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuXHJcbiAgICAgICAgdGFza3NFbGVtZW50cy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjaGVja2JveCA9IHRhc2sucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuXHJcbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkT2ZUYXNrID0gdGFzay5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZVRhc2sgPSB0YXNrcy5maW5kKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09IGlkT2ZUYXNrO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZihzaW5nbGVUYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza3NbaWRPZlRhc2tdLnN0YXR1cyA9ICh0YXNrc1tpZE9mVGFza10uc3RhdHVzID09IGZhbHNlKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UudXBkYXRlVGFza3ModGFza3MsIHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcygpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBlZGl0VGFza1RpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuXHJcbiAgICAgICAgdGFza3NFbGVtZW50cy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrX3RpdGxlJyk7XHJcbiAgICAgICAgICAgIGxldCBzZWNvbmRJbmZvID0gdGFzay5xdWVyeVNlbGVjdG9yQWxsKCcuaW5mbycpWzBdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGFza1RvRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tTdGF0dXMgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZE9mVGFzayA9IHRhc2suZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaXRsZSA9IHRhc2tUb0VkaXQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHRhc2tTdGF0dXMuY2hlY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tUb0VkaXQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZS52YWx1ZSA9IGN1cnJlbnRUaXRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRpdGxlLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tUb0VkaXQudGV4dENvbnRlbnQgKz0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrcy5maW5kKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPT0gaWRPZlRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza3NbaWRPZlRhc2tdLnRpdGxlID0gdGl0bGUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2UudXBkYXRlVGFza3ModGFza3MsIHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RvRWRpdC50ZXh0Q29udGVudCA9IGN1cnJlbnRUaXRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZEluZm8uaW5zZXJ0QmVmb3JlKHRpdGxlLCBzZWNvbmRJbmZvLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZWRpdFRhc2tEdWVEYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuXHJcbiAgICAgICAgdGFza3NFbGVtZW50cy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrVG9FZGl0ID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xyXG4gICAgICAgICAgICBsZXQgc2Vjb25kSW5mbyA9IHRhc2sucXVlcnlTZWxlY3RvckFsbCgnLmluZm8nKVsxXTtcclxuXHJcbiAgICAgICAgICAgIHRhc2tUb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tTdGF0dXMgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZE9mVGFzayA9IHRhc2suZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IHRhc2tUb0VkaXQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHRhc2tTdGF0dXMuY2hlY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnREYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RvRWRpdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVBpY2tlci50eXBlID0gJ2RhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlUGlja2VyLnZhbHVlID0gY3VycmVudERhdGUuc3BsaXQoJy8nKS5yZXZlcnNlKCkuam9pbignLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVBpY2tlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0ZVBpY2tlci52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RvRWRpdC50ZXh0Q29udGVudCA9IGRhdGVQaWNrZXIudmFsdWUuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzLmZpbmQoKG9iaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPT0gaWRPZlRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzW2lkT2ZUYXNrXS5kdWVEYXRlID0gdWkuZm9ybWF0RGF0ZShkYXRlUGlja2VyLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2UudXBkYXRlVGFza3ModGFza3MsIHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrVG9FZGl0LnRleHRDb250ZW50ID0gdWkuZm9ybWF0RGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kSW5mby5pbnNlcnRCZWZvcmUoZGF0ZVBpY2tlciwgc2Vjb25kSW5mby5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVBpY2tlci5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuXHJcbiAgICAgICAgdGFza3NFbGVtZW50cy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrVG9EZWxldGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVfdGFzaycpO1xyXG5cclxuICAgICAgICAgICAgdGFza1RvRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWRPZlRhc2sgPSB0YXNrLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgICAgICAgICB0YXNrcy5maW5kKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPT0gaWRPZlRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS51cGRhdGVUYXNrcyh0YXNrcywgcHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICAgICAgfSk7IFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93VGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0X2RhdGUnKTtcclxuICAgICAgICBpbnB1dERhdGUuZm9yRWFjaChpbnB1dCA9PiB7IGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7fSk7XHJcbiAgICAgICAgdGFza3NDb250ZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGFza3MgPSBzdG9yYWdlLmdldFRhc2tzKHByb2plY3QpO1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHVpLnNob3dUYXNrKHRhc2tzQ29udGVudCwgaW5kZXgsIHRhc2suc3RhdHVzLCB0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNoYW5nZVRhc2tTdGF0dXMoKTtcclxuICAgICAgICBlZGl0VGFza1RpdGxlKCk7XHJcbiAgICAgICAgZWRpdFRhc2tEdWVEYXRlKCk7XHJcbiAgICAgICAgZGVsZXRlVGFzaygpO1xyXG4gICAgICAgIHVwZGF0ZUR1ZURhdGUoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBzaG93VGFza3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVEdWVEYXRlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgdGFza3NFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XHJcblxyXG4gICAgICAgIHRhc2tzRWxlbWVudHMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dERhdGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dF9kYXRlJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbnB1dERhdGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZE9mVGFzayA9IHRhc2suZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgICAgIHRhc2tzLmZpbmQoKG9iaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA9PSBpZE9mVGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrc1tpZE9mVGFza10uZHVlRGF0ZSA9IHVpLmZvcm1hdERhdGUoaW5wdXREYXRlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS51cGRhdGVUYXNrcyh0YXNrcywgcHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUYXNrcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzaG93VGFza3MoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza3M7IiwiaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG5pbXBvcnQgVGFza3MgZnJvbSAnLi90YXNrcyc7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2UgZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuY29uc3QgVE9ETyA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgdWkgPSBuZXcgVUkoKTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlKCk7XHJcblxyXG4gICAgbGV0IHByb2plY3RUb1NhdmUgPSBuZXcgUHJvamVjdCgnTWFpbiBwcm9qZWN0Jyk7XHJcblxyXG4gICAgaWYoc3RvcmFnZS5jaGVja0lmUHJvamVjdEV4aXN0cyhwcm9qZWN0VG9TYXZlKSA9PSBudWxsKSB7XHJcbiAgICAgICAgcHJvamVjdFRvU2F2ZS5hZGREYXRlID0gbmV3IERhdGUoMCk7XHJcbiAgICAgICAgc3RvcmFnZS5zYXZlUHJvamVjdChwcm9qZWN0VG9TYXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmlyc3RQcm9qZWN0ID0gc3RvcmFnZS5nZXRQcm9qZWN0cygpLnNvcnQoKHAxLCBwMikgPT4geyBcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUocDEuYWRkRGF0ZSkgLSBuZXcgRGF0ZShwMi5hZGREYXRlKTtcclxuICAgIH0pWzBdO1xyXG5cclxuICAgIFRhc2tzKGZpcnN0UHJvamVjdCwgc3RvcmFnZSk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3UHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnbmV3X3Byb2plY3RzJyk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5ld1Byb2plY3RJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgbmV3UHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdElucHV0KTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ25ldyc7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfbGlzdCcpO1xyXG4gICAgXHJcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdF9uYW1lX2NvbnRhaW5lcicpO1xyXG4gICAgXHJcbiAgICBjb25zdCBtYWluVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza19jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlRGF0ZUZvcm1hdFZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVfbGluaycpO1xyXG4gICAgICAgIC8vIHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19saXN0Jyk7XHJcbiAgICAgICAgLy8gY29uc3QgdXNlclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJfcHJvamVjdHMnKTtcclxuICAgICAgICBcclxuICAgICAgICBkYXRlTGlua3MuZm9yRWFjaChkYXRlTGluayA9PiB7XHJcbiAgICAgICAgICAgIGRhdGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0ZUxpbmsudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgdWkucmVzZXRBbGxQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdWkucmVzZXREYXRlRm9ybWF0cygpO1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0QWN0aXZlRGF0ZUZvcm1hdChkYXRlTGluayk7XHJcbiAgICAgICAgICAgICAgICBtYWluVGFza3MudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgIC8vIHVzZXJQcm9qZWN0cy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhkYXRlTGluay50ZXh0Q29udGVudCwgc3RvcmFnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlRGF0ZUZvcm1hdFZpZXcoKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VQcm9qZWN0VmlldyA9ICgpID0+IHtcclxuICAgICAgICBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0X25hbWVfY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgIGZpcnN0UHJvamVjdCA9IHN0b3JhZ2UuZ2V0UHJvamVjdHMoKS5zb3J0KChwMSwgcDIpID0+IHsgXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShwMS5hZGREYXRlKSAtIG5ldyBEYXRlKHAyLmFkZERhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHAgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1aS5yZXNldEFsbFByb2plY3RzKCk7XHJcbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHAgPT4gdWkucmVzZXRQcm9qZWN0KHApKTtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0RGF0ZUZvcm1hdHMoKTtcclxuICAgICAgICAgICAgICAgIG1haW5UYXNrcy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0QWN0aXZlUHJvamVjdChwKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVByb2plY3QgPSAoKGZpcnN0UHJvamVjdFtpbmRleF0gPT0gbnVsbCkgPyBmaXJzdFByb2plY3RbMF0gOiBmaXJzdFByb2plY3RbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIFRhc2tzKGFjdGl2ZVByb2plY3QsIHN0b3JhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZW1vdmUgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy54X2ljb24nKTtcclxuICAgICAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0cyA9IHN0b3JhZ2UuZ2V0UHJvamVjdHMoKS5zb3J0KChwMSwgcDIpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHAxLmFkZERhdGUpIC0gbmV3IERhdGUocDIuYWRkRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihhY3RpdmVQcm9qZWN0Lm5hbWUgIT0gcHJvamVjdHNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5yZW1vdmVQcm9qZWN0KHByb2plY3RzW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdWkucmVzZXRBbGxQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2hvd1Byb2plY3RzKCk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQcm9qZWN0VmlldygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyBjaGFuZ2VQcm9qZWN0VmlldygpO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBsb2NhbFByb2plY3RzID0gc3RvcmFnZS5nZXRQcm9qZWN0cygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxvY2FsUHJvamVjdHMuc29ydCgocDEsIHAyKSA9PiB7IFxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUocDEuYWRkRGF0ZSkgLSBuZXcgRGF0ZShwMi5hZGREYXRlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHJvamVjdHNMaXN0LnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHVzZXJQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIC8vIHVzZXJQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCd1c2VyX3Byb2plY3RzJyk7XHJcblxyXG4gICAgICAgIGxvY2FsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgcHJvamVjdE5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdF9uYW1lX2NvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnLCAncHJvamVjdF9uYW1lJyk7XHJcblxyXG4gICAgICAgICAgICAoaW5kZXggPT09IDApID8gcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3Byb2plY3QnKSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKTtcclxuICAgICAgICAgICAgdWkuc2hvd1gocHJvamVjdE5hbWVDb250YWluZXIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgLy8gdXNlclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3ROYW1lQ29udGFpbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQodXNlclByb2plY3RzKTtcclxuXHJcbiAgICAgICAgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdF9uYW1lX2NvbnRhaW5lcicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzaG93UHJvamVjdHMoKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0SGlnaGxpZ2h0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzVG9IaWdobGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdF9uYW1lJyk7XHJcbiAgICAgICAgcHJvamVjdHNUb0hpZ2hsaWdodC5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdWkucmVzZXRBbGxQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdWkucmVzZXREYXRlRm9ybWF0cygpO1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuIFxyXG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdF9uYW1lX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7IHVpLnJlc2V0UHJvamVjdChwcm9qZWN0KTsgfSk7XHJcblxyXG4gICAgICAgIGxldCBhZGRlZFRhc2sgPSBmYWxzZTtcclxuICAgICAgICBuZXdQcm9qZWN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICdhZGQnO1xyXG5cclxuICAgICAgICBpZihuZXdQcm9qZWN0SW5wdXQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3RvcmFnZS5zYXZlUHJvamVjdChuZXcgUHJvamVjdChuZXdQcm9qZWN0SW5wdXQudmFsdWUpKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGFkZGVkVGFzayA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoaWRlQWRkVGFzayhhZGRlZFRhc2spO1xyXG4gICAgICAgIHNob3dQcm9qZWN0cygpO1xyXG4gICAgICAgIGNoYW5nZVByb2plY3RWaWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoaWRlQWRkVGFzayA9IChhZGRlZFRhc2spID0+IHtcclxuICAgICAgICBpZihhZGRlZFRhc2spIHtcclxuICAgICAgICAgICAgYWRkZWRUYXNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSAnbmV3JztcclxuICAgICAgICAgICAgbmV3UHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgbmV3UHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcblxyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcclxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3RzKTtcclxuIFxyXG4gICAgY2hhbmdlUHJvamVjdFZpZXcoKTtcclxuICAgIHByb2plY3RIaWdobGlnaHQoKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUT0RPOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2Fzc2V0cy9oZWFkZXInO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL2Fzc2V0cy9zaWRlYmFyJztcclxuaW1wb3J0IFRPRE8gZnJvbSAnLi9hc3NldHMvdG9kbyc7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vYXNzZXRzL21vYmlsZU1lbnUnO1xyXG5pbXBvcnQgJy4vc2Fzcy9tYWluLnNjc3MnO1xyXG5cclxuSGVhZGVyKCk7XHJcblNpZGViYXIoKTtcclxuVE9ETygpO1xyXG5Nb2JpbGVNZW51KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9