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
        if(dueDate == '') {
            this.showCalendarIcon(date);
        }
        else {
        date.textContent = dueDate;
        }

        const pickDate = document.createElement('input');
        pickDate.type = 'date';

        const remove = document.createElement('div');
        remove.classList.add('delete_task');
        // remove.textContent = 'Del';
        this.showTrashIcon(remove);

        secondaryInfo.appendChild(date);
        secondaryInfo.appendChild(remove);

        task.appendChild(mainInfo);
        task.appendChild(secondaryInfo);

        tasks.appendChild(task);
        // return task;
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
        // console.log(iconSvg);

        return node.appendChild(iconSvg);
    }

    showCalendarIcon(node) {
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        iconSvg.setAttribute('fill', '#676767');
        iconSvg.setAttribute('viewBox', '0 0 24 24');
        iconSvg.setAttribute('stroke', '');
        iconSvg.classList.add('calendar_icon');

        iconPath.setAttribute(
            'd',
            'M12 12h5v5h-5v-5m7-9h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5h14M5 19V9h14v10H5Z' 
        );
        iconPath.setAttribute('stroke-linecap', 'round');
        iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('stroke-width', '0');

        iconSvg.appendChild(iconPath);
        // console.log(iconSvg);

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
        // console.log(iconSvg);

        return node.appendChild(iconSvg);
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
        
        (newTaskForm != null) ? newTaskForm.style.display = 'none' : '';
        if(!showMenu) {
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

    // console.log('Active project', project);


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
                });;
                if(activeProject.name != projects[index]) {
                ui.resetProject(remove);
                storage.removeProject(projects[index]);
                }
                showProjects();
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
            // projectLink.textContent += ui.showX();
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

}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQzFCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQ2pCUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQU07QUFDVjtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUMxQk47QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsU0FBUztBQUM3RCw2RkFBNkY7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMEJBQTBCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnREFBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7OztVQ3pLbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDRTtBQUNOO0FBQ1k7QUFDbkI7QUFDMUI7QUFDQSwwREFBTTtBQUNOLDJEQUFPO0FBQ1Asd0RBQUk7QUFDSiw4REFBVTtBQUNWO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2Fzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2JpbGVNZW51LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgICAgICB0aGlzLmFkZERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cclxuXHJcbiAgICBhZGRUYXNrID0gKHRhc2tUb0FkZCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrVG9BZGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tzKCkgeyByZXR1cm4gdGhpcy50YXNrczsgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gICAgc2hvd1Rhc2sgPSAodGFza3MsIGlkLCBzdGF0dXMsIHRhc2tUaXRsZSwgZHVlRGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICAoc3RhdHVzID09PSBmYWxzZSkgPyB0YXNrLmNsYXNzTGlzdC5hZGQoJ25vdF9maW5pc2hlZCcpIDogdGFzay5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpO1xyXG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfdGl0bGUnKTtcclxuXHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHJlYWQudHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG4gICAgICAgIHJlYWQuY2hlY2tlZCA9IChzdGF0dXMgPT09IHRydWUpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1haW5JbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcclxuICAgICAgICBtYWluSW5mby5hcHBlbmRDaGlsZChyZWFkKTtcclxuICAgICAgICBtYWluSW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzZWNvbmRhcnlJbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcclxuICAgICAgICBpZihkdWVEYXRlID09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NhbGVuZGFySWNvbihkYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwaWNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcGlja0RhdGUudHlwZSA9ICdkYXRlJztcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZV90YXNrJyk7XHJcbiAgICAgICAgLy8gcmVtb3ZlLnRleHRDb250ZW50ID0gJ0RlbCc7XHJcbiAgICAgICAgdGhpcy5zaG93VHJhc2hJY29uKHJlbW92ZSk7XHJcblxyXG4gICAgICAgIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChyZW1vdmUpO1xyXG5cclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKG1haW5JbmZvKTtcclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHNlY29uZGFyeUluZm8pO1xyXG5cclxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICAgICAgICAvLyByZXR1cm4gdGFzaztcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvamVjdCA9IChwcm9qZWN0c0FycmF5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX2xpc3QnKTtcclxuICAgICAgICBwcm9qZWN0c0xpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBwcm9qZWN0c0FycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgICAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgaWYoIXByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVfcHJvamVjdCcpKSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBpZihwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlX3Byb2plY3QnKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xyXG5cclxuICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlX3Byb2plY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfcHJvamVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlRGF0ZUZvcm1hdChkYXRlTGluaykge1xyXG4gICAgICAgIGlmKCFkYXRlTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgZGF0ZUxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihkYXRlTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgZGF0ZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXREYXRlRm9ybWF0cygpIHtcclxuICAgICAgICBjb25zdCBkYXRlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZV9saW5rJyk7XHJcbiAgICAgICAgZGF0ZUxpbmtzLmZvckVhY2goZGF0ZUxpbmsgPT4ge1xyXG4gICAgICAgICAgICBpZihkYXRlTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VHJhc2hJY29uKG5vZGUpIHtcclxuICAgICAgICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICAgICAgICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG5cclxuICAgICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjNjc2NzY3Jyk7XHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICAgICAgICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAnZCcsXHJcbiAgICAgICAgICAgICdNNiAxOWEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlY3SDZ2MTJNOCA5aDh2MTBIOFY5bTcuNS01bC0xLTFoLTVsLTEgMUg1djJoMTRWNGgtMy41WicgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICAgICAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gICAgICAgIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGljb25TdmcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbm9kZS5hcHBlbmRDaGlsZChpY29uU3ZnKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q2FsZW5kYXJJY29uKG5vZGUpIHtcclxuICAgICAgICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICAgICAgICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG5cclxuICAgICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjNjc2NzY3Jyk7XHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICAgICAgICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ2NhbGVuZGFyX2ljb24nKTtcclxuXHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAnZCcsXHJcbiAgICAgICAgICAgICdNMTIgMTJoNXY1aC01di01bTctOWgtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJtMCAydjJINVY1aDE0TTUgMTlWOWgxNHYxMEg1WicgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICAgICAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gICAgICAgIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGljb25TdmcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbm9kZS5hcHBlbmRDaGlsZChpY29uU3ZnKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93WChub2RlKSB7XHJcbiAgICAgICAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgICAgICAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcclxuXHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzY3Njc2NycpO1xyXG4gICAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNTYgMjU2Jyk7XHJcbiAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICAgICAgICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3hfaWNvbicpO1xyXG5cclxuICAgICAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICdkJyxcclxuICAgICAgICAgICAgJ00yMDguNDkgMTkxLjUxYTEyIDEyIDAgMCAxLTE3IDE3TDEyOCAxNDVsLTYzLjUxIDYzLjQ5YTEyIDEyIDAgMCAxLTE3LTE3TDExMSAxMjhMNDcuNTEgNjQuNDlhMTIgMTIgMCAwIDEgMTctMTdMMTI4IDExMWw2My41MS02My41MmExMiAxMiAwIDAgMSAxNyAxN0wxNDUgMTI4WicgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gICAgICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICAgICAgICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpY29uU3ZnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5vZGUuYXBwZW5kQ2hpbGQoaWNvblN2Zyk7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSBGcmFuZWtEZXYgJztcclxuICAgIGdpdGh1YkxpbmsudGV4dENvbnRlbnQgPSAnR2l0SHViJztcclxuICAgIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vRnJhbmVrRGV2L3RvZG8tbGlzdCc7XHJcbiAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cclxuICAgIC8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluX2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xyXG5cclxuICAgIFxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHApO1xyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YXNrX2NvbnRlbnQnKTtcclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xyXG4gICAgLy8gYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgLy8gYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIEZvb3RlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyB0aGlzLnByb2plY3QgPSAnJztcclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lmUHJvamVjdEV4aXN0cyhwcm9qZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVByb2plY3QocHJvamVjdFRvU2F2ZSkge1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tJZlByb2plY3RFeGlzdHMocHJvamVjdFRvU2F2ZSkgPT0gbnVsbCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RUb1NhdmUubmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdFRvU2F2ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ3Byb2pla3QgJyArIHByb2plY3RUb1NhdmUubmFtZSArICcganV6IGlzdGFuaWVqZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnByb2plY3QgPSBwcm9qZWN0VG9TYXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZVByb2plY3QocHJvamVjdFRvVXBkYXRlKSB7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFRvVXBkYXRlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldFByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdHMoKSB7XHJcbiAgICAgICAgbGV0IHByb2plY3RzID0gW107XHJcbiAgICAgICAgZm9yICggdmFyIGkgPSAwLCBsZW4gPSBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpIDwgbGVuOyArK2kgKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBsb2NhbFN0b3JhZ2Uua2V5KCBpICkgKSB8fCB7fSk7XHJcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdFRpdGxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBwcm9qZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrcyhwcm9qZWN0KSB7XHJcbiAgICAgICAgbGV0IHRhc2tzID0gW107XHJcbiAgICAgICAgbGV0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0Lm5hbWUpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnUHJvamVjdDogJywgcHJvamVjdERhdGEpO1xyXG4gICAgICAgIHRhc2tzID0gcHJvamVjdERhdGEudGFza3M7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1Rhc2tzOiAnLCB0YXNrcyk7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodGFza1RvQWRkLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgbGV0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0Lm5hbWUpKSB8fCB7fTtcclxuICAgICAgICBpZighcHJvamVjdERhdGEuaGFzT3duUHJvcGVydHkoJ3Rhc2tzJykpIHtcclxuICAgICAgICAgICAgcHJvamVjdERhdGEudGFza3MgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvamVjdERhdGEudGFza3MucHVzaCh0YXNrVG9BZGQpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3REYXRhLm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdERhdGEubmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhc2tzKHRhc2tzLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1Rhc2tzIHRvIHVkcGF0ZScsIHRhc2tzKTtcclxuICAgICAgICBsZXQgcHJvamVjdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QubmFtZSkpIHx8IHt9O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3REYXRhKTtcclxuICAgICAgICBpZighcHJvamVjdERhdGEuaGFzT3duUHJvcGVydHkoJ3Rhc2tzJykpIHtcclxuICAgICAgICAgICAgcHJvamVjdERhdGEudGFza3MgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvamVjdERhdGEudGFza3MgPSB0YXNrcztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0RGF0YS5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3QubmFtZSk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImNvbnN0IE1vYmlsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgXHJcbiAgICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9tZW51Jyk7XHJcblxyXG4gICAgY29uc3QgdG9wTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9wTGluZS5jbGFzc0xpc3QuYWRkKCd0b3BfbGluZScpO1xyXG5cclxuICAgIGNvbnN0IG1pZGRsZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1pZGRsZUxpbmUuY2xhc3NMaXN0LmFkZCgnbWlkZGxlX2xpbmUnKTtcclxuXHJcbiAgICBjb25zdCBib3R0b21MaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib3R0b21MaW5lLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbV9saW5lJyk7XHJcblxyXG5cclxuICAgIGJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQodG9wTGluZSk7XHJcbiAgICBidXJnZXJNZW51LmFwcGVuZENoaWxkKG1pZGRsZUxpbmUpO1xyXG4gICAgYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChib3R0b21MaW5lKTtcclxuICAgIFxyXG4gICAgYm9keS5hcHBlbmRDaGlsZChidXJnZXJNZW51KTtcclxuXHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld190YXNrX2Zvcm0nKTtcclxuXHJcbiAgICBpZih3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDYwMCkge1xyXG4gICAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfbW9iaWxlJyk7XHJcbiAgICB9XHJcbiAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJfbW9iaWxlJyk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgbGV0IHNob3dNZW51ID0gZmFsc2U7XHJcbiAgICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIChuZXdUYXNrRm9ybSAhPSBudWxsKSA/IG5ld1Rhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgOiAnJztcclxuICAgICAgICBpZighc2hvd01lbnUpIHtcclxuICAgICAgICAgICAgdG9wTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIG1pZGRsZUxpbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBib3R0b21MaW5lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgdG9wTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlJyk7XHJcbiAgICAgICAgICAgIG1pZGRsZUxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnZGVhY3RpdmF0ZScpO1xyXG4gICAgICAgICAgICBib3R0b21MaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGUnKTtcclxuICAgICAgICAgICAgdG9wTGluZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbWlkZGxlTGluZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgYm90dG9tTGluZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdzaG93U2lkZWJhciAuM3MgZm9yd2FyZHMnO1xyXG4gICAgICAgICAgICBzaG93TWVudSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdG9wTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbWlkZGxlTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgYm90dG9tTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgdG9wTGluZS5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XHJcbiAgICAgICAgICAgIG1pZGRsZUxpbmUuY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZScpO1xyXG4gICAgICAgICAgICBib3R0b21MaW5lLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9wTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgICAgICAgICAgICAgbWlkZGxlTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyB0b3BMaW5lLnN0eWxlLmFuaW1hdGlvbiA9ICdzbG93bHlTaG93IDFzJztcclxuICAgICAgICAgICAgICAgIC8vIG1pZGRsZUxpbmUuc3R5bGUuYW5pbWF0aW9uID0gJ3Nsb3dseVNob3cgMXMnO1xyXG4gICAgICAgICAgICAgICAgLy8gYm90dG9tTGluZS5zdHlsZS5hbmltYXRpb24gPSAnc2xvd2x5U2hvdyAxcyc7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcblxyXG4gICAgICAgICAgICBzaG93TWVudSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBzaWRlYmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdoaWRlU2lkZWJhciAuM3MgZm9yd2FyZHMnO1xyXG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51OyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCBVSSBmcm9tICcuL1VJJztcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgdWkgPSBuZXcgVUkoKTtcclxuICAgIC8vIHVpLnNob3dQcm9qZWN0KCk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XHJcblxyXG4gICAgY29uc3Qgc2lkZWJhckJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpZGViYXJCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfYmcnKTtcclxuXHJcbiAgICBjb25zdCBiYWNrZ29ydW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFja2dvcnVuZFRleHQuY2xhc3NMaXN0LmFkZCgnYmdfdGV4dCcpO1xyXG4gICAgY29uc3QgdGV4dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9ICdUb0RvJztcclxuICAgIGJhY2tnb3J1bmRUZXh0LmFwcGVuZENoaWxkKHRleHRTcGFuKTtcclxuICAgIFxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgndG9kb19uYXYnKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGRhdGVMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBkYXRlTGlua3MuY2xhc3NMaXN0LmFkZCgnZGF0ZV9saW5rcycpO1xyXG4gICAgbGV0IGRhdGVGb3JtYXRzID0gWydUb2RheScsICdUaGlzIHdlZWsnXTtcclxuXHJcbiAgICBkYXRlRm9ybWF0cy5mb3JFYWNoKGRhdGVGb3JtYXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdkYXRlX2xpbmsnLCAncHJvamVjdF9uYW1lamtsJyk7XHJcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGRhdGVGb3JtYXQ7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBkYXRlTGlua3MuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIC8vIGNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgXHJcbiAgICAvLyB0b2RheS50ZXh0Q29udGVudCA9ICdUb2RheSc7XHJcbiAgICAvLyB0aGlzV2Vlay50ZXh0Q29udGVudCA9ICdUaGlzIHdlZWsnO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBwcm9qZWN0c0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcclxuXHJcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c0Rlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAvLyBuYXYuYXBwZW5kQ2hpbGQodG9kYXkpO1xyXG4gICAgLy8gbmF2LmFwcGVuZENoaWxkKHRoaXNXZWVrKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChkYXRlTGlua3MpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKHByb2plY3RzKTtcclxuICAgIFxyXG4gICAgc2lkZWJhckJhY2tncm91bmQuYXBwZW5kQ2hpbGQobmF2KTtcclxuICAgIHNpZGViYXJCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGJhY2tnb3J1bmRUZXh0KTtcclxuXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJCYWNrZ3JvdW5kKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyIsImltcG9ydCBVSSBmcm9tICcuL1VJJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGREYXRlID0gZGF0ZS5nZXREYXRlKCkgKyAnLycgKyBkYXRlLmdldE1vbnRoKCkgKyAnLycgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgZHVlRGF0ZSA9IGR1ZURhdGUuc3BsaXQoJy0nKTtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlLnJldmVyc2UoKS5qb2luKCcvJyk7XHJcbiAgICAgICAgdGhpcy51aSA9IG5ldyBVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlID0gKCkgPT4geyByZXR1cm4gdGhpcy50aXRsZTsgfVxyXG5cclxuICAgIG1hcmtBc1JlYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUYXNrKHRhc2tzLCBpZCkge1xyXG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKHRoaXMudWkuc2hvd1Rhc2soaWQsIHRoaXMuc3RhdHVzLCB0aGlzLnRpdGxlLCB0aGlzLmR1ZURhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0dXMgPSAoc3RhdHVzVG9TZXQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c1RvU2V0O1xyXG4gICAgfVxyXG5cclxufTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG5pbXBvcnQgVUkgZnJvbSAnLi9VSSc7XHJcblxyXG5jb25zdCBUYXNrcyA9IChwcm9qZWN0LCBzdG9yYWdlKSA9PiB7XHJcbiAgICBjb25zdCB1aSA9IG5ldyBVSSgpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdBY3RpdmUgcHJvamVjdCcsIHByb2plY3QpO1xyXG5cclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tfY29udGVudCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW5fdGFza3MnKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgbGV0IHRhc2tzID0gc3RvcmFnZS5nZXRUYXNrcyhwcm9qZWN0KTtcclxuICAgIC8vIGlmKHRhc2tzID09IG51bGwpIHtcclxuICAgIC8vICAgICB0YXNrcyA9IFtdO1xyXG4gICAgLy8gfVxyXG4gICAgbGV0IHRhc2tJZCA9IDE7XHJcblxyXG4gICAgY29uc3QgdGFza3NDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrc0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFza3NfbGlzdCcpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrc0NvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZF90YXNrJyk7XHJcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJysgYWRkIHRhc2snO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcclxuXHJcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3X3Rhc2tfZm9ybScpO1xyXG5cclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBuYW1lLnR5cGUgPSAndGV4dCc7XHJcbiAgICBuYW1lLnBsYWNlaG9sZGVyID0gJ1Rhc2sgbmFtZSc7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkYXRlLnR5cGUgPSAnZGF0ZSc7XHJcblxyXG4gICAgY29uc3Qgc2hvdE5ld1Rhc2tGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgIGFkZFRhc2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBzaG90TmV3VGFza0Zvcm0oKTtcclxuICAgIFxyXG4gICAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9jb250ZW50Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2lkZWJhci5zdHlsZS5hbmltYXRpb24gPSAnZGVjcmVhc2VPcGFjaXR5IC41cyBmb3J3YXJkcyc7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gJ2RlY3JlYXNlT3BhY2l0eSAuNXMgZm9yd2FyZHMnO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuICAgICAgICBzaG93SW5wdXRzKCk7XHJcblxyXG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKG5hbWUudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sobmFtZS52YWx1ZSwgZGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0LmFkZFRhc2soeyBpZDogdGFza0lkKyssIHBhcmFtOiBuZXdUYXNrIH0pO1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5hZGRUYXNrKG5ld1Rhc2ssIHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdC5nZXROYW1lKCksIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcclxuICAgICAgICAgICAgICAgIC8vIHN0b3JhZ2Uuc2F2ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdscyAnLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0LmdldE5hbWUoKSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzaWRlYmFyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIG1haW5Db250ZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUuYW5pbWF0aW9uID0gJ2luY3JlYXNlT3BhY2l0eSAuNXMgZm9yd2FyZHMnO1xyXG4gICAgICAgICAgICBtYWluQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSAnaW5jcmVhc2VPcGFjaXR5IC41cyBmb3J3YXJkcyc7XHJcbiAgICAgICAgICAgIG5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgLy8gbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZV9uZXdfdGFza19mb3JtJyk7XHJcbiAgICAgICAgICAgIC8vIG5ld1Rhc2tGb3JtLnN0eWxlLmFuaW1hdGlvbiA9ICdoaWRlVGFza0Zvcm0gLjRzIGZvcndhcmRzJztcclxuICAgICAgICAgICAgbmV3VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNob3dUYXNrcygpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0lucHV0cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG5cclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2hhbmdlVGFza1N0YXR1cyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHRhc2tzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xyXG5cclxuICAgICAgICB0YXNrc0VsZW1lbnRzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgbGV0IGNoZWNrYm94ID0gdGFzay5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xyXG5cclxuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWRPZlRhc2sgPSB0YXNrLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2luZ2xlVGFzayA9IHRhc2tzLmZpbmQoKG9iaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggPT0gaWRPZlRhc2s7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmKHNpbmdsZVRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrc1tpZE9mVGFza10uc3RhdHVzID0gKHRhc2tzW2lkT2ZUYXNrXS5zdGF0dXMgPT0gZmFsc2UpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS51cGRhdGVUYXNrcyh0YXNrcywgcHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRhc2tzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xyXG5cclxuICAgICAgICB0YXNrc0VsZW1lbnRzLmZvckVhY2goKHRhc2spID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLmRlbGV0ZV90YXNrJyk7XHJcblxyXG4gICAgICAgICAgICB0YXNrVG9EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZE9mVGFzayA9IHRhc2suZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgICAgIHRhc2tzLmZpbmQoKG9iaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA9PSBpZE9mVGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnVwZGF0ZVRhc2tzKHRhc2tzLCBwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcygpO1xyXG4gICAgICAgICAgICB9KTsgXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dUYXNrcyA9ICgpID0+IHtcclxuICAgICAgICB0YXNrc0NvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICB0YXNrcyA9IHN0b3JhZ2UuZ2V0VGFza3MocHJvamVjdCk7XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdWkuc2hvd1Rhc2sodGFza3NDb250ZW50LCBpbmRleCwgdGFzay5zdGF0dXMsIHRhc2sudGl0bGUsIHRhc2suZHVlRGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2hhbmdlVGFza1N0YXR1cygpO1xyXG4gICAgICAgIGRlbGV0ZVRhc2soKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBzaG93VGFza3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGFza3MoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza3M7IiwiaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG5pbXBvcnQgVGFza3MgZnJvbSAnLi90YXNrcyc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2UgZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5cclxuY29uc3QgVE9ETyA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgdWkgPSBuZXcgVUkoKTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlKCk7XHJcblxyXG4gICAgbGV0IHByb2plY3RUb1NhdmUgPSBuZXcgUHJvamVjdCgnTWFpbiBwcm9qZWN0Jyk7XHJcbiAgICBpZihzdG9yYWdlLmNoZWNrSWZQcm9qZWN0RXhpc3RzKHByb2plY3RUb1NhdmUpID09IG51bGwpIHtcclxuICAgICAgICBwcm9qZWN0VG9TYXZlLmFkZERhdGUgPSBuZXcgRGF0ZSgwKTtcclxuICAgICAgICBzdG9yYWdlLnNhdmVQcm9qZWN0KHByb2plY3RUb1NhdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaXJzdFByb2plY3QgPSBzdG9yYWdlLmdldFByb2plY3RzKClbMF07XHJcblxyXG4gICAgVGFza3MoZmlyc3RQcm9qZWN0LCBzdG9yYWdlKTtcclxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Byb2plY3RzLmNsYXNzTGlzdC5hZGQoJ25ld19wcm9qZWN0cycpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBuZXdQcm9qZWN0SW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIG5ld1Byb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3RJbnB1dCk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICduZXcnO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX2xpc3QnKTtcclxuICAgIFxyXG4gICAgbGV0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RfbmFtZV9jb250YWluZXInKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IG1haW5UYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrX2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VEYXRlRm9ybWF0VmlldyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZV9saW5rJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0ZUxpbmtzLmZvckVhY2goZGF0ZUxpbmsgPT4ge1xyXG4gICAgICAgICAgICBkYXRlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0QWxsUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0RGF0ZUZvcm1hdHMoKTtcclxuICAgICAgICAgICAgICAgIHVpLnNldEFjdGl2ZURhdGVGb3JtYXQoZGF0ZUxpbmspO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0ZUxpbmsudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNoYW5nZURhdGVGb3JtYXRWaWV3KCk7XHJcbiAgICBjb25zdCBjaGFuZ2VQcm9qZWN0VmlldyA9ICgpID0+IHtcclxuICAgICAgICBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0X25hbWVfY29udGFpbmVyJyk7XHJcbiAgICAgICAgZmlyc3RQcm9qZWN0ID0gc3RvcmFnZS5nZXRQcm9qZWN0cygpO1xyXG4gICAgICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHAgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1aS5yZXNldEFsbFByb2plY3RzKCk7XHJcbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHAgPT4gdWkucmVzZXRQcm9qZWN0KHApKTtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0RGF0ZUZvcm1hdHMoKTtcclxuICAgICAgICAgICAgICAgIG1haW5UYXNrcy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0QWN0aXZlUHJvamVjdChwKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVByb2plY3QgPSAoKGZpcnN0UHJvamVjdFtpbmRleF0gPT0gbnVsbCkgPyBmaXJzdFByb2plY3RbMF0gOiBmaXJzdFByb2plY3RbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIFRhc2tzKGFjdGl2ZVByb2plY3QsIHN0b3JhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZW1vdmUgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy54X2ljb24nKTtcclxuICAgICAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RzID0gc3RvcmFnZS5nZXRQcm9qZWN0cygpLnNvcnQoKHAxLCBwMikgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUocDEuYWRkRGF0ZSkgLSBuZXcgRGF0ZShwMi5hZGREYXRlKTtcclxuICAgICAgICAgICAgICAgIH0pOztcclxuICAgICAgICAgICAgICAgIGlmKGFjdGl2ZVByb2plY3QubmFtZSAhPSBwcm9qZWN0c1tpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0UHJvamVjdChyZW1vdmUpO1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5yZW1vdmVQcm9qZWN0KHByb2plY3RzW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzaG93UHJvamVjdHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY2hhbmdlUHJvamVjdFZpZXcoKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbG9jYWxQcm9qZWN0cyA9IHN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFByb2plY3RzLnNvcnQoKHAxLCBwMikgPT4geyBcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHAxLmFkZERhdGUpIC0gbmV3IERhdGUocDIuYWRkRGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHByb2plY3RzTGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgICAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfbmFtZV9jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ3Byb2plY3RfbmFtZScpO1xyXG5cclxuICAgICAgICAgICAgKGluZGV4ID09PSAwKSA/IHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9wcm9qZWN0JykgOiAnJztcclxuXHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgICAgICAvLyBwcm9qZWN0TGluay50ZXh0Q29udGVudCArPSB1aS5zaG93WCgpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XHJcbiAgICAgICAgICAgIHVpLnNob3dYKHByb2plY3ROYW1lQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RfbmFtZV9jb250YWluZXInKTtcclxuICAgIH07XHJcblxyXG4gICAgc2hvd1Byb2plY3RzKCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEhpZ2hsaWdodCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0c1RvSGlnaGxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RfbmFtZScpO1xyXG4gICAgICAgIHByb2plY3RzVG9IaWdobGlnaHQuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0QWxsUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0RGF0ZUZvcm1hdHMoKTtcclxuICAgICAgICAgICAgICAgIHVpLnNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiBcclxuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RfbmFtZV9jb250YWluZXInKTtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4geyB1aS5yZXNldFByb2plY3QocHJvamVjdCk7fSk7XHJcblxyXG4gICAgICAgIGxldCBhZGRlZFRhc2sgPSBmYWxzZTtcclxuICAgICAgICBuZXdQcm9qZWN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICdhZGQnO1xyXG5cclxuICAgICAgICBpZihuZXdQcm9qZWN0SW5wdXQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3RvcmFnZS5zYXZlUHJvamVjdChuZXcgUHJvamVjdChuZXdQcm9qZWN0SW5wdXQudmFsdWUpKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGFkZGVkVGFzayA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoaWRlQWRkVGFzayhhZGRlZFRhc2spO1xyXG4gICAgICAgIHNob3dQcm9qZWN0cygpO1xyXG4gICAgICAgIGNoYW5nZVByb2plY3RWaWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoaWRlQWRkVGFzayA9IChhZGRlZFRhc2spID0+IHtcclxuICAgICAgICBpZihhZGRlZFRhc2spIHtcclxuICAgICAgICAgICAgYWRkZWRUYXNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSAnbmV3JztcclxuICAgICAgICAgICAgbmV3UHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgbmV3UHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcblxyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcclxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3RzKTtcclxuIFxyXG4gICAgY2hhbmdlUHJvamVjdFZpZXcoKTtcclxuICAgIHByb2plY3RIaWdobGlnaHQoKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRPRE87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vYXNzZXRzL2hlYWRlcic7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vYXNzZXRzL3NpZGViYXInO1xyXG5pbXBvcnQgVE9ETyBmcm9tICcuL2Fzc2V0cy90b2RvJztcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9hc3NldHMvbW9iaWxlTWVudSc7XHJcbmltcG9ydCAnLi9zYXNzL21haW4uc2Nzcyc7XHJcblxyXG5IZWFkZXIoKTtcclxuU2lkZWJhcigpO1xyXG5UT0RPKCk7XHJcbk1vYmlsZU1lbnUoKTtcclxuLy8gRm9vdGVyKCk7XHJcbi8vIFRhc2tzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==