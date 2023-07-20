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

    let showMenu = false;
    burgerMenu.addEventListener('click', () => {
        
        if(!showMenu) {
            topLine.classList.remove('deactivate');
            middleLine.classList.remove('deactivate');
            bottomLine.classList.remove('deactivate');
            topLine.style.position = 'absolute';
            middleLine.style.position = 'absolute';
            bottomLine.style.position = 'absolute';
            topLine.classList.add('active');
            middleLine.classList.add('active');
            bottomLine.classList.add('active');
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
            }, 400);

            showMenu = false;
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



const Tasks = (project) => {
    // console.log('Project: ', project);

    const content = document.querySelector('.task_content');
    
    const main = document.createElement('div');
    main.classList.add('main_tasks');
    content.appendChild(main);

    let tasks = project.getTasks();
    // console.log('Tasks: ', tasks);
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

    addTaskBtn.addEventListener('click', () => {
        newTaskForm.style.display = 'flex';
        addTask();
    });
    
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

            showTasks();

            sidebar.style.opacity = '1';
            mainContent.style.opacity = '1';
            sidebar.style.animation = 'increaseOpacity .5s forwards';
            mainContent.style.animation = 'increaseOpacity .5s forwards';
            name.value = '';
            newTaskForm.classList.add('hide_new_task_form');
            newTaskForm.style.animation = 'hideTaskForm .7s forwards';

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
        console.log(projectsToHighlight.length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQzFCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDakJTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBTTtBQUNWO0FBQ0E7QUFDQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7OztBQzFCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FDeERPO0FBQ1Y7QUFDdEI7QUFDQTtBQUNBLGlCQUFpQiwyQ0FBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDdEI7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkNBQUU7QUFDeEI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUIwQjtBQUNNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNkNBQUk7QUFDdEMsa0NBQWtDLDhCQUE4QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SUU7QUFDVTtBQUNKO0FBQ0Y7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJDQUFFO0FBQ3JCO0FBQ0EsNkJBQTZCLGdEQUFPO0FBQ3BDO0FBQ0EsMkJBQTJCLGtCQUFrQiw2Q0FBSSwrQkFBK0I7QUFDaEYsSUFBSSxrREFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQUs7QUFDckIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdEQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7VUMvSG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0U7QUFDTjtBQUNZO0FBQ25CO0FBQzFCO0FBQ0EsMERBQU07QUFDTiwyREFBTztBQUNQLHdEQUFJO0FBQ0osOERBQVU7QUFDVjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvbW9iaWxlTWVudS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxyXG5cclxuICAgIGFkZFRhc2sgPSAodGFza1RvQWRkKSA9PiB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2tUb0FkZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza3MoKSB7IHJldHVybiB0aGlzLnRhc2tzOyB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XHJcbiAgICBzaG93VGFzayA9IChpZCwgc3RhdHVzLCB0YXNrVGl0bGUsIGR1ZURhdGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICAgICAgKHN0YXR1cyA9PT0gZmFsc2UpID8gdGFzay5jbGFzc0xpc3QuYWRkKCdub3RfZmluaXNoZWQnKSA6IHRhc2suY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKTtcclxuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrX3RpdGxlJyk7XHJcblxyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza1RpdGxlO1xyXG5cclxuICAgICAgICBjb25zdCByZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICByZWFkLnR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICAgICAgICByZWFkLmNoZWNrZWQgPSAoc3RhdHVzID09PSB0cnVlKSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtYWluSW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XHJcbiAgICAgICAgbWFpbkluZm8uYXBwZW5kQ2hpbGQocmVhZCk7XHJcbiAgICAgICAgbWFpbkluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWNvbmRhcnlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2Vjb25kYXJ5SW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpY2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBwaWNrRGF0ZS50eXBlID0gJ2RhdGUnO1xyXG5cclxuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByZW1vdmUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlX3Rhc2snKTtcclxuICAgICAgICByZW1vdmUudGV4dENvbnRlbnQgPSAnRGVsJztcclxuXHJcbiAgICAgICAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgICAgICBzZWNvbmRhcnlJbmZvLmFwcGVuZENoaWxkKHJlbW92ZSk7XHJcblxyXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQobWFpbkluZm8pO1xyXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5SW5mbyk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdGFzaztcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvamVjdCA9IChwcm9qZWN0c0FycmF5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX2xpc3QnKTtcclxuICAgICAgICBwcm9qZWN0c0xpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBwcm9qZWN0c0FycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgICAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgaWYoIXByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVfcHJvamVjdCcpKSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBpZihwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlX3Byb2plY3QnKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xyXG5cclxuICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlX3Byb2plY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfcHJvamVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlRGF0ZUZvcm1hdChkYXRlTGluaykge1xyXG4gICAgICAgIGlmKCFkYXRlTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgZGF0ZUxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihkYXRlTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgZGF0ZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXREYXRlRm9ybWF0cygpIHtcclxuICAgICAgICBjb25zdCBkYXRlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZV9saW5rJyk7XHJcbiAgICAgICAgZGF0ZUxpbmtzLmZvckVhY2goZGF0ZUxpbmsgPT4ge1xyXG4gICAgICAgICAgICBpZihkYXRlTGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fY29udGVudCcpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5IEZyYW5la0RldiAnO1xyXG4gICAgZ2l0aHViTGluay50ZXh0Q29udGVudCA9ICdHaXRIdWInO1xyXG4gICAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9GcmFuZWtEZXYvdG9kby1saXN0JztcclxuICAgIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblxyXG4gICAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW5fY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLnRleHRDb250ZW50ID0gJ1RvZG8gTGlzdCc7XHJcblxyXG4gICAgXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2tfY29udGVudCcpO1xyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XHJcbiAgICAvLyBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAvLyBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgRm9vdGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJjb25zdCBNb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIFxyXG4gICAgY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKCdidXJnZXJfbWVudScpO1xyXG5cclxuICAgIGNvbnN0IHRvcExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvcExpbmUuY2xhc3NMaXN0LmFkZCgndG9wX2xpbmUnKTtcclxuXHJcbiAgICBjb25zdCBtaWRkbGVMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtaWRkbGVMaW5lLmNsYXNzTGlzdC5hZGQoJ21pZGRsZV9saW5lJyk7XHJcblxyXG4gICAgY29uc3QgYm90dG9tTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm90dG9tTGluZS5jbGFzc0xpc3QuYWRkKCdib3R0b21fbGluZScpO1xyXG5cclxuXHJcbiAgICBidXJnZXJNZW51LmFwcGVuZENoaWxkKHRvcExpbmUpO1xyXG4gICAgYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChtaWRkbGVMaW5lKTtcclxuICAgIGJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQoYm90dG9tTGluZSk7XHJcbiAgICBcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYnVyZ2VyTWVudSk7XHJcblxyXG4gICAgbGV0IHNob3dNZW51ID0gZmFsc2U7XHJcbiAgICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFzaG93TWVudSkge1xyXG4gICAgICAgICAgICB0b3BMaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGUnKTtcclxuICAgICAgICAgICAgbWlkZGxlTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlJyk7XHJcbiAgICAgICAgICAgIGJvdHRvbUxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnZGVhY3RpdmF0ZScpO1xyXG4gICAgICAgICAgICB0b3BMaW5lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgbWlkZGxlTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIGJvdHRvbUxpbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICB0b3BMaW5lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtaWRkbGVMaW5lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBib3R0b21MaW5lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBzaG93TWVudSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b3BMaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtaWRkbGVMaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBib3R0b21MaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0b3BMaW5lLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcclxuICAgICAgICAgICAgbWlkZGxlTGluZS5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XHJcbiAgICAgICAgICAgIGJvdHRvbUxpbmUuY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZScpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRvcExpbmUuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcclxuICAgICAgICAgICAgbWlkZGxlTGluZS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgICAgICAgICBib3R0b21MaW5lLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcblxyXG4gICAgICAgICAgICBzaG93TWVudSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG5pbXBvcnQgVUkgZnJvbSAnLi9VSSc7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgbGV0IHVpID0gbmV3IFVJKCk7XHJcbiAgICAvLyB1aS5zaG93UHJvamVjdCgpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpO1xyXG5cclxuICAgIGNvbnN0IHNpZGViYXJCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaWRlYmFyQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX2JnJyk7XHJcblxyXG4gICAgY29uc3QgYmFja2dvcnVuZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJhY2tnb3J1bmRUZXh0LmNsYXNzTGlzdC5hZGQoJ2JnX3RleHQnKTtcclxuICAgIGNvbnN0IHRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSAnVG9Ebyc7XHJcbiAgICBiYWNrZ29ydW5kVGV4dC5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XHJcbiAgICBcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ3RvZG9fbmF2Jyk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBkYXRlTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgZGF0ZUxpbmtzLmNsYXNzTGlzdC5hZGQoJ2RhdGVfbGlua3MnKTtcclxuICAgIGxldCBkYXRlRm9ybWF0cyA9IFsnVG9kYXknLCAnVGhpcyB3ZWVrJ107XHJcblxyXG4gICAgZGF0ZUZvcm1hdHMuZm9yRWFjaChkYXRlRm9ybWF0ID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnZGF0ZV9saW5rJywgJ3Byb2plY3RfbmFtZWprbCcpO1xyXG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBkYXRlRm9ybWF0O1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgZGF0ZUxpbmtzLmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAvLyBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIFxyXG4gICAgLy8gdG9kYXkudGV4dENvbnRlbnQgPSAnVG9kYXknO1xyXG4gICAgLy8gdGhpc1dlZWsudGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJztcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0c0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcHJvamVjdHNEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XHJcblxyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNEZXNjcmlwdGlvbik7XHJcblxyXG4gICAgLy8gbmF2LmFwcGVuZENoaWxkKHRvZGF5KTtcclxuICAgIC8vIG5hdi5hcHBlbmRDaGlsZCh0aGlzV2Vlayk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGF0ZUxpbmtzKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XHJcbiAgICBcclxuICAgIHNpZGViYXJCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG5hdik7XHJcbiAgICBzaWRlYmFyQmFja2dyb3VuZC5hcHBlbmRDaGlsZChiYWNrZ29ydW5kVGV4dCk7XHJcblxyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyQmFja2dyb3VuZCk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiLCJpbXBvcnQgVUkgZnJvbSAnLi9VSSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkRGF0ZSA9IGRhdGUuZ2V0RGF0ZSgpICsgJy8nICsgZGF0ZS5nZXRNb250aCgpICsgJy8nICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGR1ZURhdGUgPSBkdWVEYXRlLnNwbGl0KCctJyk7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZS5yZXZlcnNlKCkuam9pbignLycpO1xyXG4gICAgICAgIHRoaXMudWkgPSBuZXcgVUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXRsZSA9ICgpID0+IHsgcmV0dXJuIHRoaXMudGl0bGU7IH1cclxuXHJcbiAgICBtYXJrQXNSZWFkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGFzayh0YXNrcywgaWQpIHtcclxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0aGlzLnVpLnNob3dUYXNrKGlkLCB0aGlzLnN0YXR1cywgdGhpcy50aXRsZSwgdGhpcy5kdWVEYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdHVzID0gKHN0YXR1c1RvU2V0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXNUb1NldDtcclxuICAgIH1cclxuXHJcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcclxuXHJcbmNvbnN0IFRhc2tzID0gKHByb2plY3QpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdQcm9qZWN0OiAnLCBwcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tfY29udGVudCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW5fdGFza3MnKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgbGV0IHRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1Rhc2tzOiAnLCB0YXNrcyk7XHJcbiAgICBsZXQgdGFza0lkID0gMTtcclxuXHJcbiAgICBjb25zdCB0YXNrc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tzQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YXNrc19saXN0Jyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tzQ29udGVudCk7XHJcblxyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkX3Rhc2snKTtcclxuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnKyBhZGQgdGFzayc7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG5cclxuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCduZXdfdGFza19mb3JtJyk7XHJcblxyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWUudHlwZSA9ICd0ZXh0JztcclxuICAgIG5hbWUucGxhY2Vob2xkZXIgPSAnVGFzayBuYW1lJztcclxuXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGUudHlwZSA9ICdkYXRlJztcclxuXHJcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgYWRkVGFzaygpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9jb250ZW50Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2lkZWJhci5zdHlsZS5hbmltYXRpb24gPSAnZGVjcmVhc2VPcGFjaXR5IC41cyBmb3J3YXJkcyc7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gJ2RlY3JlYXNlT3BhY2l0eSAuNXMgZm9yd2FyZHMnO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuICAgICAgICBzaG93SW5wdXRzKCk7XHJcblxyXG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKG5hbWUudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sobmFtZS52YWx1ZSwgZGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRhc2soeyBpZDogdGFza0lkKyssIHBhcmFtOiBuZXdUYXNrIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzaG93VGFza3MoKTtcclxuXHJcbiAgICAgICAgICAgIHNpZGViYXIuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgbWFpbkNvbnRlbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgc2lkZWJhci5zdHlsZS5hbmltYXRpb24gPSAnaW5jcmVhc2VPcGFjaXR5IC41cyBmb3J3YXJkcyc7XHJcbiAgICAgICAgICAgIG1haW5Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9ICdpbmNyZWFzZU9wYWNpdHkgLjVzIGZvcndhcmRzJztcclxuICAgICAgICAgICAgbmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlX25ld190YXNrX2Zvcm0nKTtcclxuICAgICAgICAgICAgbmV3VGFza0Zvcm0uc3R5bGUuYW5pbWF0aW9uID0gJ2hpZGVUYXNrRm9ybSAuN3MgZm9yd2FyZHMnO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0lucHV0cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG5cclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2hhbmdlVGFza1N0YXR1cyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHRhc2tzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xyXG5cclxuICAgICAgICB0YXNrc0VsZW1lbnRzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgbGV0IGNoZWNrYm94ID0gdGFzay5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXNrID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkT2ZUYXNrID0gdGFzay5kYXRhc2V0LmlkO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzaW5nbGVUYXNrID0gdGFza3MuZmluZCgob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iai5pZC50b1N0cmluZygpID09IGlkT2ZUYXNrO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2luZ2xlVGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbmdsZVRhc2sucGFyYW0uc2V0U3RhdHVzKChzaW5nbGVUYXNrLnBhcmFtLnN0YXR1cyA9PT0gZmFsc2UpID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdGFza3NFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XHJcbiAgICAgICAgdGFza3NFbGVtZW50cy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLmRlbGV0ZV90YXNrJyk7XHJcbiAgICAgICAgICAgIHRhc2tUb0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZE9mVGFzayA9IHRhc2suZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgICAgIHRhc2tzLmZpbmQoKG9iaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihvYmouaWQudG9TdHJpbmcoKSA9PSBpZE9mVGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93VGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgdGFza3NDb250ZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHRhc2sucGFyYW0uc2hvd1Rhc2sodGFza3NDb250ZW50LCB0YXNrLmlkKSk7XHJcbiAgICAgICAgY2hhbmdlVGFza1N0YXR1cygpO1xyXG4gICAgICAgIGRlbGV0ZVRhc2soKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBzaG93VGFza3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGFza3MoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza3M7IiwiaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG5pbXBvcnQgVGFza3MgZnJvbSAnLi90YXNrcyc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XHJcblxyXG5jb25zdCBUT0RPID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHVpID0gbmV3IFVJKCk7XHJcblxyXG4gICAgbGV0IHByb2plY3RzQXJyYXkgPSBbbmV3IFByb2plY3QoJ01haW4gcHJvamVjdCcpXTtcclxuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHNBcnJheVswXTtcclxuICAgIGFjdGl2ZVByb2plY3QuYWRkVGFzayh7aWQ6IDAsIHBhcmFtOiBuZXcgVGFzaygnVGVzdG93eSB0YXNrJywgJzE4LzA3LzIwMjMnKX0pO1xyXG4gICAgVGFza3MoYWN0aXZlUHJvamVjdCk7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCduZXdfcHJvamVjdHMnKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmV3UHJvamVjdElucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBuZXdQcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSAnbmV3JztcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RzTGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c19saXN0Jyk7XHJcbiAgICBcclxuICAgIGxldCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBtYWluVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza19jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlRGF0ZUZvcm1hdFZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVfbGluaycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRhdGVMaW5rcy5mb3JFYWNoKGRhdGVMaW5rID0+IHtcclxuICAgICAgICAgICAgZGF0ZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1aS5yZXNldEFsbFByb2plY3RzKCk7XHJcbiAgICAgICAgICAgICAgICB1aS5yZXNldERhdGVGb3JtYXRzKCk7XHJcbiAgICAgICAgICAgICAgICB1aS5zZXRBY3RpdmVEYXRlRm9ybWF0KGRhdGVMaW5rKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VEYXRlRm9ybWF0VmlldygpO1xyXG4gICAgY29uc3QgY2hhbmdlUHJvamVjdFZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB6cm9iaWMgemVieSByZW5kZXJvd2FsbyBUYXNrcygpIHogYXJndW1lbnRlbSBqYWtvIG9iaWVrdCBQcm9qZWN0dVxyXG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHVpLnJlc2V0UHJvamVjdChwcm9qZWN0KSk7XHJcbiAgICAgICAgICAgICAgICB1aS5yZXNldERhdGVGb3JtYXRzKCk7XHJcbiAgICAgICAgICAgICAgICBtYWluVGFza3MudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgIHVpLnNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHNBcnJheVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICBUYXNrcyhwcm9qZWN0c0FycmF5W2luZGV4XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNoYW5nZVByb2plY3RWaWV3KCk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzTGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgICAgICBwcm9qZWN0c0FycmF5LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JywgJ3Byb2plY3RfbmFtZScpO1xyXG4gICAgICAgICAgICAoaW5kZXggPT09IDApID8gcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3Byb2plY3QnKSA6ICcnO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGluay50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaW5rKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzaG93UHJvamVjdHMoKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0SGlnaGxpZ2h0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzVG9IaWdobGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdF9uYW1lJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNUb0hpZ2hsaWdodC5sZW5ndGgpO1xyXG4gICAgICAgIHByb2plY3RzVG9IaWdobGlnaHQuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0QWxsUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHVpLnJlc2V0RGF0ZUZvcm1hdHMoKTtcclxuICAgICAgICAgICAgICAgIHVpLnNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiBcclxuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBhZGRlZFRhc2sgPSBmYWxzZTtcclxuICAgICAgICBuZXdQcm9qZWN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICdhZGQnO1xyXG5cclxuICAgICAgICBpZihuZXdQcm9qZWN0SW5wdXQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKG5ldyBQcm9qZWN0KG5ld1Byb2plY3RJbnB1dC52YWx1ZSkpO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgYWRkZWRUYXNrID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhpZGVBZGRUYXNrKGFkZGVkVGFzayk7XHJcbiAgICAgICAgc2hvd1Byb2plY3RzKCk7MFxyXG4gICAgICAgIGNoYW5nZVByb2plY3RWaWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoaWRlQWRkVGFzayA9IChhZGRlZFRhc2spID0+IHtcclxuICAgICAgICBpZihhZGRlZFRhc2spIHtcclxuICAgICAgICAgICAgYWRkZWRUYXNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSAnbmV3JztcclxuICAgICAgICAgICAgbmV3UHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgbmV3UHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcblxyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcclxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3RzKTtcclxuIFxyXG4gICAgY2hhbmdlUHJvamVjdFZpZXcoKTtcclxuICAgIHByb2plY3RIaWdobGlnaHQoKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRPRE87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vYXNzZXRzL2hlYWRlcic7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vYXNzZXRzL3NpZGViYXInO1xyXG5pbXBvcnQgVE9ETyBmcm9tICcuL2Fzc2V0cy90b2RvJztcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9hc3NldHMvbW9iaWxlTWVudSc7XHJcbmltcG9ydCAnLi9zYXNzL21haW4uc2Nzcyc7XHJcblxyXG5IZWFkZXIoKTtcclxuU2lkZWJhcigpO1xyXG5UT0RPKCk7XHJcbk1vYmlsZU1lbnUoKTtcclxuLy8gRm9vdGVyKCk7XHJcbi8vIFRhc2tzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==