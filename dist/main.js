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
    showTask = (id, status, taskTitle, dueDate) => {
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
        date.textContent = dueDate;

        const pickDate = document.createElement('input');
        pickDate.type = 'date';

        const remove = document.createElement('div');
        remove.classList.add('delete_task');
        remove.textContent = 'Del';

        secondaryInfo.appendChild(date);
        secondaryInfo.appendChild(remove);

        task.appendChild(mainInfo);
        task.appendChild(secondaryInfo);


        return task;
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

    document.addEventListener('DOMContentLoaded', () => {

        console.log(window.screen.width);
    });

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



const Tasks = (project) => {0

    const content = document.querySelector('.task_content');
    
    const main = document.createElement('div');
    main.classList.add('main_tasks');
    content.appendChild(main);

    let tasks = project.getTasks();
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
            console.log(newTaskForm.style.opacity);
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
                project.addTask({ id: taskId++, param: newTask });
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

            checkbox.addEventListener('click', (e) => {
                let currentTask = e.currentTarget;
                let idOfTask = task.dataset.id;

                let singleTask = tasks.find((obj) => {
                    return obj.id.toString() == idOfTask;
                });

                if(singleTask) {
                    singleTask.param.setStatus((singleTask.param.status === false) ? true : false);
                }
                
                renderTasks();

            });
        });

    };

    const deleteTask = () => {
        let tasksElements = document.querySelectorAll('.task');
        tasksElements.forEach((task) => {
            const taskToDelete = task.querySelector('.delete_task');
            taskToDelete.addEventListener('click', (e) => {
                const idOfTask = task.dataset.id;
                tasks.find((obj, index) => {
                    if(obj.id.toString() == idOfTask) {
                        tasks.splice(index, 1);
                    }
                })
                
                renderTasks();
            }); 
        });
    }

    const showTasks = () => {
        tasksContent.textContent = '';
        tasks.forEach(task => task.param.showTask(tasksContent, task.id));
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





const TODO = () => {

    const ui = new _UI__WEBPACK_IMPORTED_MODULE_0__["default"]();

    let projectsArray = [new _Project__WEBPACK_IMPORTED_MODULE_1__["default"]('Main project')];
    let activeProject = projectsArray[0];
    activeProject.addTask({id: 0, param: new _task__WEBPACK_IMPORTED_MODULE_3__["default"]('Testowy task', '18/07/2023')});
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])(activeProject);
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
    
    let allProjects = document.querySelectorAll('.project');

    
    const mainTasks = document.querySelector('.task_content');

    const changeDateFormatView = () => {
        const dateLinks = document.querySelectorAll('.date_link');
        
        dateLinks.forEach(dateLink => {
            dateLink.addEventListener('click', () => {
                ui.resetAllProjects();
                ui.resetDateFormats();
                ui.setActiveDateFormat(dateLink);
            });
        });
    }
    changeDateFormatView();
    const changeProjectView = () => {
        allProjects.forEach((project, index) => {
            
            project.addEventListener('click', () => {
                // zrobic zeby renderowalo Tasks() z argumentem jako obiekt Projectu
                allProjects.forEach(project => ui.resetProject(project));
                ui.resetDateFormats();
                mainTasks.textContent = '';
                ui.setActiveProject(project);
                activeProject = projectsArray[index];
                (0,_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])(projectsArray[index]);
            });
        });
    };
    changeProjectView();

    const showProjects = () => {
        projectsList.textContent = '';

        projectsArray.forEach((project, index) => {
            const projectLink = document.createElement('a');
            projectLink.classList.add('project', 'project_name');
            (index === 0) ? projectLink.classList.add('active_project') : '';
            projectLink.textContent = project.getName();
            
            projectsList.appendChild(projectLink);
        });

        allProjects = document.querySelectorAll('.project');
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

        let addedTask = false;
        newProjectInput.style.display = 'block';
        newProject.textContent = 'add';

        if(newProjectInput.value.trim().length > 0) {
            projectsArray.push(new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](newProjectInput.value));
            newProjectInput.value = '';
            addedTask = true;
        }

        hideAddTask(addedTask);
        showProjects();0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQzFCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDakJTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBTTtBQUNWO0FBQ0E7QUFDQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7OztBQzFCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRk87QUFDVjtBQUN0QjtBQUNBO0FBQ0EsaUJBQWlCLDJDQUFFO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUN0QjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQ0FBRTtBQUN4QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjBCO0FBQ007QUFDaEM7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZDQUFJO0FBQ3RDLGtDQUFrQyw4QkFBOEI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSkU7QUFDVTtBQUNKO0FBQ0Y7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJDQUFFO0FBQ3JCO0FBQ0EsNkJBQTZCLGdEQUFPO0FBQ3BDO0FBQ0EsMkJBQTJCLGtCQUFrQiw2Q0FBSSwrQkFBK0I7QUFDaEYsSUFBSSxrREFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQUs7QUFDckIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnREFBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7O1VDOUhuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNFO0FBQ047QUFDWTtBQUNuQjtBQUMxQjtBQUNBLDBEQUFNO0FBQ04sMkRBQU87QUFDUCx3REFBSTtBQUNKLDhEQUFVO0FBQ1Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL21vYmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cclxuXHJcbiAgICBhZGRUYXNrID0gKHRhc2tUb0FkZCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrVG9BZGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tzKCkgeyByZXR1cm4gdGhpcy50YXNrczsgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gICAgc2hvd1Rhc2sgPSAoaWQsIHN0YXR1cywgdGFza1RpdGxlLCBkdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgICAgIChzdGF0dXMgPT09IGZhbHNlKSA/IHRhc2suY2xhc3NMaXN0LmFkZCgnbm90X2ZpbmlzaGVkJykgOiB0YXNrLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkJyk7XHJcbiAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza190aXRsZScpO1xyXG5cclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcmVhZC50eXBlID0gJ2NoZWNrYm94JztcclxuXHJcbiAgICAgICAgcmVhZC5jaGVja2VkID0gKHN0YXR1cyA9PT0gdHJ1ZSkgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWFpbkluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xyXG4gICAgICAgIG1haW5JbmZvLmFwcGVuZENoaWxkKHJlYWQpO1xyXG4gICAgICAgIG1haW5JbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNlY29uZGFyeUluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xyXG5cclxuICAgICAgICBjb25zdCBwaWNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcGlja0RhdGUudHlwZSA9ICdkYXRlJztcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZV90YXNrJyk7XHJcbiAgICAgICAgcmVtb3ZlLnRleHRDb250ZW50ID0gJ0RlbCc7XHJcblxyXG4gICAgICAgIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChyZW1vdmUpO1xyXG5cclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKG1haW5JbmZvKTtcclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHNlY29uZGFyeUluZm8pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Byb2plY3QgPSAocHJvamVjdHNBcnJheSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19saXN0Jyk7XHJcbiAgICAgICAgcHJvamVjdHNMaXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGlmKCFwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlX3Byb2plY3QnKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0UHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgaWYocHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfcHJvamVjdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldEFsbFByb2plY3RzKCkge1xyXG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcclxuXHJcbiAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgaWYocHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZURhdGVGb3JtYXQoZGF0ZUxpbmspIHtcclxuICAgICAgICBpZighZGF0ZUxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVfcHJvamVjdCcpKSB7XHJcbiAgICAgICAgICAgIGRhdGVMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZGF0ZUxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVfcHJvamVjdCcpKSB7XHJcbiAgICAgICAgICAgIGRhdGVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0RGF0ZUZvcm1hdHMoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVfbGluaycpO1xyXG4gICAgICAgIGRhdGVMaW5rcy5mb3JFYWNoKGRhdGVMaW5rID0+IHtcclxuICAgICAgICAgICAgaWYoZGF0ZUxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVfcHJvamVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfcHJvamVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSBGcmFuZWtEZXYgJztcclxuICAgIGdpdGh1YkxpbmsudGV4dENvbnRlbnQgPSAnR2l0SHViJztcclxuICAgIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vRnJhbmVrRGV2L3RvZG8tbGlzdCc7XHJcbiAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cclxuICAgIC8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluX2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xyXG5cclxuICAgIFxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHApO1xyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YXNrX2NvbnRlbnQnKTtcclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xyXG4gICAgLy8gYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgLy8gYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIEZvb3RlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiY29uc3QgTW9iaWxlTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyX21lbnUnKTtcclxuXHJcbiAgICBjb25zdCB0b3BMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b3BMaW5lLmNsYXNzTGlzdC5hZGQoJ3RvcF9saW5lJyk7XHJcblxyXG4gICAgY29uc3QgbWlkZGxlTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWlkZGxlTGluZS5jbGFzc0xpc3QuYWRkKCdtaWRkbGVfbGluZScpO1xyXG5cclxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvdHRvbUxpbmUuY2xhc3NMaXN0LmFkZCgnYm90dG9tX2xpbmUnKTtcclxuXHJcblxyXG4gICAgYnVyZ2VyTWVudS5hcHBlbmRDaGlsZCh0b3BMaW5lKTtcclxuICAgIGJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQobWlkZGxlTGluZSk7XHJcbiAgICBidXJnZXJNZW51LmFwcGVuZENoaWxkKGJvdHRvbUxpbmUpO1xyXG4gICAgXHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGJ1cmdlck1lbnUpO1xyXG5cclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3X3Rhc2tfZm9ybScpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JlZW4ud2lkdGgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA8PSA2MDApIHtcclxuICAgICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX21vYmlsZScpO1xyXG4gICAgfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyX21vYmlsZScpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIGxldCBzaG93TWVudSA9IGZhbHNlO1xyXG4gICAgYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAobmV3VGFza0Zvcm0gIT0gbnVsbCkgPyBuZXdUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIDogJyc7XHJcbiAgICAgICAgaWYoIXNob3dNZW51KSB7XHJcbiAgICAgICAgICAgIHRvcExpbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBtaWRkbGVMaW5lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgYm90dG9tTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIHRvcExpbmUuY2xhc3NMaXN0LnJlbW92ZSgnZGVhY3RpdmF0ZScpO1xyXG4gICAgICAgICAgICBtaWRkbGVMaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGUnKTtcclxuICAgICAgICAgICAgYm90dG9tTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlJyk7XHJcbiAgICAgICAgICAgIHRvcExpbmUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1pZGRsZUxpbmUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGJvdHRvbUxpbmUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5hbmltYXRpb24gPSAnc2hvd1NpZGViYXIgLjNzIGZvcndhcmRzJztcclxuICAgICAgICAgICAgc2hvd01lbnUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRvcExpbmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1pZGRsZUxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGJvdHRvbUxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHRvcExpbmUuY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZScpO1xyXG4gICAgICAgICAgICBtaWRkbGVMaW5lLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcclxuICAgICAgICAgICAgYm90dG9tTGluZS5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvcExpbmUuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcclxuICAgICAgICAgICAgICAgIG1pZGRsZUxpbmUuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcclxuICAgICAgICAgICAgICAgIGJvdHRvbUxpbmUuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gdG9wTGluZS5zdHlsZS5hbmltYXRpb24gPSAnc2xvd2x5U2hvdyAxcyc7XHJcbiAgICAgICAgICAgICAgICAvLyBtaWRkbGVMaW5lLnN0eWxlLmFuaW1hdGlvbiA9ICdzbG93bHlTaG93IDFzJztcclxuICAgICAgICAgICAgICAgIC8vIGJvdHRvbUxpbmUuc3R5bGUuYW5pbWF0aW9uID0gJ3Nsb3dseVNob3cgMXMnO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG5cclxuICAgICAgICAgICAgc2hvd01lbnUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gc2lkZWJhci5zdHlsZS5hbmltYXRpb24gPSAnaGlkZVNpZGViYXIgLjNzIGZvcndhcmRzJztcclxuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG5pbXBvcnQgVUkgZnJvbSAnLi9VSSc7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgbGV0IHVpID0gbmV3IFVJKCk7XHJcbiAgICAvLyB1aS5zaG93UHJvamVjdCgpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpO1xyXG5cclxuICAgIGNvbnN0IHNpZGViYXJCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaWRlYmFyQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX2JnJyk7XHJcblxyXG4gICAgY29uc3QgYmFja2dvcnVuZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJhY2tnb3J1bmRUZXh0LmNsYXNzTGlzdC5hZGQoJ2JnX3RleHQnKTtcclxuICAgIGNvbnN0IHRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSAnVG9Ebyc7XHJcbiAgICBiYWNrZ29ydW5kVGV4dC5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XHJcbiAgICBcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ3RvZG9fbmF2Jyk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBkYXRlTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgZGF0ZUxpbmtzLmNsYXNzTGlzdC5hZGQoJ2RhdGVfbGlua3MnKTtcclxuICAgIGxldCBkYXRlRm9ybWF0cyA9IFsnVG9kYXknLCAnVGhpcyB3ZWVrJ107XHJcblxyXG4gICAgZGF0ZUZvcm1hdHMuZm9yRWFjaChkYXRlRm9ybWF0ID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnZGF0ZV9saW5rJywgJ3Byb2plY3RfbmFtZWprbCcpO1xyXG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBkYXRlRm9ybWF0O1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgZGF0ZUxpbmtzLmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAvLyBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIFxyXG4gICAgLy8gdG9kYXkudGV4dENvbnRlbnQgPSAnVG9kYXknO1xyXG4gICAgLy8gdGhpc1dlZWsudGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJztcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0c0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcHJvamVjdHNEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XHJcblxyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNEZXNjcmlwdGlvbik7XHJcblxyXG4gICAgLy8gbmF2LmFwcGVuZENoaWxkKHRvZGF5KTtcclxuICAgIC8vIG5hdi5hcHBlbmRDaGlsZCh0aGlzV2Vlayk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGF0ZUxpbmtzKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XHJcbiAgICBcclxuICAgIHNpZGViYXJCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG5hdik7XHJcbiAgICBzaWRlYmFyQmFja2dyb3VuZC5hcHBlbmRDaGlsZChiYWNrZ29ydW5kVGV4dCk7XHJcblxyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyQmFja2dyb3VuZCk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiLCJpbXBvcnQgVUkgZnJvbSAnLi9VSSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkRGF0ZSA9IGRhdGUuZ2V0RGF0ZSgpICsgJy8nICsgZGF0ZS5nZXRNb250aCgpICsgJy8nICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGR1ZURhdGUgPSBkdWVEYXRlLnNwbGl0KCctJyk7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZS5yZXZlcnNlKCkuam9pbignLycpO1xyXG4gICAgICAgIHRoaXMudWkgPSBuZXcgVUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXRsZSA9ICgpID0+IHsgcmV0dXJuIHRoaXMudGl0bGU7IH1cclxuXHJcbiAgICBtYXJrQXNSZWFkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGFzayh0YXNrcywgaWQpIHtcclxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0aGlzLnVpLnNob3dUYXNrKGlkLCB0aGlzLnN0YXR1cywgdGhpcy50aXRsZSwgdGhpcy5kdWVEYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdHVzID0gKHN0YXR1c1RvU2V0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXNUb1NldDtcclxuICAgIH1cclxuXHJcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcclxuXHJcbmNvbnN0IFRhc2tzID0gKHByb2plY3QpID0+IHswXHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrX2NvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluX3Rhc2tzJyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICAgIGxldCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcclxuICAgIGxldCB0YXNrSWQgPSAxO1xyXG5cclxuICAgIGNvbnN0IHRhc2tzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza3NDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzX2xpc3QnKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza3NDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGRfdGFzaycpO1xyXG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICcrIGFkZCB0YXNrJztcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XHJcblxyXG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ25ld190YXNrX2Zvcm0nKTtcclxuXHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZS50eXBlID0gJ3RleHQnO1xyXG4gICAgbmFtZS5wbGFjZWhvbGRlciA9ICdUYXNrIG5hbWUnO1xyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGF0ZS50eXBlID0gJ2RhdGUnO1xyXG5cclxuICAgIGNvbnN0IHNob3ROZXdUYXNrRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBuZXdUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrRm9ybS5zdHlsZS5vcGFjaXR5KTtcclxuICAgICAgICAgICAgYWRkVGFzaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHNob3ROZXdUYXNrRm9ybSgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2NvbnRlbnQnKTtcclxuICAgICAgICBcclxuICAgICAgICBzaWRlYmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdkZWNyZWFzZU9wYWNpdHkgLjVzIGZvcndhcmRzJztcclxuICAgICAgICBtYWluQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSAnZGVjcmVhc2VPcGFjaXR5IC41cyBmb3J3YXJkcyc7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBuZXdUYXNrRm9ybS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblxyXG4gICAgICAgIHNob3dJbnB1dHMoKTtcclxuXHJcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYobmFtZS52YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhuYW1lLnZhbHVlLCBkYXRlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVGFzayh7IGlkOiB0YXNrSWQrKywgcGFyYW06IG5ld1Rhc2sgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgbWFpbkNvbnRlbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5hbmltYXRpb24gPSAnaW5jcmVhc2VPcGFjaXR5IC41cyBmb3J3YXJkcyc7XHJcbiAgICAgICAgICAgIG1haW5Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9ICdpbmNyZWFzZU9wYWNpdHkgLjVzIGZvcndhcmRzJztcclxuICAgICAgICAgICAgbmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAvLyBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlX25ld190YXNrX2Zvcm0nKTtcclxuICAgICAgICAgICAgLy8gbmV3VGFza0Zvcm0uc3R5bGUuYW5pbWF0aW9uID0gJ2hpZGVUYXNrRm9ybSAuNHMgZm9yd2FyZHMnO1xyXG4gICAgICAgICAgICBuZXdUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2hvd1Rhc2tzKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93SW5wdXRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGFkZEJ0bik7XHJcblxyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VUYXNrU3RhdHVzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgdGFza3NFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XHJcblxyXG4gICAgICAgIHRhc2tzRWxlbWVudHMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tib3ggPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcblxyXG4gICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRhc2sgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWRPZlRhc2sgPSB0YXNrLmRhdGFzZXQuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZVRhc2sgPSB0YXNrcy5maW5kKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqLmlkLnRvU3RyaW5nKCkgPT0gaWRPZlRhc2s7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzaW5nbGVUYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlVGFzay5wYXJhbS5zZXRTdGF0dXMoKHNpbmdsZVRhc2sucGFyYW0uc3RhdHVzID09PSBmYWxzZSkgPyB0cnVlIDogZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcygpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuICAgICAgICB0YXNrc0VsZW1lbnRzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFza1RvRGVsZXRlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlX3Rhc2snKTtcclxuICAgICAgICAgICAgdGFza1RvRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkT2ZUYXNrID0gdGFzay5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgdGFza3MuZmluZCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9iai5pZC50b1N0cmluZygpID09IGlkT2ZUYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dUYXNrcyA9ICgpID0+IHtcclxuICAgICAgICB0YXNrc0NvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5wYXJhbS5zaG93VGFzayh0YXNrc0NvbnRlbnQsIHRhc2suaWQpKTtcclxuICAgICAgICBjaGFuZ2VUYXNrU3RhdHVzKCk7XHJcbiAgICAgICAgZGVsZXRlVGFzaygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcclxuICAgICAgICBuZXdUYXNrRm9ybS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHNob3dUYXNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUYXNrcygpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrczsiLCJpbXBvcnQgVUkgZnJvbSAnLi9VSSc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCBUYXNrcyBmcm9tICcuL3Rhc2tzJztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcclxuXHJcbmNvbnN0IFRPRE8gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdWkgPSBuZXcgVUkoKTtcclxuXHJcbiAgICBsZXQgcHJvamVjdHNBcnJheSA9IFtuZXcgUHJvamVjdCgnTWFpbiBwcm9qZWN0JyldO1xyXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0c0FycmF5WzBdO1xyXG4gICAgYWN0aXZlUHJvamVjdC5hZGRUYXNrKHtpZDogMCwgcGFyYW06IG5ldyBUYXNrKCdUZXN0b3d5IHRhc2snLCAnMTgvMDcvMjAyMycpfSk7XHJcbiAgICBUYXNrcyhhY3RpdmVQcm9qZWN0KTtcclxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Byb2plY3RzLmNsYXNzTGlzdC5hZGQoJ25ld19wcm9qZWN0cycpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBuZXdQcm9qZWN0SW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIG5ld1Byb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3RJbnB1dCk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICduZXcnO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX2xpc3QnKTtcclxuICAgIFxyXG4gICAgbGV0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IG1haW5UYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrX2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VEYXRlRm9ybWF0VmlldyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZV9saW5rJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0ZUxpbmtzLmZvckVhY2goZGF0ZUxpbmsgPT4ge1xyXG4gICAgICAgICAgICBkYXRlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0QWxsUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0RGF0ZUZvcm1hdHMoKTtcclxuICAgICAgICAgICAgICAgIHVpLnNldEFjdGl2ZURhdGVGb3JtYXQoZGF0ZUxpbmspO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNoYW5nZURhdGVGb3JtYXRWaWV3KCk7XHJcbiAgICBjb25zdCBjaGFuZ2VQcm9qZWN0VmlldyA9ICgpID0+IHtcclxuICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHpyb2JpYyB6ZWJ5IHJlbmRlcm93YWxvIFRhc2tzKCkgeiBhcmd1bWVudGVtIGpha28gb2JpZWt0IFByb2plY3R1XHJcbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gdWkucmVzZXRQcm9qZWN0KHByb2plY3QpKTtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0RGF0ZUZvcm1hdHMoKTtcclxuICAgICAgICAgICAgICAgIG1haW5UYXNrcy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0c0FycmF5W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIFRhc2tzKHByb2plY3RzQXJyYXlbaW5kZXhdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY2hhbmdlUHJvamVjdFZpZXcoKTtcclxuXHJcbiAgICBjb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdHNMaXN0LnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgICAgIHByb2plY3RzQXJyYXkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnLCAncHJvamVjdF9uYW1lJyk7XHJcbiAgICAgICAgICAgIChpbmRleCA9PT0gMCkgPyBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfcHJvamVjdCcpIDogJyc7XHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNob3dQcm9qZWN0cygpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RIaWdobGlnaHQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHNUb0hpZ2hsaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0X25hbWUnKTtcclxuICAgICAgICBwcm9qZWN0c1RvSGlnaGxpZ2h0LmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1aS5yZXNldEFsbFByb2plY3RzKCk7XHJcbiAgICAgICAgICAgICAgICB1aS5yZXNldERhdGVGb3JtYXRzKCk7XHJcbiAgICAgICAgICAgICAgICB1aS5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gXHJcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgYWRkZWRUYXNrID0gZmFsc2U7XHJcbiAgICAgICAgbmV3UHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSAnYWRkJztcclxuXHJcbiAgICAgICAgaWYobmV3UHJvamVjdElucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RzQXJyYXkucHVzaChuZXcgUHJvamVjdChuZXdQcm9qZWN0SW5wdXQudmFsdWUpKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGFkZGVkVGFzayA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoaWRlQWRkVGFzayhhZGRlZFRhc2spO1xyXG4gICAgICAgIHNob3dQcm9qZWN0cygpOzBcclxuICAgICAgICBjaGFuZ2VQcm9qZWN0VmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGlkZUFkZFRhc2sgPSAoYWRkZWRUYXNrKSA9PiB7XHJcbiAgICAgICAgaWYoYWRkZWRUYXNrKSB7XHJcbiAgICAgICAgICAgIGFkZGVkVGFzayA9IGZhbHNlO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ25ldyc7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIG5ld1Byb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG5cclxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XHJcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0cyk7XHJcbiBcclxuICAgIGNoYW5nZVByb2plY3RWaWV3KCk7XHJcbiAgICBwcm9qZWN0SGlnaGxpZ2h0KCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUT0RPOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2Fzc2V0cy9oZWFkZXInO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL2Fzc2V0cy9zaWRlYmFyJztcclxuaW1wb3J0IFRPRE8gZnJvbSAnLi9hc3NldHMvdG9kbyc7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vYXNzZXRzL21vYmlsZU1lbnUnO1xyXG5pbXBvcnQgJy4vc2Fzcy9tYWluLnNjc3MnO1xyXG5cclxuSGVhZGVyKCk7XHJcblNpZGViYXIoKTtcclxuVE9ETygpO1xyXG5Nb2JpbGVNZW51KCk7XHJcbi8vIEZvb3RlcigpO1xyXG4vLyBUYXNrcygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=