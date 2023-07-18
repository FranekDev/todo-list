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
    
    nav.appendChild(today);
    nav.appendChild(thisWeek);
    
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
    // const labelAddBtn = document.createElement('lab')

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

console.log("test");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNFO0FBQ0o7QUFDRTtBQUNYO0FBQzFCO0FBQ0E7QUFDQSwyREFBTztBQUNQLDBEQUFNO0FBQ04seURBQUs7QUFDTCwwREFBTTtBQUNOO0FBQ0Esb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2Fzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgRnJhbmVrRGV2ICc7XHJcbiAgICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gJ0dpdEh1Yic7XHJcbiAgICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0ZyYW5la0Rldi90b2RvLWxpc3QnO1xyXG4gICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSAnVG9kbyBMaXN0JztcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJjb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpO1xyXG5cclxuICAgIGNvbnN0IGJhY2tnb3J1bmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiYWNrZ29ydW5kVGV4dC5jbGFzc0xpc3QuYWRkKCdiZ190ZXh0Jyk7XHJcbiAgICBjb25zdCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRleHRTcGFuLnRleHRDb250ZW50ID0gJ1RvRG8nO1xyXG4gICAgYmFja2dvcnVuZFRleHQuYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xyXG4gICAgXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCd0b2RvX25hdicpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgXHJcbiAgICB0b2RheS50ZXh0Q29udGVudCA9ICdUb2RheSc7XHJcbiAgICB0aGlzV2Vlay50ZXh0Q29udGVudCA9ICdUaGlzIHdlZWsnO1xyXG4gICAgXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQodG9kYXkpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKHRoaXNXZWVrKTtcclxuICAgIFxyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChiYWNrZ29ydW5kVGV4dCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyIsImV4cG9ydCBjbGFzcyBUYXNrIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkRGF0ZSA9IGRhdGUuZ2V0RGF0ZSgpICsgJy8nICsgZGF0ZS5nZXRNb250aCgpICsgJy8nICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGR1ZURhdGUgPSBkdWVEYXRlLnNwbGl0KCctJyk7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZS5yZXZlcnNlKCkuam9pbignLycpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlID0gKCkgPT4geyByZXR1cm4gdGhpcy50aXRsZTsgfVxyXG5cclxuICAgIG1hcmtBc1JlYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVGFza1RvUmVhZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUYXNrID0gKHRhc2tzLCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICAodGhpcy5zdGF0dXMgPT09IGZhbHNlKSA/IHRhc2suY2xhc3NMaXN0LmFkZCgnbm90X2ZpbmlzaGVkJykgOiB0YXNrLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkJyk7XHJcbiAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza190aXRsZScpO1xyXG5cclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHJlYWQudHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG4gICAgICAgIHJlYWQuY2hlY2tlZCA9ICh0aGlzLnN0YXR1cyA9PT0gdHJ1ZSkgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWFpbkluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xyXG4gICAgICAgIG1haW5JbmZvLmFwcGVuZENoaWxkKHJlYWQpO1xyXG4gICAgICAgIG1haW5JbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNlY29uZGFyeUluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0aGlzLmR1ZURhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHBpY2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBwaWNrRGF0ZS50eXBlID0gJ2RhdGUnO1xyXG5cclxuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByZW1vdmUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlX3Rhc2snKTtcclxuICAgICAgICByZW1vdmUudGV4dENvbnRlbnQgPSAnRGVsJztcclxuXHJcbiAgICAgICAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgICAgICBzZWNvbmRhcnlJbmZvLmFwcGVuZENoaWxkKHJlbW92ZSk7XHJcblxyXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQobWFpbkluZm8pO1xyXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5SW5mbyk7XHJcblxyXG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRhc2tUb1JlYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrJyk7XHJcbiAgICAgICAgdGFzay5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrJyk7XHJcbiAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICB9O1xyXG5cclxufTsiLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJztcclxuXHJcbmNvbnN0IFRhc2tzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgbGV0IHRhc2tJZCA9IDE7XHJcblxyXG4gICAgbGV0IHRhc2tzID0gWyBcclxuICAgICAgICB7IGlkOiB0YXNrSWQrKywgcGFyYW06IG5ldyBUYXNrKCdUZXN0b3d5IHRhc2snLCAnMTgvMDcvMjAyMycpIH0sIFxyXG4gICAgICAgIHsgaWQ6IHRhc2tJZCsrLCBwYXJhbTogbmV3IFRhc2soJ1Rlc3Rvd3kgdGFzayAyJywgJzE5LzA3LzIwMjMnKSB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHRhc2tzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza3NDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzX2xpc3QnKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza3NDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGRfdGFzaycpO1xyXG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICcrIGFkZCB0YXNrJztcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XHJcblxyXG5cclxuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCduZXdfdGFza19mb3JtJyk7XHJcblxyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcclxuICAgIC8vIGNvbnN0IGxhYmVsQWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiJylcclxuXHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWUudHlwZSA9ICd0ZXh0JztcclxuICAgIG5hbWUucGxhY2Vob2xkZXIgPSAnVGFzayBuYW1lJztcclxuXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGUudHlwZSA9ICdkYXRlJztcclxuXHJcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgYWRkVGFzaygpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBuZXdUYXNrRm9ybS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgc2hvd0lucHV0cygpO1xyXG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYobmFtZS52YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhuYW1lLnZhbHVlLCBkYXRlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2goe2lkOiB0YXNrSWQrKywgcGFyYW06IG5ld1Rhc2t9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaG93VGFza3MoKTtcclxuICAgICAgICAgICAgbmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlX25ld190YXNrX2Zvcm0nKTtcclxuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXdUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAvLyB9LCAzMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93SW5wdXRzID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGFkZEJ0bik7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZVRhc2tTdGF0dXMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuICAgICAgICB0YXNrc0VsZW1lbnRzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgbGV0IGNoZWNrYm94ID0gdGFzay5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xyXG4gICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRhc2sgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWRPZlRhc2sgPSB0YXNrLmRhdGFzZXQuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZVRhc2sgPSB0YXNrcy5maW5kKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqLmlkLnRvU3RyaW5nKCkgPT0gaWRPZlRhc2s7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzaW5nbGVUYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlVGFzay5wYXJhbS5zdGF0dXMgPSAoc2luZ2xlVGFzay5wYXJhbS5zdGF0dXMgPT09IGZhbHNlKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdGFza3NFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XHJcbiAgICAgICAgdGFza3NFbGVtZW50cy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLmRlbGV0ZV90YXNrJyk7XHJcbiAgICAgICAgICAgIHRhc2tUb0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZE9mVGFzayA9IHRhc2suZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgICAgIHRhc2tzLmZpbmQoKG9iaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihvYmouaWQudG9TdHJpbmcoKSA9PSBpZE9mVGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93VGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgdGFza3NDb250ZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHRhc2sucGFyYW0uc2hvd1Rhc2sodGFza3NDb250ZW50LCB0YXNrLmlkKSk7XHJcbiAgICAgICAgY2hhbmdlVGFza1N0YXR1cygpO1xyXG4gICAgICAgIGRlbGV0ZVRhc2soKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBzaG93VGFza3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGFza3MoKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2Fzc2V0cy9oZWFkZXInO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL2Fzc2V0cy9zaWRlYmFyJztcclxuaW1wb3J0IFRhc2tzIGZyb20gJy4vYXNzZXRzL3Rhc2tzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Fzc2V0cy9mb290ZXInO1xyXG5pbXBvcnQgJy4vc2Fzcy9tYWluLnNjc3MnO1xyXG5cclxuXHJcblNpZGViYXIoKTtcclxuSGVhZGVyKCk7XHJcblRhc2tzKCk7XHJcbkZvb3RlcigpO1xyXG5cclxuY29uc29sZS5sb2coXCJ0ZXN0XCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==