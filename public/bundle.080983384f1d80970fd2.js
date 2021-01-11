/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/cancel.svg":
/*!*******************************!*\
  !*** ./src/assets/cancel.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9895197a7a3bb9fbd1ea2daa09a035da.svg\");\n\n//# sourceURL=webpack://testtasknotes/./src/assets/cancel.svg?");

/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d5048b9a051f69aa9f4773ed1edb6816.svg\");\n\n//# sourceURL=webpack://testtasknotes/./src/assets/plus.svg?");

/***/ }),

/***/ "./src/css/authorization.css":
/*!***********************************!*\
  !*** ./src/css/authorization.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testtasknotes/./src/css/authorization.css?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testtasknotes/./src/css/main.css?");

/***/ }),

/***/ "./src/CreateNotes.js":
/*!****************************!*\
  !*** ./src/CreateNotes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateNotes\": () => /* binding */ CreateNotes\n/* harmony export */ });\n/* harmony import */ var _Notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notes */ \"./src/Notes.js\");\n\n\n\nfunction CreateNotes() {\n\n    const form = document.querySelector('form')\n    const BtnAddNote = document.querySelector('.btn-add')\n    const modalOverlay = document.querySelector('.modal-overlay')\n\n    form.addEventListener('submit', submitFormHandler)\n\n    function submitFormHandler(event) {\n        event.preventDefault()\n        let noteName = document.querySelector('.note-name')\n        let noteDiscription = document.querySelector('.note-discription')\n        const data = JSON.stringify(new Date()).split('').splice(3,8).join('') +\n            \" \" + new Date().getHours() + \":\" + new Date().getMinutes()\n        const dateUTC = new Date().toUTCString()\n        const dateCreate = new Date(dateUTC)\n\n\n        const id = 's' + Math.random() * (Math.random() * 1000000000000000000).toString()\n\n        function minutesPassedrender() {\n            const dateNow = new Date()\n            const minutesPasse = Math.floor(((dateNow.getTime() - dateCreate.getTime())/60000))\n\n            document.querySelectorAll('.' + id)[0].innerText = `Мин : ${minutesPasse}`\n        }\n\n        function dayPassedRender() {\n            const dateNow = new Date()\n            const dayPasse = Math.floor((dateNow - dateCreate) / (24*3600*1000*7))\n\n            document.querySelectorAll('.' + id)[2].innerText = `Дней : ${dayPasse}`\n        }\n\n        function HoursPassedRender() {\n            const dateNow = new Date()\n            const hoursPasse = Math.floor((dateNow - dateCreate) / (1000 * 60 * 60))\n\n            document.querySelectorAll('.' + id)[1].innerText = `Часов : ${hoursPasse}`\n        }\n\n        const notes = {\n            name: noteName.value,\n            noteDiscription: noteDiscription.value,\n            data: data,\n            dataUTC: dateCreate\n        }\n\n        BtnAddNote.disabled = true\n        const note = document.createElement('div')\n        note.classList = \"app__Notes__container\"\n\n        note.innerHTML = `\n                           <div class=\"app__Notes__container__row\">\n                               <h1 class=\"app__Notes__name\">${noteName.value}</h1>\n                               <p class=\"app__Notes__discription\">${noteDiscription.value}</p>\n                           </div>\n                          <div class=\"app__Notes__container__Date\">\n                                <div class=\"Data-create\">Дата создания : <span>${data}</span></div>\n                                <div class=\"data-pass\">сколько прошло : \n                                    <span class=\"pass-minutes ${id}\">Мин: 0 </span>\n                                    <span class=\"pass-hours ${id}\">Часов : 0 </span>\n                                    <span class=\"pass-day ${id}\">Дней: 0</span>\n                                </div>\n                        </div>\n                    `\n\n        document.querySelector('.app__Notes').append(note)\n\n        setInterval(minutesPassedrender, 59000)\n        setInterval(dayPassedRender,350000000)\n        setInterval(HoursPassedRender, 3500000)\n\n\n        _Notes__WEBPACK_IMPORTED_MODULE_0__.Notes.SendNoteInBD(notes).then(() => {           //Отправляем данные в Firebase\n            modalOverlay.style.display = 'none'\n            noteName.value = ''\n            noteDiscription.value = ''\n            BtnAddNote.disabled = false\n        })\n    }\n}\n\n//# sourceURL=webpack://testtasknotes/./src/CreateNotes.js?");

/***/ }),

/***/ "./src/Notes.js":
/*!**********************!*\
  !*** ./src/Notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Notes\": () => /* binding */ Notes\n/* harmony export */ });\n/* harmony import */ var _openWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openWindow */ \"./src/openWindow.js\");\n/* harmony import */ var _CreateNotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateNotes */ \"./src/CreateNotes.js\");\n/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/plus.svg */ \"./src/assets/plus.svg\");\n/* harmony import */ var _assets_cancel_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/cancel.svg */ \"./src/assets/cancel.svg\");\n\n\n\n\n\n\nclass Notes {\n    static SendNoteInBD (notes) {\n        return fetch('https://react-native-todoapp-827b6-default-rtdb.firebaseio.com/.json',{\n            method : \"POST\",\n            body : JSON.stringify(notes),\n            headers : {\n                'Content-Type': 'application/json'\n            }\n        })\n            .then(response => response.json())\n            .then(response => console.log(response))\n    }\n    static GetNotesAndRender(token) {\n\n        return fetch(`https://react-native-todoapp-827b6-default-rtdb.firebaseio.com/.json?auth=${token}`)\n            .then(response => response.json())\n            .then(notes => {\n                if(token){\n                    RenderNotesAfterAuth(notes) // Рендер заметок полученных из бд при загрузке стр\n                    ;(0,_openWindow__WEBPACK_IMPORTED_MODULE_0__.openModal)() // рендер модального окна\n                    ;(0,_CreateNotes__WEBPACK_IMPORTED_MODULE_1__.CreateNotes)() // создание и отправка новых заметок в бд\n                }\n                else {\n                    alert('Вы ввели не правильный логин или пароль... Чтобы войти используйте email' +\n                        ' : Kosil@mail.ru, Пароль : 111111')\n                }\n            })\n        }\n\n}\n\nfunction RenderNotesAfterAuth(notes) {\n    const date = new Date()\n    document.querySelector('.app').innerHTML = `\n            <div class=\"app__container\">\n           <h1 class=\"app__container__my-notes\">Мои заметки</h1>\n           <img src=\"${_assets_plus_svg__WEBPACK_IMPORTED_MODULE_2__.default}\" class=\"open-modal\" alt=\"\">\n           <div class=\"app__Notes\">\n                \n           </div>\n       </div>\n   </div>\n   <div class=\"modal-overlay\">\n       <form >\n           <div class=\"modal\">\n                <div class=\"modal__container\">\n                    <img src=\"${_assets_cancel_svg__WEBPACK_IMPORTED_MODULE_3__.default}\" alt=\"\" class=\"close-modal\">\n                    <h1 class=\"modal__container__text\">Название</h1>\n                    <input type=\"text\" placeholder=\"Введите название...\" class=\"note-name modal-input\">\n                    <h1 class=\"modal__container__text\">Описание</h1>\n                    <input  type=\"text\" placeholder=\"Введите описание...\" class=\"note-discription modal-input\">\n                    <button type=\"submit\" class=\"btn-add\">Добавить</button>\n                </div>\n            </div>\n       </form>\n   </div>\n        `\n    for(let i in notes) {\n        const note = document.createElement('div')\n\n        const dateNow = new Date()\n        dateNow.setHours(dateNow.getHours() + new Date().getTimezoneOffset()/60)\n        const dateCreate = new Date(notes[i].dataUTC)\n        dateCreate.setHours(dateCreate.getHours() + new Date().getTimezoneOffset()/60)\n\n        const dayPass = Math.floor((dateNow - dateCreate) / (24*3600*1000*7))// сколько прошло дней\n        const minutPass = Math.floor((dateNow.getTime() - dateCreate.getTime())/60000) // сколько прошло минут\n        const hoursPass = Math.floor((dateNow - dateCreate) / (1000 * 60 * 60))//сколько прошло часов\n\n        const id = 's' + Math.random() * (Math.random() * 1000000000000000000).toString()\n\n        function minutesPassedrender() {\n            const dateNow = new Date()\n            dateNow.setHours(dateNow.getHours() + new Date().getTimezoneOffset()/60)\n            const minutesPasse = Math.floor(((dateNow.getTime() - dateCreate.getTime())/60000))\n\n            document.querySelectorAll('.' + id)[0].innerText = `Мин : ${minutesPasse}`\n        }\n\n        function dayPassedRender() {\n            const dateNow = new Date()\n            dateNow.setHours(dateNow.getHours() + new Date().getTimezoneOffset()/60)\n            const dayPasse = Math.floor((dateNow - dateCreate) / (24*3600*1000*7))\n\n            document.querySelectorAll('.' + id)[2].innerText = `Дней : ${dayPasse}`\n        }\n\n        function HoursPassedRender() {\n            const dateNow = new Date()\n            dateNow.setHours(dateNow.getHours() + new Date().getTimezoneOffset()/60)\n            const hoursPasse = Math.floor((dateNow - dateCreate) / (1000 * 60 * 60))\n\n            document.querySelectorAll('.' + id)[1].innerText = `Часов : ${hoursPasse}`\n        }\n\n        note.classList = \"app__Notes__container\"\n        note.innerHTML = `\n                            <div class=\"app__Notes__container__row\">\n                                <h1 class=\"app__Notes__name\">${notes[i].name}</h1>\n                                <p class=\"app__Notes__discription\">${notes[i].noteDiscription}</p>\n            \n                            </div>\n                            <div class=\"app__Notes__container__Date\">\n                                <div class=\"Data-create\">Дата создания : <span>${notes[i].data}</span></div>\n                                <div class=\"data-pass\">сколько прошло \n                                    <span  class=\"pass-minutes ${id}\">Мин:${minutPass}</span>\n                                    <span  class=\"pass-hours ${id}\">Часов : ${hoursPass}</span>\n                                    <span  class=\"pass-day ${id}}\">Дней:${dayPass}</span>\n                                </div>\n                            </div>\n                    `\n        document.querySelector('.app__Notes').append(note)\n\n        setInterval(minutesPassedrender, 59000)\n        setInterval(dayPassedRender,350000000)\n        setInterval(HoursPassedRender, 3500000)\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://testtasknotes/./src/Notes.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _Notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notes */ \"./src/Notes.js\");\n/* harmony import */ var _css_authorization_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/authorization.css */ \"./src/css/authorization.css\");\n\n\n\n\n\nconst authForm = document.querySelector('.auth-form')\n\nfunction authFormHandler(event) {\n    event.preventDefault()\n    const email = event.target.querySelector('.login__input').value\n    const password = event.target.querySelector('.password__input').value\n\n\n    authWithEmailAndPassword(email, password)\n        .then(token => {\n            if (token) {\n                return _Notes__WEBPACK_IMPORTED_MODULE_1__.Notes.GetNotesAndRender(token.idToken) // в случае успешной авторизации, происходит\n                // рендер заметок\n            }\n        })\n}\n\nauthForm.addEventListener('submit', authFormHandler)\n\nfunction authWithEmailAndPassword(email, password) {   // авторизация\n    const apiKey = \"AIzaSyAtT_Uqg12E8EgGC8vbpH-YPWim0tpmRaU\"\n    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {\n        method: \"POST\",\n        body: JSON.stringify({\n            email, password,\n            returnSecureToken: true\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    })\n        .then(response => response.json())\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://testtasknotes/./src/app.js?");

/***/ }),

/***/ "./src/openWindow.js":
/*!***************************!*\
  !*** ./src/openWindow.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openModal\": () => /* binding */ openModal\n/* harmony export */ });\n\nfunction openModal () {\n    const openModalWindow = document.querySelector('.open-modal')\n    const closeModalWindow = document.querySelector('.close-modal')\n    const modalOverlay = document.querySelector('.modal-overlay')\n\n    openModalWindow.addEventListener('click', function () {\n        modalOverlay.style.display = 'block'\n    })\n\n    closeModalWindow.addEventListener('click', function () {\n        modalOverlay.style.display = 'none'\n    })\n}\n\n//# sourceURL=webpack://testtasknotes/./src/openWindow.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;