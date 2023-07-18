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
    constructor(title) {
        this.title = title;
        this.status = false;
        console.log('dodano task');
    }

    getTitle = () => { return this.title; }
    markAsRead = () => { this.status = true; }
    showTask = (tasks) => {
        const task = document.createElement('div');
        task.classList.add('task');
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
        date.textContent = 'dd/mm/rrrr';
        const pickDate = document.createElement('input');
        pickDate.type = 'date';
        const remove = document.createElement('div');
        remove.textContent = 'Del';

        // const trashLogo = require();


        secondaryInfo.appendChild(date);
        secondaryInfo.appendChild(remove);

        task.appendChild(mainInfo);
        task.appendChild(secondaryInfo);

        tasks.appendChild(task);
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


const Tasks = () => {

    const content = document.querySelector('.content');
    const main = document.createElement('main');
    content.appendChild(main);

    let tasks = [new _task__WEBPACK_IMPORTED_MODULE_0__.Task('Testowy task')];
    const tasksContent = document.createElement('div');
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

    const date = document.createElement('input');
    date.type = 'date';

    addTaskBtn.addEventListener('click', () => {
        console.log('add task');
        addTask();
    });

    
    
    const addTask = () => {
        newTaskForm.textContent = '';
        showInputs();
        addBtn.addEventListener('click', () => {
            tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__.Task(name.value));
            tasks.forEach(task => console.log('Title: ' + task.getTitle()));
            showTasks();
            name.value = '';
        });

    };

    const showInputs = () => {
        
        newTaskForm.appendChild(name);
        newTaskForm.appendChild(date);
        newTaskForm.appendChild(addBtn);
        main.appendChild(newTaskForm);
    };


    const showTasks = () => {
        tasksContent.textContent = '';
        tasks.forEach(task => task.showTask(tasksContent));
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FDaEJyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7OztBQ1pyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUM3QmY7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0M4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1Q0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVDQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUs7Ozs7OztVQ2hFcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDRTtBQUNKO0FBQ0U7QUFDWDtBQUMxQjtBQUNBO0FBQ0EsMkRBQU87QUFDUCwwREFBTTtBQUNOLHlEQUFLO0FBQ0wsMERBQU07QUFDTjtBQUNBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5IEZyYW5la0RldiAnO1xyXG4gICAgZ2l0aHViTGluay50ZXh0Q29udGVudCA9ICdHaXRIdWInO1xyXG4gICAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9GcmFuZWtEZXYvdG9kby1saXN0JztcclxuICAgIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLnRleHRDb250ZW50ID0gJ1RvZG8gTGlzdCc7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcclxuXHJcbiAgICBjb25zdCBiYWNrZ29ydW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFja2dvcnVuZFRleHQuY2xhc3NMaXN0LmFkZCgnYmdfdGV4dCcpO1xyXG4gICAgY29uc3QgdGV4dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZXh0U3Bhbi50ZXh0Q29udGVudCA9ICdUb0RvJztcclxuICAgIGJhY2tnb3J1bmRUZXh0LmFwcGVuZENoaWxkKHRleHRTcGFuKTtcclxuICAgIFxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgndG9kb19uYXYnKTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIFxyXG4gICAgdG9kYXkudGV4dENvbnRlbnQgPSAnVG9kYXknO1xyXG4gICAgdGhpc1dlZWsudGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJztcclxuICAgIFxyXG4gICAgbmF2LmFwcGVuZENoaWxkKHRvZGF5KTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZCh0aGlzV2Vlayk7XHJcbiAgICBcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmF2KTtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYmFja2dvcnVuZFRleHQpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiLCJleHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkb2Rhbm8gdGFzaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlID0gKCkgPT4geyByZXR1cm4gdGhpcy50aXRsZTsgfVxyXG4gICAgbWFya0FzUmVhZCA9ICgpID0+IHsgdGhpcy5zdGF0dXMgPSB0cnVlOyB9XHJcbiAgICBzaG93VGFzayA9ICh0YXNrcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrX3RpdGxlJyk7XHJcblxyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcmVhZC50eXBlID0gJ2NoZWNrYm94JztcclxuXHJcbiAgICAgICAgcmVhZC5jaGVja2VkID0gKHRoaXMuc3RhdHVzID09PSB0cnVlKSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtYWluSW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XHJcbiAgICAgICAgbWFpbkluZm8uYXBwZW5kQ2hpbGQocmVhZCk7XHJcbiAgICAgICAgbWFpbkluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWNvbmRhcnlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2Vjb25kYXJ5SW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gJ2RkL21tL3JycnInO1xyXG4gICAgICAgIGNvbnN0IHBpY2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBwaWNrRGF0ZS50eXBlID0gJ2RhdGUnO1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJlbW92ZS50ZXh0Q29udGVudCA9ICdEZWwnO1xyXG5cclxuICAgICAgICAvLyBjb25zdCB0cmFzaExvZ28gPSByZXF1aXJlKCk7XHJcblxyXG5cclxuICAgICAgICBzZWNvbmRhcnlJbmZvLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gICAgICAgIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQocmVtb3ZlKTtcclxuXHJcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChtYWluSW5mbyk7XHJcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChzZWNvbmRhcnlJbmZvKTtcclxuXHJcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFzayc7XHJcblxyXG5jb25zdCBUYXNrcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICAgIGxldCB0YXNrcyA9IFtuZXcgVGFzaygnVGVzdG93eSB0YXNrJyldO1xyXG4gICAgY29uc3QgdGFza3NDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tzQ29udGVudCk7XHJcblxyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkX3Rhc2snKTtcclxuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnKyBhZGQgdGFzayc7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG5cclxuXHJcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3X3Rhc2tfZm9ybScpO1xyXG5cclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWUudHlwZSA9ICd0ZXh0JztcclxuXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGUudHlwZSA9ICdkYXRlJztcclxuXHJcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGQgdGFzaycpO1xyXG4gICAgICAgIGFkZFRhc2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgc2hvd0lucHV0cygpO1xyXG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGFza3MucHVzaChuZXcgVGFzayhuYW1lLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiBjb25zb2xlLmxvZygnVGl0bGU6ICcgKyB0YXNrLmdldFRpdGxlKCkpKTtcclxuICAgICAgICAgICAgc2hvd1Rhc2tzKCk7XHJcbiAgICAgICAgICAgIG5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dJbnB1dHMgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IHNob3dUYXNrcyA9ICgpID0+IHtcclxuICAgICAgICB0YXNrc0NvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5zaG93VGFzayh0YXNrc0NvbnRlbnQpKTtcclxuICAgIH07XHJcbiAgICBzaG93VGFza3MoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza3M7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vYXNzZXRzL2hlYWRlcic7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vYXNzZXRzL3NpZGViYXInO1xyXG5pbXBvcnQgVGFza3MgZnJvbSAnLi9hc3NldHMvdGFza3MnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vYXNzZXRzL2Zvb3Rlcic7XHJcbmltcG9ydCAnLi9zYXNzL21haW4uc2Nzcyc7XHJcblxyXG5cclxuU2lkZWJhcigpO1xyXG5IZWFkZXIoKTtcclxuVGFza3MoKTtcclxuRm9vdGVyKCk7XHJcblxyXG5jb25zb2xlLmxvZyhcInRlc3RcIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9