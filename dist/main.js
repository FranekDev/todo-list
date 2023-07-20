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
        link.classList.add('date_link', 'project_name');
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
        newTaskForm.textContent = '';
        newTaskForm.style.position = 'absolute';
        showInputs();
        addBtn.addEventListener('click', () => {
            if(name.value.trim().length > 0) {
                let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](name.value, date.value);
                project.addTask({ id: taskId++, param: newTask });
            }
            showTasks();
            name.value = '';
            newTaskForm.classList.add('hide_new_task_form');
            // setTimeout(() => {
                newTaskForm.style.display = 'none';
            // }, 300);
        });
    };

    const showInputs = () => {
        
        newTaskForm.appendChild(name);
        newTaskForm.appendChild(date);
        newTaskForm.appendChild(addBtn);
        main.appendChild(newTaskForm);
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
/* harmony import */ var _assets_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/tasks */ "./src/assets/tasks.js");
/* harmony import */ var _assets_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/footer */ "./src/assets/footer.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");







(0,_assets_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_assets_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_assets_todo__WEBPACK_IMPORTED_MODULE_2__["default"])();
// Footer();
// Tasks();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0RBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7VUM3SG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNFO0FBQ047QUFDRTtBQUNFO0FBQ1g7QUFDMUI7QUFDQSwwREFBTTtBQUNOLDJEQUFPO0FBQ1Asd0RBQUk7QUFDSjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Nhc3MvbWFpbi5zY3NzP2NmNzYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cclxuXHJcbiAgICBhZGRUYXNrID0gKHRhc2tUb0FkZCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrVG9BZGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tzKCkgeyByZXR1cm4gdGhpcy50YXNrczsgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gICAgc2hvd1Rhc2sgPSAoaWQsIHN0YXR1cywgdGFza1RpdGxlLCBkdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgICAgIChzdGF0dXMgPT09IGZhbHNlKSA/IHRhc2suY2xhc3NMaXN0LmFkZCgnbm90X2ZpbmlzaGVkJykgOiB0YXNrLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkJyk7XHJcbiAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza190aXRsZScpO1xyXG5cclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcmVhZC50eXBlID0gJ2NoZWNrYm94JztcclxuXHJcbiAgICAgICAgcmVhZC5jaGVja2VkID0gKHN0YXR1cyA9PT0gdHJ1ZSkgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWFpbkluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xyXG4gICAgICAgIG1haW5JbmZvLmFwcGVuZENoaWxkKHJlYWQpO1xyXG4gICAgICAgIG1haW5JbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNlY29uZGFyeUluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xyXG5cclxuICAgICAgICBjb25zdCBwaWNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcGlja0RhdGUudHlwZSA9ICdkYXRlJztcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZV90YXNrJyk7XHJcbiAgICAgICAgcmVtb3ZlLnRleHRDb250ZW50ID0gJ0RlbCc7XHJcblxyXG4gICAgICAgIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChyZW1vdmUpO1xyXG5cclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKG1haW5JbmZvKTtcclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHNlY29uZGFyeUluZm8pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Byb2plY3QgPSAocHJvamVjdHNBcnJheSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19saXN0Jyk7XHJcbiAgICAgICAgcHJvamVjdHNMaXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGlmKCFwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlX3Byb2plY3QnKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0UHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgaWYocHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfcHJvamVjdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldEFsbFByb2plY3RzKCkge1xyXG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcclxuXHJcbiAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgaWYocHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZV9wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3Byb2plY3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZURhdGVGb3JtYXQoZGF0ZUxpbmspIHtcclxuICAgICAgICBpZighZGF0ZUxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVfcHJvamVjdCcpKSB7XHJcbiAgICAgICAgICAgIGRhdGVMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZGF0ZUxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVfcHJvamVjdCcpKSB7XHJcbiAgICAgICAgICAgIGRhdGVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0RGF0ZUZvcm1hdHMoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVfbGluaycpO1xyXG4gICAgICAgIGRhdGVMaW5rcy5mb3JFYWNoKGRhdGVMaW5rID0+IHtcclxuICAgICAgICAgICAgaWYoZGF0ZUxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVfcHJvamVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfcHJvamVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSBGcmFuZWtEZXYgJztcclxuICAgIGdpdGh1YkxpbmsudGV4dENvbnRlbnQgPSAnR2l0SHViJztcclxuICAgIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vRnJhbmVrRGV2L3RvZG8tbGlzdCc7XHJcbiAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cclxuICAgIC8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluX2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xyXG5cclxuICAgIFxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHApO1xyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YXNrX2NvbnRlbnQnKTtcclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xyXG4gICAgLy8gYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgLy8gYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIEZvb3RlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcclxuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICAgIGxldCB1aSA9IG5ldyBVSSgpO1xyXG4gICAgLy8gdWkuc2hvd1Byb2plY3QoKTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcclxuXHJcbiAgICBjb25zdCBzaWRlYmFyQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2lkZWJhckJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcl9iZycpO1xyXG5cclxuICAgIGNvbnN0IGJhY2tnb3J1bmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiYWNrZ29ydW5kVGV4dC5jbGFzc0xpc3QuYWRkKCdiZ190ZXh0Jyk7XHJcbiAgICBjb25zdCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRleHRTcGFuLnRleHRDb250ZW50ID0gJ1RvRG8nO1xyXG4gICAgYmFja2dvcnVuZFRleHQuYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xyXG4gICAgXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCd0b2RvX25hdicpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgZGF0ZUxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGRhdGVMaW5rcy5jbGFzc0xpc3QuYWRkKCdkYXRlX2xpbmtzJyk7XHJcbiAgICBsZXQgZGF0ZUZvcm1hdHMgPSBbJ1RvZGF5JywgJ1RoaXMgd2VlayddO1xyXG5cclxuICAgIGRhdGVGb3JtYXRzLmZvckVhY2goZGF0ZUZvcm1hdCA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2RhdGVfbGluaycsICdwcm9qZWN0X25hbWUnKTtcclxuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gZGF0ZUZvcm1hdDtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgIGRhdGVMaW5rcy5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgLy8gY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBcclxuICAgIC8vIHRvZGF5LnRleHRDb250ZW50ID0gJ1RvZGF5JztcclxuICAgIC8vIHRoaXNXZWVrLnRleHRDb250ZW50ID0gJ1RoaXMgd2Vlayc7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHByb2plY3RzRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xyXG5cclxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzRGVzY3JpcHRpb24pO1xyXG5cclxuICAgIC8vIG5hdi5hcHBlbmRDaGlsZCh0b2RheSk7XHJcbiAgICAvLyBuYXYuYXBwZW5kQ2hpbGQodGhpc1dlZWspO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGRhdGVMaW5rcyk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xyXG4gICAgXHJcbiAgICBzaWRlYmFyQmFja2dyb3VuZC5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgc2lkZWJhckJhY2tncm91bmQuYXBwZW5kQ2hpbGQoYmFja2dvcnVuZFRleHQpO1xyXG5cclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckJhY2tncm91bmQpO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7IiwiaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZERhdGUgPSBkYXRlLmdldERhdGUoKSArICcvJyArIGRhdGUuZ2V0TW9udGgoKSArICcvJyArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBkdWVEYXRlID0gZHVlRGF0ZS5zcGxpdCgnLScpO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUucmV2ZXJzZSgpLmpvaW4oJy8nKTtcclxuICAgICAgICB0aGlzLnVpID0gbmV3IFVJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUgPSAoKSA9PiB7IHJldHVybiB0aGlzLnRpdGxlOyB9XHJcblxyXG4gICAgbWFya0FzUmVhZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Rhc2sodGFza3MsIGlkKSB7XHJcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQodGhpcy51aS5zaG93VGFzayhpZCwgdGhpcy5zdGF0dXMsIHRoaXMudGl0bGUsIHRoaXMuZHVlRGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1cyA9IChzdGF0dXNUb1NldCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzVG9TZXQ7XHJcbiAgICB9XHJcblxyXG59OyIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcblxyXG5jb25zdCBUYXNrcyA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnUHJvamVjdDogJywgcHJvamVjdCk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrX2NvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluX3Rhc2tzJyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICAgIGxldCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdUYXNrczogJywgdGFza3MpO1xyXG4gICAgbGV0IHRhc2tJZCA9IDE7XHJcblxyXG4gICAgY29uc3QgdGFza3NDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrc0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFza3NfbGlzdCcpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrc0NvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZF90YXNrJyk7XHJcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJysgYWRkIHRhc2snO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcclxuXHJcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3X3Rhc2tfZm9ybScpO1xyXG5cclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBuYW1lLnR5cGUgPSAndGV4dCc7XHJcbiAgICBuYW1lLnBsYWNlaG9sZGVyID0gJ1Rhc2sgbmFtZSc7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkYXRlLnR5cGUgPSAnZGF0ZSc7XHJcblxyXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBuZXdUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGFkZFRhc2soKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHNob3dJbnB1dHMoKTtcclxuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG5hbWUudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sobmFtZS52YWx1ZSwgZGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRhc2soeyBpZDogdGFza0lkKyssIHBhcmFtOiBuZXdUYXNrIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNob3dUYXNrcygpO1xyXG4gICAgICAgICAgICBuYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGVfbmV3X3Rhc2tfZm9ybScpO1xyXG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ld1Rhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIC8vIH0sIDMwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dJbnB1dHMgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2hhbmdlVGFza1N0YXR1cyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHRhc2tzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xyXG4gICAgICAgIHRhc2tzRWxlbWVudHMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tib3ggPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGFzayA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgICAgIGxldCBpZE9mVGFzayA9IHRhc2suZGF0YXNldC5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2luZ2xlVGFzayA9IHRhc2tzLmZpbmQoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmouaWQudG9TdHJpbmcoKSA9PSBpZE9mVGFzaztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNpbmdsZVRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICBzaW5nbGVUYXNrLnBhcmFtLnNldFN0YXR1cygoc2luZ2xlVGFzay5wYXJhbS5zdGF0dXMgPT09IGZhbHNlKSA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRhc2tzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xyXG4gICAgICAgIHRhc2tzRWxlbWVudHMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrVG9EZWxldGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVfdGFzaycpO1xyXG4gICAgICAgICAgICB0YXNrVG9EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWRPZlRhc2sgPSB0YXNrLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgICAgICAgICB0YXNrcy5maW5kKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLmlkLnRvU3RyaW5nKCkgPT0gaWRPZlRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcygpO1xyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd1Rhc2tzID0gKCkgPT4ge1xyXG4gICAgICAgIHRhc2tzQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB0YXNrLnBhcmFtLnNob3dUYXNrKHRhc2tzQ29udGVudCwgdGFzay5pZCkpO1xyXG4gICAgICAgIGNoYW5nZVRhc2tTdGF0dXMoKTtcclxuICAgICAgICBkZWxldGVUYXNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlclRhc2tzID0gKCkgPT4ge1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgc2hvd1Rhc2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Rhc2tzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tzOyIsImltcG9ydCBVSSBmcm9tICcuL1VJJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcclxuaW1wb3J0IFRhc2tzIGZyb20gJy4vdGFza3MnO1xyXG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xyXG5cclxuY29uc3QgVE9ETyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB1aSA9IG5ldyBVSSgpO1xyXG5cclxuICAgIGxldCBwcm9qZWN0c0FycmF5ID0gW25ldyBQcm9qZWN0KCdNYWluIHByb2plY3QnKV07XHJcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzQXJyYXlbMF07XHJcbiAgICBhY3RpdmVQcm9qZWN0LmFkZFRhc2soe2lkOiAwLCBwYXJhbTogbmV3IFRhc2soJ1Rlc3Rvd3kgdGFzaycsICcxOC8wNy8yMDIzJyl9KTtcclxuICAgIFRhc2tzKGFjdGl2ZVByb2plY3QpO1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3UHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnbmV3X3Byb2plY3RzJyk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5ld1Byb2plY3RJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgbmV3UHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdElucHV0KTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ25ldyc7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfbGlzdCcpO1xyXG4gICAgXHJcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgbWFpblRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tfY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZURhdGVGb3JtYXRWaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlX2xpbmsnKTtcclxuICAgICAgICBcclxuICAgICAgICBkYXRlTGlua3MuZm9yRWFjaChkYXRlTGluayA9PiB7XHJcbiAgICAgICAgICAgIGRhdGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdWkucmVzZXRBbGxQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdWkucmVzZXREYXRlRm9ybWF0cygpO1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0QWN0aXZlRGF0ZUZvcm1hdChkYXRlTGluayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlRGF0ZUZvcm1hdFZpZXcoKTtcclxuICAgIGNvbnN0IGNoYW5nZVByb2plY3RWaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8genJvYmljIHplYnkgcmVuZGVyb3dhbG8gVGFza3MoKSB6IGFyZ3VtZW50ZW0gamFrbyBvYmlla3QgUHJvamVjdHVcclxuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB1aS5yZXNldFByb2plY3QocHJvamVjdCkpO1xyXG4gICAgICAgICAgICAgICAgdWkucmVzZXREYXRlRm9ybWF0cygpO1xyXG4gICAgICAgICAgICAgICAgbWFpblRhc2tzLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB1aS5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzQXJyYXlbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgVGFza3MocHJvamVjdHNBcnJheVtpbmRleF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjaGFuZ2VQcm9qZWN0VmlldygpO1xyXG5cclxuICAgIGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0c0xpc3QudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICAgICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdwcm9qZWN0X25hbWUnKTtcclxuICAgICAgICAgICAgKGluZGV4ID09PSAwKSA/IHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9wcm9qZWN0JykgOiAnJztcclxuICAgICAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcclxuICAgIH07XHJcblxyXG4gICAgc2hvd1Byb2plY3RzKCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEhpZ2hsaWdodCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0c1RvSGlnaGxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RfbmFtZScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzVG9IaWdobGlnaHQubGVuZ3RoKTtcclxuICAgICAgICBwcm9qZWN0c1RvSGlnaGxpZ2h0LmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1aS5yZXNldEFsbFByb2plY3RzKCk7XHJcbiAgICAgICAgICAgICAgICB1aS5yZXNldERhdGVGb3JtYXRzKCk7XHJcbiAgICAgICAgICAgICAgICB1aS5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGFkZGVkVGFzayA9IGZhbHNlO1xyXG4gICAgICAgIG5ld1Byb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ2FkZCc7XHJcblxyXG4gICAgICAgIGlmKG5ld1Byb2plY3RJbnB1dC52YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3IFByb2plY3QobmV3UHJvamVjdElucHV0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBhZGRlZFRhc2sgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGlkZUFkZFRhc2soYWRkZWRUYXNrKTtcclxuICAgICAgICBzaG93UHJvamVjdHMoKTswXHJcbiAgICAgICAgY2hhbmdlUHJvamVjdFZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhpZGVBZGRUYXNrID0gKGFkZGVkVGFzaykgPT4ge1xyXG4gICAgICAgIGlmKGFkZGVkVGFzaykge1xyXG4gICAgICAgICAgICBhZGRlZFRhc2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICduZXcnO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBuZXdQcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3QpO1xyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdHMpO1xyXG4gXHJcbiAgICBjaGFuZ2VQcm9qZWN0VmlldygpO1xyXG4gICAgcHJvamVjdEhpZ2hsaWdodCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUT0RPOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2Fzc2V0cy9oZWFkZXInO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL2Fzc2V0cy9zaWRlYmFyJztcclxuaW1wb3J0IFRPRE8gZnJvbSAnLi9hc3NldHMvdG9kbyc7XHJcbmltcG9ydCBUYXNrcyBmcm9tICcuL2Fzc2V0cy90YXNrcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9hc3NldHMvZm9vdGVyJztcclxuaW1wb3J0ICcuL3Nhc3MvbWFpbi5zY3NzJztcclxuXHJcbkhlYWRlcigpO1xyXG5TaWRlYmFyKCk7XHJcblRPRE8oKTtcclxuLy8gRm9vdGVyKCk7XHJcbi8vIFRhc2tzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==