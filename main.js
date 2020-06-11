(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_desktop_desktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/desktop/desktop */ "./src/app/pages/desktop/desktop.ts");
/* harmony import */ var _pages_folder_folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/folder/folder */ "./src/app/pages/folder/folder.ts");
/* harmony import */ var _pages_article_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/article/article */ "./src/app/pages/article/article.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _pages_desktop_desktop__WEBPACK_IMPORTED_MODULE_2__["Desktop"] },
    { path: 'folder/:id', component: _pages_folder_folder__WEBPACK_IMPORTED_MODULE_3__["Folder"] },
    { path: 'article/:id', component: _pages_article_article__WEBPACK_IMPORTED_MODULE_4__["Article"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outlet-container {\n    margin-top: 25px;\n    height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Victor\'s Homepage';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'root',
            template: "\n    <header></header>\n    <div class=\"outlet-container\">\n        <router-outlet></router-outlet>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_panel_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/panel/panel */ "./src/app/components/panel/panel.ts");
/* harmony import */ var _components_shortcut_shortcut__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shortcut/shortcut */ "./src/app/components/shortcut/shortcut.ts");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header */ "./src/app/components/header/header.ts");
/* harmony import */ var _components_directory_directory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/directory/directory */ "./src/app/components/directory/directory.ts");
/* harmony import */ var _pages_desktop_desktop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/desktop/desktop */ "./src/app/pages/desktop/desktop.ts");
/* harmony import */ var _pages_folder_folder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/folder/folder */ "./src/app/pages/folder/folder.ts");
/* harmony import */ var _pages_article_article__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/article/article */ "./src/app/pages/article/article.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_8__["InMemoryDataService"], {
                    dataEncapsulation: false,
                    delay: 300,
                    passThruUnknownUrl: true
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                /* Components */
                _components_header_header__WEBPACK_IMPORTED_MODULE_13__["Header"],
                _components_panel_panel__WEBPACK_IMPORTED_MODULE_11__["Panel"],
                _components_shortcut_shortcut__WEBPACK_IMPORTED_MODULE_12__["Shortcut"],
                _components_directory_directory__WEBPACK_IMPORTED_MODULE_14__["Directory"],
                /* Pages */
                _pages_desktop_desktop__WEBPACK_IMPORTED_MODULE_15__["Desktop"],
                _pages_folder_folder__WEBPACK_IMPORTED_MODULE_16__["Folder"],
                _pages_article_article__WEBPACK_IMPORTED_MODULE_17__["Article"],
            ],
            //providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/directory/directory.css":
/*!****************************************************!*\
  !*** ./src/app/components/directory/directory.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".folder-table {\n    width: 100%;\n}\n\n.table-header {\n    font-family: 'open-sans';\n}\n\n.table-cell {\n    border-bottom-color: #fafafa;\n    color: black;\n}\n\n.table-row:hover {\n    background: rgb(232,240,254);\n    cursor: pointer;\n}\n\n.even-row {\n    background: #fafafa;\n}\n"

/***/ }),

/***/ "./src/app/components/directory/directory.ng.html":
/*!********************************************************!*\
  !*** ./src/app/components/directory/directory.ng.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"folder-table\" mat-table [dataSource]=\"dataSource\">\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr class=\"table-row\"\n      [class.even-row]=\"i % 2 == 0\"\n      mat-row\n      *matRowDef=\"let row; columns: displayedColumns; let i = index\"\n      (click)=\"goToFile(row)\"></tr>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th\n      class=\"table-cell table-header\"\n      mat-header-cell *matHeaderCellDef> Name </th>\n    <td\n      class=\"table-cell\"\n      mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Description Column -->\n  <ng-container matColumnDef=\"description\">\n    <th class=\"table-cell table-header\"\n\tmat-header-cell *matHeaderCellDef> Description </th>\n    <td class=\"table-cell\"\n\tmat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n  </ng-container>\n</table>\n"

/***/ }),

/***/ "./src/app/components/directory/directory.ts":
/*!***************************************************!*\
  !*** ./src/app/components/directory/directory.ts ***!
  \***************************************************/
/*! exports provided: Directory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return Directory; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interfaces_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/file */ "./src/app/interfaces/file.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FILES = [
    {
        name: 'State budget breakdown',
        description: 'Where is our tax money is going?',
        type: _interfaces_file__WEBPACK_IMPORTED_MODULE_2__["FileType"].Article,
        id: 1
    },
    {
        name: 'Systemic racism',
        description: 'A visualization of the system through landmark events.',
        type: _interfaces_file__WEBPACK_IMPORTED_MODULE_2__["FileType"].Article,
        id: 2
    },
];
var Directory = /** @class */ (function () {
    function Directory(router) {
        this.router = router;
        /* Order of the columns. */
        this.displayedColumns = ['name', 'description'];
        this.dataSource = FILES;
    }
    Directory.prototype.goToFile = function (file) {
        this.router.navigate([file.type, file.id]);
    };
    Directory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'directory',
            template: __webpack_require__(/*! ./directory.ng.html */ "./src/app/components/directory/directory.ng.html"),
            styles: [__webpack_require__(/*! ./directory.css */ "./src/app/components/directory/directory.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], Directory);
    return Directory;
}());



/***/ }),

/***/ "./src/app/components/header/header.css":
/*!**********************************************!*\
  !*** ./src/app/components/header/header.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n    background: rgb(34,34,34);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 2px 20px 2px 15px;\n    border-bottom: 1px solid rgb(135,127,126);\n}\n\n.header .user {\n    font-family: 'open-sans';\n    color: white;\n}\n"

/***/ }),

/***/ "./src/app/components/header/header.ng.html":
/*!**************************************************!*\
  !*** ./src/app/components/header/header.ng.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\"\n     fxLayoutAlign=\"end\"\n     class=\"header\">\n  <span class=\"user\">Victor Lin</span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.ts":
/*!*********************************************!*\
  !*** ./src/app/components/header/header.ts ***!
  \*********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Header = /** @class */ (function () {
    function Header() {
    }
    Header = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.ng.html */ "./src/app/components/header/header.ng.html"),
            styles: [__webpack_require__(/*! ./header.css */ "./src/app/components/header/header.css")]
        })
    ], Header);
    return Header;
}());



/***/ }),

/***/ "./src/app/components/panel/panel.css":
/*!********************************************!*\
  !*** ./src/app/components/panel/panel.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n    width: 100%;\n    height: 75%;\n}\n\n.header {\n    color: black;\n    background: #fafafa;\n    padding: 8px;\n    border-radius: 5px 5px 0px 0px;\n    border: 1px 1px 0px 1px solid rgb(135,127,126);\n}\n\n.content {\n    background: white;\n    border-radius: 0px 0px 5px 5px;\n    border: 1px 1px 0px 1px solid rgb(135,127,126);\n    height: 100%;\n}\n\n.close-button {\n    font-family: 'open-sans';\n    background: rgb(252,91,87);\n    min-width: 0px;\n    line-height: 0px;\n    padding: 0px;\n    border-radius: 50%;\n    width: 14px;\n    height: 14px;\n    color: transparent;\n}\n\n.close-button:hover {\n    background-color: rgb(252,91,87);\n    opacity: 1;\n    color: rgb(161,12,18);\n    font-size: 10px;\n}\n\n.close-button:hover ::ng-deep .mat-button-focus-overlay {\n    background-color: transparent;\n}\n\n.fade-in {\n    animation: fadeIn ease .5s;\n    -webkit-animation: fadeIn ease .5s;\n    -moz-animation: fadeIn ease .5s;\n    -o-animation: fadeIn ease .5s;\n    -ms-animation: fadeIn ease .5s;\n}\n\n@keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n}\n\n@-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n}\n"

/***/ }),

/***/ "./src/app/components/panel/panel.ng.html":
/*!************************************************!*\
  !*** ./src/app/components/panel/panel.ng.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fade-in panel\">\n  <div\n    class=\"header\"\n    fxLayout=\"row\"\n    fxLayoutAlign=\"space-between center\">\n    <button\n      class=\"close-button\"\n      mat-button\n      (click)=\"goToHomepage()\">\n      ✕</button>\n    <div> BLM </div>\n    <div></div>\n  </div>\n  <div class=\"content\">\n    <ng-content\n      select=\"[content]\"></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/panel/panel.ts":
/*!*******************************************!*\
  !*** ./src/app/components/panel/panel.ts ***!
  \*******************************************/
/*! exports provided: Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Panel = /** @class */ (function () {
    function Panel(router) {
        this.router = router;
    }
    Panel.prototype.goToHomepage = function () {
        this.router.navigate(['']);
    };
    Panel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panel',
            template: __webpack_require__(/*! ./panel.ng.html */ "./src/app/components/panel/panel.ng.html"),
            styles: [__webpack_require__(/*! ./panel.css */ "./src/app/components/panel/panel.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], Panel);
    return Panel;
}());



/***/ }),

/***/ "./src/app/components/shortcut/shortcut.css":
/*!**************************************************!*\
  !*** ./src/app/components/shortcut/shortcut.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile {\n    width: 100px;\n    height: 120px;\n    padding: 25px;\n    border: 1px solid transparent;\n    background: transparent;\n    border-radius: 8px;\n    line-height: 20px;\n}\n\n.tile:hover {\n    background: #fafafa;\n}\n"

/***/ }),

/***/ "./src/app/components/shortcut/shortcut.ng.html":
/*!******************************************************!*\
  !*** ./src/app/components/shortcut/shortcut.ng.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  class=\"tile\"\n  fxLayout=\"col\"\n  fxLayoutAlign=\"center\"\n  mat-button (click)=\"goToShortcut()\">\n  <div>\n    <img\n      *ngIf=\"fileType === FileType.Folder\"\n      src=\"../../assets/folder.png\"/>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\">{{name}}</div>\n</button>\n\n"

/***/ }),

/***/ "./src/app/components/shortcut/shortcut.ts":
/*!*************************************************!*\
  !*** ./src/app/components/shortcut/shortcut.ts ***!
  \*************************************************/
/*! exports provided: Shortcut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shortcut", function() { return Shortcut; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interfaces_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/file */ "./src/app/interfaces/file.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Shortcut = /** @class */ (function () {
    function Shortcut(router) {
        this.router = router;
        this.FileType = _interfaces_file__WEBPACK_IMPORTED_MODULE_2__["FileType"];
    }
    Shortcut.prototype.goToShortcut = function () {
        var link = [this.fileType, this.id];
        this.router.navigate(link);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], Shortcut.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], Shortcut.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], Shortcut.prototype, "fileType", void 0);
    Shortcut = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shortcut',
            template: __webpack_require__(/*! ./shortcut.ng.html */ "./src/app/components/shortcut/shortcut.ng.html"),
            styles: [__webpack_require__(/*! ./shortcut.css */ "./src/app/components/shortcut/shortcut.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], Shortcut);
    return Shortcut;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/interfaces/file.ts":
/*!************************************!*\
  !*** ./src/app/interfaces/file.ts ***!
  \************************************/
/*! exports provided: FileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return FileType; });
var FileType;
(function (FileType) {
    FileType["Folder"] = "folder";
    FileType["Terminal"] = "terminal";
    FileType["Article"] = "article";
})(FileType || (FileType = {}));


/***/ }),

/***/ "./src/app/pages/article/article.css":
/*!*******************************************!*\
  !*** ./src/app/pages/article/article.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*='col-'] {\n  float: left;\n}\n*, *:after, *:before {\n\tbox-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\n[class*='col-'] {\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n.grid {\n  margin: 0;\n  display: inline-block;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n\tpadding: 20px;\n\ttext-align: center;\n\tcolor: #eee;\n\tmax-height: 120px;\n\tmin-width: 120px;\n\tbackground-color: #607D8B;\n  background-color: rgb(0,120,215);\n\tborder-radius: 2px;\n}\nh4 {\n  position: relative;\n}\n.module:hover {\n  background-color: #EEE;\n  background-color: #CCC;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n\t.module {\n\t  font-size: 10px;\n\t  max-height: 75px;\n  }\n  .col-1-4 {\n    width: 50%;\n  }\n}\n@media (max-width: 1024px) {\n\t.grid {\n\t  margin: 0;\n\t}\n\t.module {\n\t  min-width: 60px;\n\t}\n}\n"

/***/ }),

/***/ "./src/app/pages/article/article.ng.html":
/*!***********************************************!*\
  !*** ./src/app/pages/article/article.ng.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<panel>\n  Test\n</panel>\n"

/***/ }),

/***/ "./src/app/pages/article/article.ts":
/*!******************************************!*\
  !*** ./src/app/pages/article/article.ts ***!
  \******************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Article = /** @class */ (function () {
    function Article(router) {
        this.router = router;
    }
    Article = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'article',
            template: __webpack_require__(/*! ./article.ng.html */ "./src/app/pages/article/article.ng.html"),
            styles: [__webpack_require__(/*! ./article.css */ "./src/app/pages/article/article.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Article);
    return Article;
}());



/***/ }),

/***/ "./src/app/pages/desktop/desktop.css":
/*!*******************************************!*\
  !*** ./src/app/pages/desktop/desktop.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*='col-'] {\n  float: left;\n}\n*, *:after, *:before {\n\tbox-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\n[class*='col-'] {\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n.grid {\n  margin: 0;\n  display: inline-block;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n\tpadding: 20px;\n\ttext-align: center;\n\tcolor: #eee;\n\tmax-height: 120px;\n\tmin-width: 120px;\n\tbackground-color: #607D8B;\n  background-color: rgb(0,120,215);\n\tborder-radius: 2px;\n}\nh4 {\n  position: relative;\n}\n.module:hover {\n  background-color: #EEE;\n  background-color: #CCC;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n\t.module {\n\t  font-size: 10px;\n\t  max-height: 75px;\n  }\n  .col-1-4 {\n    width: 50%;\n  }\n}\n@media (max-width: 1024px) {\n\t.grid {\n\t  margin: 0;\n\t}\n\t.module {\n\t  min-width: 60px;\n\t}\n}\n"

/***/ }),

/***/ "./src/app/pages/desktop/desktop.ng.html":
/*!***********************************************!*\
  !*** ./src/app/pages/desktop/desktop.ng.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <shortcut\n    [name]=\"'BLM'\"\n    [fileType]=\"FileType.Folder\"\n    [id]=\"1\">\n  </shortcut>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/desktop/desktop.ts":
/*!******************************************!*\
  !*** ./src/app/pages/desktop/desktop.ts ***!
  \******************************************/
/*! exports provided: Desktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Desktop", function() { return Desktop; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interfaces_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/file */ "./src/app/interfaces/file.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Desktop = /** @class */ (function () {
    function Desktop(router) {
        this.router = router;
        this.FileType = _interfaces_file__WEBPACK_IMPORTED_MODULE_2__["FileType"];
    }
    Desktop = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'desktop',
            template: __webpack_require__(/*! ./desktop.ng.html */ "./src/app/pages/desktop/desktop.ng.html"),
            styles: [__webpack_require__(/*! ./desktop.css */ "./src/app/pages/desktop/desktop.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Desktop);
    return Desktop;
}());



/***/ }),

/***/ "./src/app/pages/folder/folder.css":
/*!*****************************************!*\
  !*** ./src/app/pages/folder/folder.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*='col-'] {\n  float: left;\n}\n*, *:after, *:before {\n\tbox-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\n[class*='col-'] {\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n.grid {\n  margin: 0;\n  display: inline-block;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n\tpadding: 20px;\n\ttext-align: center;\n\tcolor: #eee;\n\tmax-height: 120px;\n\tmin-width: 120px;\n\tbackground-color: #607D8B;\n  background-color: rgb(0,120,215);\n\tborder-radius: 2px;\n}\nh4 {\n  position: relative;\n}\n.module:hover {\n  background-color: #EEE;\n  background-color: #CCC;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n\t.module {\n\t  font-size: 10px;\n\t  max-height: 75px;\n  }\n  .col-1-4 {\n    width: 50%;\n  }\n}\n@media (max-width: 1024px) {\n\t.grid {\n\t  margin: 0;\n\t}\n\t.module {\n\t  min-width: 60px;\n\t}\n}\n"

/***/ }),

/***/ "./src/app/pages/folder/folder.ng.html":
/*!*********************************************!*\
  !*** ./src/app/pages/folder/folder.ng.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<panel>\n  <directory content></directory>\n</panel>\n"

/***/ }),

/***/ "./src/app/pages/folder/folder.ts":
/*!****************************************!*\
  !*** ./src/app/pages/folder/folder.ts ***!
  \****************************************/
/*! exports provided: Folder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Folder = /** @class */ (function () {
    function Folder(router) {
        this.router = router;
    }
    Folder = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'folder',
            template: __webpack_require__(/*! ./folder.ng.html */ "./src/app/pages/folder/folder.ng.html"),
            styles: [__webpack_require__(/*! ./folder.css */ "./src/app/pages/folder/folder.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Folder);
    return Folder;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vyl/Desktop/Blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map