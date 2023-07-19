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

    const content = document.querySelector('.content');
    const footer = document.createElement('footer');
    const githubLink = document.createElement('a');

    footer.textContent = 'Created by FranekDev ';
    githubLink.textContent = 'GitHub';
    githubLink.href = 'https://github.com/FranekDev/todo-list';
    githubLink.setAttribute('target', '_blank');

    footer.appendChild(githubLink);
    content.appendChild(footer);

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
const Header = () => {
    const body = document.querySelector('body');
    const header = document.createElement('header');

    const content = document.createElement('div');
    content.classList.add('content');

    const p = document.createElement('p');
    p.textContent = 'Todo List';
    
    header.appendChild(p);
    content.appendChild(header);
    body.appendChild(content);
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
const Sidebar = () => {
    const body = document.querySelector('body');
    const sidebar = document.createElement('aside');
    sidebar.classList.add('sidebar');
    body.appendChild(sidebar);

    const backgorundText = document.createElement('div');
    backgorundText.classList.add('bg_text');
    const textSpan = document.createElement('span');
    textSpan.textContent = 'ToDo';
    backgorundText.appendChild(textSpan);
    
    const nav = document.createElement('nav');
    nav.classList.add('todo_nav');
    
    const today = document.createElement('a');
    const thisWeek = document.createElement('a');
    
    today.textContent = 'Today';
    thisWeek.textContent = 'This week';

    const projects = document.createElement('div');
    projects.classList.add('projects');

    const projectsDescription = document.createElement('span');
    projectsDescription.textContent = 'Projects';

    projects.appendChild(projectsDescription);

    const projectsList = document.createElement('div');
    projectsList.classList.add('projects_list');

    const mainProject = document.createElement('a');
    mainProject.textContent = 'Main Project';
    
    projectsList.appendChild(mainProject);

    const newProjects = document.createElement('div');
    newProjects.classList.add('new_projects');

    const newProjectInput = document.createElement('input');
    newProjectInput.type = 'text';
    newProjects.appendChild(newProjectInput);

    const newProject = document.createElement('button');
    newProject.textContent = 'new';

    
    newProject.addEventListener('click', () => {
        let addedTask = false;
        newProjectInput.style.display = 'block';
        newProject.textContent = 'add';
        if(newProjectInput.value.trim().length > 0) {
            const projectToAdd = document.createElement('a');
            projectToAdd.textContent = newProjectInput.value;
            projectsList.appendChild(projectToAdd);
            newProjectInput.value = '';
            addedTask = true;
        }
        hideAddTask(addedTask);
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

    nav.appendChild(today);
    nav.appendChild(thisWeek);
    nav.appendChild(projects);
    
    sidebar.appendChild(nav);
    sidebar.appendChild(backgorundText);

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
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task {

    constructor(title, dueDate) {
        const date = new Date();
        this.title = title;
        this.status = false;
        this.addDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        dueDate = dueDate.split('-');
        this.dueDate = dueDate.reverse().join('/');
    }

    getTitle = () => { return this.title; }

    markAsRead = () => {
        this.status = true;
        this.changeTaskToRead();
    }

    showTask = (tasks, id) => {
        const task = document.createElement('div');
        task.classList.add('task');
        (this.status === false) ? task.classList.add('not_finished') : task.classList.add('finished');
        task.setAttribute('data-id', id);
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
        date.textContent = this.dueDate;

        const pickDate = document.createElement('input');
        pickDate.type = 'date';

        const remove = document.createElement('div');
        remove.classList.add('delete_task');
        remove.textContent = 'Del';

        secondaryInfo.appendChild(date);
        secondaryInfo.appendChild(remove);

        task.appendChild(mainInfo);
        task.appendChild(secondaryInfo);

        tasks.appendChild(task);
    }

    changeTaskToRead = () => {
        const task = document.querySelector('.task');
        task.style.border = 'none';
    };

    getTask = () => {
        const task = document.querySelector('.task');
        return task;
    };

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


const Tasks = () => {

    const content = document.querySelector('.content');
    const main = document.createElement('main');
    content.appendChild(main);

    let taskId = 1;

    let tasks = [ 
        { id: taskId++, param: new _task__WEBPACK_IMPORTED_MODULE_0__.Task('Testowy task', '18/07/2023') }, 
        { id: taskId++, param: new _task__WEBPACK_IMPORTED_MODULE_0__.Task('Testowy task 2', '19/07/2023') }
    ];

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
    // name.name = 'task_name';
    // const labelName = document.createElement('label');

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
                let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(name.value, date.value);
                tasks.push({id: taskId++, param: newTask});
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
                    singleTask.param.status = (singleTask.param.status === false) ? true : false;
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
/* harmony import */ var _assets_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/tasks */ "./src/assets/tasks.js");
/* harmony import */ var _assets_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/footer */ "./src/assets/footer.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");






(0,_assets_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_assets_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_assets_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_assets_footer__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSzs7Ozs7O1VDaElwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNFO0FBQ0o7QUFDRTtBQUNYO0FBQzFCO0FBQ0EsMkRBQU87QUFDUCwwREFBTTtBQUNOLHlEQUFLO0FBQ0wsMERBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2Fzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgRnJhbmVrRGV2ICc7XHJcbiAgICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gJ0dpdEh1Yic7XHJcbiAgICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0ZyYW5la0Rldi90b2RvLWxpc3QnO1xyXG4gICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xyXG4gICAgXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcclxuXHJcbiAgICBjb25zdCBiYWNrZ29ydW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFja2dvcnVuZFRleHQuY2xhc3NMaXN0LmFkZCgnYmdfdGV4dCcpO1xyXG4gICAgY29uc3QgdGV4dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9ICdUb0RvJztcclxuICAgIGJhY2tnb3J1bmRUZXh0LmFwcGVuZENoaWxkKHRleHRTcGFuKTtcclxuICAgIFxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgndG9kb19uYXYnKTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIFxyXG4gICAgdG9kYXkudGV4dENvbnRlbnQgPSAnVG9kYXknO1xyXG4gICAgdGhpc1dlZWsudGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJztcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0c0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcHJvamVjdHNEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XHJcblxyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNEZXNjcmlwdGlvbik7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfbGlzdCcpO1xyXG5cclxuICAgIGNvbnN0IG1haW5Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbWFpblByb2plY3QudGV4dENvbnRlbnQgPSAnTWFpbiBQcm9qZWN0JztcclxuICAgIFxyXG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG1haW5Qcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3UHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnbmV3X3Byb2plY3RzJyk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5ld1Byb2plY3RJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgbmV3UHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdElucHV0KTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ25ldyc7XHJcblxyXG4gICAgXHJcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBhZGRlZFRhc2sgPSBmYWxzZTtcclxuICAgICAgICBuZXdQcm9qZWN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICdhZGQnO1xyXG4gICAgICAgIGlmKG5ld1Byb2plY3RJbnB1dC52YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIHByb2plY3RUb0FkZC50ZXh0Q29udGVudCA9IG5ld1Byb2plY3RJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3RUb0FkZCk7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBhZGRlZFRhc2sgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoaWRlQWRkVGFzayhhZGRlZFRhc2spO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGlkZUFkZFRhc2sgPSAoYWRkZWRUYXNrKSA9PiB7XHJcbiAgICAgICAgaWYoYWRkZWRUYXNrKSB7XHJcbiAgICAgICAgICAgIGFkZGVkVGFzayA9IGZhbHNlO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ25ldyc7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIG5ld1Byb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG5cclxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XHJcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0cyk7XHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKHRvZGF5KTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZCh0aGlzV2Vlayk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xyXG4gICAgXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5hdik7XHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGJhY2tnb3J1bmRUZXh0KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7IiwiZXhwb3J0IGNsYXNzIFRhc2sge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGREYXRlID0gZGF0ZS5nZXREYXRlKCkgKyAnLycgKyBkYXRlLmdldE1vbnRoKCkgKyAnLycgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgZHVlRGF0ZSA9IGR1ZURhdGUuc3BsaXQoJy0nKTtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlLnJldmVyc2UoKS5qb2luKCcvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUgPSAoKSA9PiB7IHJldHVybiB0aGlzLnRpdGxlOyB9XHJcblxyXG4gICAgbWFya0FzUmVhZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VUYXNrVG9SZWFkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Rhc2sgPSAodGFza3MsIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgICAgICh0aGlzLnN0YXR1cyA9PT0gZmFsc2UpID8gdGFzay5jbGFzc0xpc3QuYWRkKCdub3RfZmluaXNoZWQnKSA6IHRhc2suY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKTtcclxuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrX3RpdGxlJyk7XHJcblxyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcmVhZC50eXBlID0gJ2NoZWNrYm94JztcclxuXHJcbiAgICAgICAgcmVhZC5jaGVja2VkID0gKHRoaXMuc3RhdHVzID09PSB0cnVlKSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtYWluSW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XHJcbiAgICAgICAgbWFpbkluZm8uYXBwZW5kQ2hpbGQocmVhZCk7XHJcbiAgICAgICAgbWFpbkluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWNvbmRhcnlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2Vjb25kYXJ5SW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRoaXMuZHVlRGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgcGlja0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHBpY2tEYXRlLnR5cGUgPSAnZGF0ZSc7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCdkZWxldGVfdGFzaycpO1xyXG4gICAgICAgIHJlbW92ZS50ZXh0Q29udGVudCA9ICdEZWwnO1xyXG5cclxuICAgICAgICBzZWNvbmRhcnlJbmZvLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gICAgICAgIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQocmVtb3ZlKTtcclxuXHJcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChtYWluSW5mbyk7XHJcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChzZWNvbmRhcnlJbmZvKTtcclxuXHJcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFza1RvUmVhZCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcclxuICAgICAgICB0YXNrLnN0eWxlLmJvcmRlciA9ICdub25lJztcclxuICAgIH07XHJcblxyXG4gICAgZ2V0VGFzayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcclxuICAgICAgICByZXR1cm4gdGFzaztcclxuICAgIH07XHJcblxyXG59OyIsImltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2snO1xyXG5cclxuY29uc3QgVGFza3MgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgICBsZXQgdGFza0lkID0gMTtcclxuXHJcbiAgICBsZXQgdGFza3MgPSBbIFxyXG4gICAgICAgIHsgaWQ6IHRhc2tJZCsrLCBwYXJhbTogbmV3IFRhc2soJ1Rlc3Rvd3kgdGFzaycsICcxOC8wNy8yMDIzJykgfSwgXHJcbiAgICAgICAgeyBpZDogdGFza0lkKyssIHBhcmFtOiBuZXcgVGFzaygnVGVzdG93eSB0YXNrIDInLCAnMTkvMDcvMjAyMycpIH1cclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgdGFza3NDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrc0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFza3NfbGlzdCcpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrc0NvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZF90YXNrJyk7XHJcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJysgYWRkIHRhc2snO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcclxuXHJcblxyXG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ25ld190YXNrX2Zvcm0nKTtcclxuXHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZS50eXBlID0gJ3RleHQnO1xyXG4gICAgbmFtZS5wbGFjZWhvbGRlciA9ICdUYXNrIG5hbWUnO1xyXG4gICAgLy8gbmFtZS5uYW1lID0gJ3Rhc2tfbmFtZSc7XHJcbiAgICAvLyBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGF0ZS50eXBlID0gJ2RhdGUnO1xyXG5cclxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBhZGRUYXNrKCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcclxuICAgICAgICBuZXdUYXNrRm9ybS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBzaG93SW5wdXRzKCk7XHJcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihuYW1lLnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKG5hbWUudmFsdWUsIGRhdGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGFza3MucHVzaCh7aWQ6IHRhc2tJZCsrLCBwYXJhbTogbmV3VGFza30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNob3dUYXNrcygpO1xyXG4gICAgICAgICAgICBuYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGVfbmV3X3Rhc2tfZm9ybScpO1xyXG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ld1Rhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIC8vIH0sIDMwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dJbnB1dHMgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2hhbmdlVGFza1N0YXR1cyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHRhc2tzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xyXG4gICAgICAgIHRhc2tzRWxlbWVudHMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tib3ggPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGFzayA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgICAgIGxldCBpZE9mVGFzayA9IHRhc2suZGF0YXNldC5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2luZ2xlVGFzayA9IHRhc2tzLmZpbmQoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmouaWQudG9TdHJpbmcoKSA9PSBpZE9mVGFzaztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNpbmdsZVRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICBzaW5nbGVUYXNrLnBhcmFtLnN0YXR1cyA9IChzaW5nbGVUYXNrLnBhcmFtLnN0YXR1cyA9PT0gZmFsc2UpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcygpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuICAgICAgICB0YXNrc0VsZW1lbnRzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFza1RvRGVsZXRlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlX3Rhc2snKTtcclxuICAgICAgICAgICAgdGFza1RvRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkT2ZUYXNrID0gdGFzay5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgdGFza3MuZmluZCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9iai5pZC50b1N0cmluZygpID09IGlkT2ZUYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dUYXNrcyA9ICgpID0+IHtcclxuICAgICAgICB0YXNrc0NvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5wYXJhbS5zaG93VGFzayh0YXNrc0NvbnRlbnQsIHRhc2suaWQpKTtcclxuICAgICAgICBjaGFuZ2VUYXNrU3RhdHVzKCk7XHJcbiAgICAgICAgZGVsZXRlVGFzaygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcclxuICAgICAgICBuZXdUYXNrRm9ybS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHNob3dUYXNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUYXNrcygpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza3M7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vYXNzZXRzL2hlYWRlcic7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vYXNzZXRzL3NpZGViYXInO1xyXG5pbXBvcnQgVGFza3MgZnJvbSAnLi9hc3NldHMvdGFza3MnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vYXNzZXRzL2Zvb3Rlcic7XHJcbmltcG9ydCAnLi9zYXNzL21haW4uc2Nzcyc7XHJcblxyXG5TaWRlYmFyKCk7XHJcbkhlYWRlcigpO1xyXG5UYXNrcygpO1xyXG5Gb290ZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9