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
/* harmony import */ var _pages_post_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/post/post */ "./src/app/pages/post/post.ts");
/* harmony import */ var _pages_about_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about/about */ "./src/app/pages/about/about.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _pages_desktop_desktop__WEBPACK_IMPORTED_MODULE_2__["Desktop"] },
    { path: 'folder/:id', component: _pages_folder_folder__WEBPACK_IMPORTED_MODULE_3__["Folder"] },
    { path: 'post/:id', component: _pages_post_post__WEBPACK_IMPORTED_MODULE_4__["Post"] },
    { path: 'about', component: _pages_about_about__WEBPACK_IMPORTED_MODULE_5__["About"] },
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

module.exports = ".outlet-container {\n    height: 100%;\n}\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Victor\'s homepage';
        // A hack to make relative paths work for SPAs on GitHub Pages
        // https://medium.com/swlh/how-to-host-your-angular-reactjs-vuejs-spa-on-github-pages-2d9ab102ac7b
        var path = localStorage.getItem('path');
        if (path) {
            localStorage.removeItem('path');
            this.router.navigate([path]);
        }
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'root',
            template: "\n    <header></header>\n    <div class=\"outlet-container\">\n        <router-outlet></router-outlet>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_panel_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/panel/panel */ "./src/app/components/panel/panel.ts");
/* harmony import */ var _components_shortcut_shortcut__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shortcut/shortcut */ "./src/app/components/shortcut/shortcut.ts");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header */ "./src/app/components/header/header.ts");
/* harmony import */ var _components_directory_directory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/directory/directory */ "./src/app/components/directory/directory.ts");
/* harmony import */ var _components_viz_systemic_racism_systemic_racism__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/viz/systemic_racism/systemic_racism */ "./src/app/components/viz/systemic_racism/systemic_racism.ts");
/* harmony import */ var _pages_desktop_desktop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/desktop/desktop */ "./src/app/pages/desktop/desktop.ts");
/* harmony import */ var _pages_folder_folder__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/folder/folder */ "./src/app/pages/folder/folder.ts");
/* harmony import */ var _pages_post_post__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/post/post */ "./src/app/pages/post/post.ts");
/* harmony import */ var _pages_about_about__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/about/about */ "./src/app/pages/about/about.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_10__["InMemoryDataService"], {
                    dataEncapsulation: false,
                    delay: 300,
                    passThruUnknownUrl: true
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                /* Components */
                _components_header_header__WEBPACK_IMPORTED_MODULE_15__["Header"],
                _components_panel_panel__WEBPACK_IMPORTED_MODULE_13__["Panel"],
                _components_shortcut_shortcut__WEBPACK_IMPORTED_MODULE_14__["Shortcut"],
                _components_directory_directory__WEBPACK_IMPORTED_MODULE_16__["Directory"],
                /* Viz */
                _components_viz_systemic_racism_systemic_racism__WEBPACK_IMPORTED_MODULE_17__["SystemicRacismViz"],
                _components_viz_systemic_racism_systemic_racism__WEBPACK_IMPORTED_MODULE_17__["SystemicRacismDialog"],
                /* Pages */
                _pages_desktop_desktop__WEBPACK_IMPORTED_MODULE_18__["Desktop"],
                _pages_folder_folder__WEBPACK_IMPORTED_MODULE_19__["Folder"],
                _pages_post_post__WEBPACK_IMPORTED_MODULE_20__["Post"],
                _pages_about_about__WEBPACK_IMPORTED_MODULE_21__["About"],
            ],
            //providers: [],
            entryComponents: [_components_viz_systemic_racism_systemic_racism__WEBPACK_IMPORTED_MODULE_17__["SystemicRacismDialog"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
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

module.exports = ".folder-table {\n    width: 100%;\n}\n\n.table-header {\n    font-family: 'open-sans';\n    border-bottom-color: #fafafa;\n    font-size: medium;\n    color: black;\n}\n\n.table-body {\n    font-family: 'open-sans-light';\n    border-bottom-color: #fafafa;\n    font-size: medium;\n    color: black;\n}\n\n.table-row:hover {\n    background: rgb(232,240,254);\n    cursor: pointer;\n}\n\n.even-row {\n    background: #fafafa;\n}\n"

/***/ }),

/***/ "./src/app/components/directory/directory.ng.html":
/*!********************************************************!*\
  !*** ./src/app/components/directory/directory.ng.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"folder-table\" mat-table [dataSource]=\"dataSource\">\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr class=\"table-row\"\n      [class.even-row]=\"i % 2 == 0\"\n      mat-row\n      *matRowDef=\"let row; columns: displayedColumns; let i = index\"\n      (click)=\"goToFile(row)\"></tr>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th\n      class=\"table-cell table-header\"\n      mat-header-cell *matHeaderCellDef> Name </th>\n    <td\n      class=\"table-cell table-body\"\n      mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Description Column -->\n  <ng-container matColumnDef=\"description\">\n    <th class=\"table-cell table-header\"\n\tmat-header-cell *matHeaderCellDef fxHide.xs> Description </th>\n    <td class=\"table-cell table-body\"\n\tmat-cell *matCellDef=\"let element\" fxHide.xs> {{element.description}} </td>\n  </ng-container>\n</table>\n"

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
        name: 'Systemic racism',
        description: 'A visualization of the system through landmark events.',
        type: _interfaces_file__WEBPACK_IMPORTED_MODULE_2__["FileType"].Post,
        id: 1
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

module.exports = ".header {\n    background: rgb(34,34,34);\n    width: 100%;\n    padding: 8px 20px 8px 20px;\n}\n\n.header .user {\n    font-family: 'open-sans-bold';\n    color: white;\n}\n\n.icon {\n    width: 22px;\n    height: 22px;\n    cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/components/header/header.ng.html":
/*!**************************************************!*\
  !*** ./src/app/components/header/header.ng.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\"\n     fxLayoutGap=\"15px\"\n     fxLayoutAlign=\"end center\"\n     class=\"header\">\n  <img\n    class=\"icon\"\n    src=\"../../assets/linkedin.png\"\n    (click)=\"goToLinkedIn()\" />\n  <img\n    class=\"icon\"\n    src=\"../../assets/twitter.png\"\n    (click)=\"goToTwitter()\" />\n  <span class=\"user\">Victor Lin</span>\n</div>\n"

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
    Header.prototype.goToTwitter = function () {
        window.open('https://twitter.com/vlinvlin6');
    };
    Header.prototype.goToLinkedIn = function () {
        window.open('https://www.linkedin.com/in/vyl/');
    };
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

module.exports = ".panel {\n    margin: 20px;\n    height: 84%;\n}\n\n@media screen and (max-height: 800px) {\n    .panel {\n\theight: 81%;\n    }\n}\n\n.header {\n    color: black;\n    background: #fafafa;\n    padding: 8px;\n    border-radius: 5px 5px 0px 0px;\n    border: 1px 1px 0px 1px solid rgb(135,127,126);\n}\n\n.content {\n    background: white;\n    border-radius: 0px 0px 5px 5px;\n    border: 1px 1px 0px 1px solid rgb(135,127,126);\n    height: 100%;\n    overflow-y: hidden;\n}\n\n.close-button {\n    font-family: 'open-sans';\n    background: rgb(252,91,87);\n    min-width: 0px;\n    line-height: 0px;\n    padding: 0px;\n    border-radius: 50%;\n    width: 14px;\n    height: 14px;\n    color: transparent;\n}\n\n.close-button:hover {\n    background-color: rgb(252,91,87);\n    opacity: 1;\n    color: rgb(161,12,18);\n    font-size: 10px;\n}\n\n.close-button:hover ::ng-deep .mat-button-focus-overlay {\n    background-color: transparent;\n}\n\n.fade-in {\n    animation: fadeIn ease .5s;\n    -webkit-animation: fadeIn ease .5s;\n    -moz-animation: fadeIn ease .5s;\n    -o-animation: fadeIn ease .5s;\n    -ms-animation: fadeIn ease .5s;\n}\n\n@keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n}\n\n@-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n}\n"

/***/ }),

/***/ "./src/app/components/panel/panel.ng.html":
/*!************************************************!*\
  !*** ./src/app/components/panel/panel.ng.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fade-in panel\">\n  <div\n    class=\"header\"\n    fxLayout=\"row\"\n    fxLayoutAlign=\"space-between center\">\n    <button\n      class=\"close-button\"\n      mat-button\n      (click)=\"goToHomepage()\">\n      ✕</button>\n    <div> {{name}} </div>\n    <div></div>\n  </div>\n  <div class=\"content\">\n    <ng-content\n      select=\"[content]\"></ng-content>\n  </div>\n</div>\n"

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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], Panel.prototype, "name", void 0);
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

module.exports = ".tile {\n    display: block;\n    margin: 20px;\n    width: 100px;\n    height: 120px;\n    padding: 25px;\n    border: 1px solid transparent;\n    background: transparent;\n    border-radius: 8px;\n    line-height: 20px;\n    color: white;\n}\n\n.tile:hover {\n    background: #a7a7a773;\n}\n\nimg {\n    width: 48px;\n    height: 48px;\n}\n"

/***/ }),

/***/ "./src/app/components/shortcut/shortcut.ng.html":
/*!******************************************************!*\
  !*** ./src/app/components/shortcut/shortcut.ng.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  class=\"tile\"\n  fxLayout=\"col\"\n  fxLayoutAlign=\"center\"\n  mat-button (click)=\"goToShortcut()\">\n  <div>\n    <img\n      *ngIf=\"fileType === FileType.About\"\n      src=\"../../assets/about.png\"/>\n    <img\n      *ngIf=\"fileType === FileType.Folder\"\n      src=\"../../assets/folder.png\"/>\n    <img\n      *ngIf=\"fileType === FileType.Resume\"\n      src=\"../../assets/resume.png\"/>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\">{{name}}</div>\n</button>\n\n"

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
        var link;
        if (this.fileType === _interfaces_file__WEBPACK_IMPORTED_MODULE_2__["FileType"].Folder
            || this.fileType === _interfaces_file__WEBPACK_IMPORTED_MODULE_2__["FileType"].Post) {
            link = [this.fileType, this.id];
            this.router.navigate(link);
        }
        else if (this.fileType === _interfaces_file__WEBPACK_IMPORTED_MODULE_2__["FileType"].Resume) {
            window.open('https://drive.google.com/file/d/1GOkKzzs57FJ3fCZod4F-50rDRfbeO-T4/view');
        }
        else {
            link = [this.fileType];
            this.router.navigate(link);
        }
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

/***/ "./src/app/components/viz/systemic_racism/data.ts":
/*!********************************************************!*\
  !*** ./src/app/components/viz/systemic_racism/data.ts ***!
  \********************************************************/
/*! exports provided: DEFAULT_DETAIL, MORE_DETAIL, DETAILS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DETAIL", function() { return DEFAULT_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MORE_DETAIL", function() { return MORE_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAILS", function() { return DETAILS; });
var DEFAULT_DETAIL = {
    title: 'Thank you for reading',
    body: 'You\'ve read all of the landmark events that contribute to systemic racism in America that I know of. Please tweet at me using #systemicracismviz if I\'ve missed any events, made any typos, or committed any bugs. I hope you walk away with a better understanding of why we need to actively dismantle our racist legacy.',
    year: 0,
    citations: [],
};
var MORE_DETAIL = {
    title: 'There are more events that don\'t fit the screen',
    body: 'Believe it or not, the roots of systemic racism are too numerous to fit your screen. Please resize your browser and refresh, or use a larger device.',
    year: 0,
    citations: [],
};
var DETAILS = [
    {
        title: '20 and odd slaves land in Virginia',
        year: 1619,
        body: 'The English warship White Lion, as a privateer with a letter of marque, legally stole "20 and odd" slaves from a Portuguese ship headed to Veracruz. Most of the enslaved are believed to have been captured during an ongoing war between Portugal and the kingdom of Ndongo. These people were then traded away by the captain to the colony for food. This signals the custom of slavery in Virginia, from which laws later sprung from. Because slavery has yet been codified into law, these prisoners of war were technically indentured servants. Notably, this was a time of food scarcity, as Jamestown was built in a marsh of infertile land and malaria-harboring mosquitos, so with certainty, these "indentured servants" were put to good use.',
        citations: [
            {
                source: 'National Park Service',
                link: 'https://www.nps.gov/jame/learn/historyculture/african-americans-at-jamestown.htm',
            },
            {
                source: 'Time Magazine',
                link: 'https://time.com/5653369/august-1619-jamestown-history',
            },
            {
                source: 'Livingston Public School',
                link: 'https://www.livingston.org/cms/lib9/NJ01000562/Centricity/Domain/1461/Jamestown%20COMPLETE%20Notes.pdf',
            },
        ],
    },
    {
        title: 'The first racist gun law',
        year: 1639,
        body: 'This year instituted two racist weapons statutes in Virginia: the first "prohibits negroes, slave and free, from carrying weapons including clubs," while the second states that "all such free Mulattoes, Negroes and Indians...shall appear without arms". Altogether an unsurprising set of laws, seeing that Native Americans were antagonistic, saw the colonists as invaders, and reacted to their settlement by massacring almost 400 colonists in 1622 (a third of the Jamestown population).',
        citations: [
            {
                source: 'Sedgwick County',
                link: 'https://www.sedgwickcounty.org/media/29093/the-racist-origins-of-us-gun-control.pdf',
            },
        ],
    },
    {
        title: 'The first slave in the eyes of the law',
        year: 1640,
        body: 'White indentured servants and black slaves share a lot in common as a people who suffer under abusive masters, want to take breaks from back-breaking farm labor, and miss their families. On July 1640, three servants escaped to Maryland and were captured there: Victor, "a Dutchman," and James Gregory, "a Scotchman," were sentenced to be whipped, with four years added to their indentures. The third servant, "a negro named John Punch," was made a slave for life by the Virginia courts.',
        citations: [
            {
                source: 'Encyclopedia Virginia in partnership with the Library of Virginia',
                link: 'https://www.encyclopediavirginia.org/Runaway_Slaves_and_Servants_in_Colonial_Virginia',
            },
        ],
    },
    {
        title: 'Slavery is now inheritable',
        year: 1662,
        body: 'The sons and daughters of slave masters born to their enslaved mother are now considered property. Straight from the Virginia book of statutes: "Whereas some doubts have arisen whether children got by any Englishman upon a Negro woman should be slave or free, be it therefore enacted and declared by this present Grand Assembly, that all children born in this country shall be held bond or free only according to the condition of the mother; and that if any Christian shall commit fornication with a Negro man or woman, he or she so offending shall pay double the fines imposed by the former act."',
        citations: [
            {
                source: 'Swarthmore College',
                link: 'https://www.swarthmore.edu/SocSci/bdorsey1/41docs/24-sla.html',
            },
        ],
    },
    {
        title: 'The U.S. constitution does not apply to black people',
        year: 1857,
        body: 'The chief justice at this time, Roger Taney, was a former slave owner, as were four other justices on the Court. Dred Scott, an enslaved black man whose owners had taken him from slave-holding Missouri to the free territory (present day Minnesota) designated by the Missouri Compromise of 1820, sued his owner Sandford once he was in free territory. After eleven years, his case reached the Supreme Court, who ruled that as a black man, Scott was not a citizen of the United States and could not bring suit.',
        citations: [
            {
                source: 'U.S. History',
                link: 'https://www.ushistory.org/us/32a.asp',
            },
        ],
    },
    {
        title: 'The largest slave auction in American history',
        year: 1859,
        body: 'At a horse racetrack outside Savannah, Georgia, more than 400 enslaved people were auctioned off. They came from Major Pierce Butler\'s plantations and had spent all of their lives enslaved together. Two and three generations deep, the men, women and children were separated and sold all across the continent. According to one account, "the man and wife might be sold to the pine woods of North Carolina, their brothers and sisters be scattered through the cotton fields of Alabama and the rice swamps of Louisiana, while the parents might be left on the old plantation to wear out their weary lives in heavy grief, and lay their heads in far-off graves, over which their children might never weep."',
        citations: [
            {
                source: 'Washington Post',
                link: 'https://www.washingtonpost.com/education/2019/08/28/historians-slavery-myths/?arc404=true',
            },
        ],
    },
    {
        title: 'Seven southern slave-holding states secede',
        year: 1861,
        body: 'We were so divided over slavery that we went to war with ourselves over it. The belief that a small group of rich slave owners had become so politically powerful (the Dred Scott vs. Sandford outcome was universally condemned in the Northern states) that they could seize the national government for themselves and expand the morally abhorrent practice of slavery became a festering sore in the American consciousness. As Lincoln describes to the Republican state convention: "A house divided against itself cannot stand. I believe this government cannot endure, permanently half slave and half free. I do not expect the Union to be dissolved - I do not expect the house to fall - but I do expect it will cease to be divided. It will become all one thing, or all the other. Either the opponents of slavery, will arrest the further spread of it, and place it where the public mind shall rest in the belief that it is in course of ultimate extinction; or its advocates will push it forward till it shall become alike lawful in all the States, old as well as new-North as well as South. Have we no tendency to the latter condition?" Shortly after Abraham Lincoln was inaugurated as the president, war broke out between the Union and Confederacy.',
        citations: [
            {
                source: 'American History USA',
                link: 'https://www.americanhistoryusa.com/topic/slave-power/'
            },
            {
                source: 'National Park Service',
                link: 'https://www.nps.gov/liho/learn/historyculture/housedivided.htm',
            }
        ],
    },
    {
        title: 'Don\'t ride together',
        year: 1891,
        body: 'Tennesee state law: "All railroads carrying passengers in the state (other than street railroads) shall provide equal but separate accommodations for the white and colored races, by providing two or more passenger cars for each passenger train, or by dividing the cars by a partition, so as to secure separate accommodations."',
        citations: [
            {
                source: 'Smithsonian National Museum of American History',
                link: 'https://americanhistory.si.edu/brown/history/1-segregated/jim-crow.html',
            }
        ],
    },
    {
        title: 'Separate but equal',
        year: 1896,
        body: 'Homer Plessy, a mulatto (7/8 white), seated himself in a white compartment, was challenged by the conductor, and got arrested for violating the state law. The supreme court under Justice Henry Brown confirms segregation into federal law: "We consider the underlying fallacy of the plaintiff’s argument to consist in the assumption that the enforced separation of the two races stamps the colored race with a badge of inferiority. If this be so, it is not by reason of anything found in the act, but solely because the colored race chooses to put that construction upon it... The argument also assumes that social prejudice may be overcome by legislation, and that equal rights cannot be secured except by an enforced commingling of the two races... If the civil and political rights of both races be equal, one cannot be inferior to the other civilly or politically. If one race be inferior to the other socially, the Constitution of the United States cannot put them upon the same plane."',
        citations: [
            {
                source: 'U.S. Government Documents',
                link: 'University of Southern California',
            },
        ]
    },
    {
        title: 'America has her first blockbuster film',
        year: 1915,
        body: 'Birth of the Nation was a cinematic masterpiece. It was the first movie screened at the White House, the first 12-reel film, and the first to have its own orchestral musical score. It pioneered close-ups, fade-outs, and a carefully staged battle sequence with hundreds of extras made to look like thousands. It was also a hate film that glorified the KKK, depicting black people as scourges exerting undue influence on the Southern whites during Reconstruction. First, a black captain (Walter Long in blackface) from the Union army relentlessly pursuing a Confederate Colonel\'s little sister until she commits suicide, then a black member from the South Carolina legislature (this character of Silas Lynch has no basis in fact, since there were no black or mulatto men that served as the lieutenant governor of South Carolina during Reconstruction) threatens the governor\'s daughter to marry him, until clan members come in to restore the peace. In short, Hollywood\'s first smash box office success was white supremacist propaganda.',
        citations: [
            {
                source: 'NPR',
                link: 'https://www.npr.org/sections/codeswitch/2015/02/08/383279630/100-years-later-whats-the-legacy-of-birth-of-a-nation',
            },
            {
                source: 'Facing History and Ourselves Non-Profit',
                link: 'https://www.facinghistory.org/reconstruction-era/influence-birth-nation',
            },
        ],
    },
    {
        title: 'Black Wall Street gets burned down',
        year: 1921,
        body: 'By the 1920s, the African American community in Tulsa, Oklahoma emerged as a renowned entrepreneurial hub, with its Greenwood district known as "Black Wall Street". Black educator, entrepreneur, and landowner, O.W. Gurley owned rental properties, a rooming house, a grocery store, and a hotel. J.B. Stradford, a lawyer, owned another of the area’s several hotels. Simon Berry ran a jitney, a bus line, a charter plane service, and a hotel. The Williams Family owned a theater, a garage, a confectionery, and a rooming house. Dr. A.C. Jackson, called the “most able negro surgeon in America” by the Mayo brothers of the Mayo Clinic, broke the color line, attending to black and white patients alike. This was just a sliver of the talent in this burgeoning community, abruptly ended by the thousands of jealous armed white men, some carrying machine guns and deputized by local law enforcement, that invaded the Greenwood district. They gunned people down (including Dr. A.C. Jackson of the Mayo Clinic, who had his hands raised in surrender), set fires throughout the district, and organized planes to drop bombs on the Greenwood district. In less than 24 hours, a white mob reduced a vibrant, 35-block area to rubble and dead bodies. The majority of Tulsa\'s African American population became homeless by the end of the day and thousands were forced to spend that winter living in tents.',
        citations: [
            {
                source: 'Oklahoma Historical Society',
                link: 'https://www.okhistory.org/publications/enc/entry.php?entry=TU013',
            },
            {
                source: 'The Guardian',
                link: 'https://www.theguardian.com/commentisfree/2020/jun/19/tulsa-1921-massacre-trump-violence-legacy',
            },
        ],
    },
    {
        title: 'Don\'t learn together',
        year: 1929,
        body: 'Missouri state law: "Separate free schools shall be established for the education of children of African descent; and it shall be unlawful for any colored child to attend any white school, or any white child to attend a colored school."',
        citations: [
            {
                source: 'Smithsonian National Museum of American History',
                link: 'https://americanhistory.si.edu/brown/history/1-segregated/jim-crow.html',
            }
        ],
    },
    {
        title: 'Don\'t play together',
        year: 1930,
        body: 'City ordinance from Birmingham, Alabama: "It shall be unlawful for a negro and white person to play together or in company with each other in any game of cards or dice, dominoes or checkers."',
        citations: [
            {
                source: 'American Social History Project',
                link: 'https://herb.ashp.cuny.edu/items/show/866',
            }
        ],
    },
    {
        title: 'MLK gets assassinated',
        year: 1963,
        body: 'MLK, the apostle of non-violence, masterful orator, and defender of the poor, the needy, and the American dream, said during a speech supporting a sanitation workers\'s strike in Tennessee: "I’ve seen the promised land. I may not get there with you. But I want you to know tonight, that we, as a people, will get to the promised land. And I’m happy tonight. I’m not worried about anything. I’m not fearing any man. Mine eyes have seen the glory of the coming of the Lord." The following day, he was assassinated by racist and small-time criminal James Earl Ray.',
        citations: [
            {
                source: 'History Channel',
                link: 'https://www.history.com/topics/black-history/martin-luther-king-jr-assassination',
            },
            {
                source: 'American Federation of State, County & Municipal Employees',
                link: 'https://www.afscme.org/about/history/mlk/mountaintop',
            },
        ],
    },
    {
        title: 'LA policemen acquitted of savage beating',
        year: 1992,
        body: 'California native Rodney King led police on a high-speed chase through Los Angeles and was charged with driving under the influence. When the LAPD finally stopped King, they gave him a savage beating for 15 minutes with batons, until King\'s skull was fractured, bones  broken, teeth shattered, and brain damaged. All this was captured on camera. The four officers were charged with excessive use of force, but acquitted a year later by a jury consisting of 12 residents from the distant white suburb of Vetura County. LA residents rioted by setting fires, looting, and destroying liquor stores, grocery stores, retail shops and fast food restaurants. By the time the riots ended, 63 people had been killed, 2,383 people had been injured, more than 12,000 had been arrested, and estimates of property damage were over $1 billion, mostly in Koreatown.',
        citations: [
            {
                source: 'NPR',
                link: 'https://www.npr.org/2017/04/26/524744989/when-la-erupted-in-anger-a-look-back-at-the-rodney-king-riots',
            }
        ],
    }
];


/***/ }),

/***/ "./src/app/components/viz/systemic_racism/dialog.css":
/*!***********************************************************!*\
  !*** ./src/app/components/viz/systemic_racism/dialog.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    outline: none;\n}\n\nh1 {\n    margin-bottom: 0px;\n}\n\nh1.mat-dialog-title {\n    max-height: 65px;\n}\n\ndiv.mat-dialog-content {\n    max-height: 200px;\n    margin: 10px 0px;\n    padding: 0px;\n}\n\np {\n    margin: 0px;\n}\n\ndiv.button-container {\n    padding-top: 10px;\n}\n\ndiv.citations-container {\n    width: 100%;\n}\n\n@media screen and (max-width: 840px) {\n    h1.mat-dialog-title {\n\toverflow: scroll;\n    }\n}\n"

/***/ }),

/***/ "./src/app/components/viz/systemic_racism/dialog.ng.html":
/*!***************************************************************!*\
  !*** ./src/app/components/viz/systemic_racism/dialog.ng.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\n  <h1 mat-dialog-title #matDialogTitle>\n    {{data.events[blockIndex].details.title}}\n    <span *ngIf=\"data.events[blockIndex].details.year > 1\">\n    {{data.events[blockIndex].details.year}}</span></h1>\n  <div mat-dialog-content #matDialogContent>\n    <p>{{data.events[blockIndex].details.body}}</p>\n  </div>\n  <div mat-dialog-actions>\n    <div class=\"citations-container\">\n      <ng-container\n\t*ngFor=\"let citation of data.events[blockIndex].details.citations;\n\t\tlet i = index\">\n\t<span *ngIf=\"i===0\">Citations:&nbsp;</span>\n\t<span fxHide.lt-md>\n\t  <a [href]=\"citation.link\"\n\t     target=\"_blank\">{{citation.source}}</a>\n\t  <span class=\"separator\"\n\t\t*ngIf=\"i < data.events[blockIndex].details.citations.length - 1\">,&nbsp;</span>\n\t</span>\n\t<span fxHide.gt-sm>\n\t  <a [href]=\"citation.link\"\n\t     target=\"_blank\">{{i+1}}</a>\n\t  <span class=\"separator\"\n\t\t*ngIf=\"i < data.events[blockIndex].details.citations.length - 1\">,&nbsp;</span>\n\t</span>\n      </ng-container>\n    </div>\n    <div class=\"button-container\">\n      <button\n\tmat-button\n\t[disabled]=\"blockIndex === 0\"\n\t(click)=\"onPrevious()\">Previous</button>\n      <button\n\tmat-button\n\t[disabled]=\"blockIndex === data.events.length - 1 ||\n\t\t    blockIndex === data.totalBlocks - 1\"\n\t(click)=\"onNext()\">Next</button>\n      <button mat-button fxHide.xs (click)=\"onClose()\">Close</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/viz/systemic_racism/systemic_racism.css":
/*!********************************************************************!*\
  !*** ./src/app/components/viz/systemic_racism/systemic_racism.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".viz {\n    width: 100%;\n    height: 75%;\n}\n\nh1 {\n    color: black;\n    font-family: 'open-sans-light';\n    margin: 0;\n    padding: 18px 10px 0px 50px;\n}\n\nh1 span {\n    color: red;\n}\n\nh2 {\n    color: black;\n    font-family: 'open-sans-light';\n    margin: 0;\n    padding: 10px 10px 5px 50px;\n}\n\nh3 {\n   font-family: 'open-sans-light';\n    margin: 0;\n    padding: 10px 10px 5px 50px;\n}\n\n@media screen and (max-width: 840px) {\n    .viz {\n\theight: 65%;\n    }\n}\n\n@media screen and (max-width: 375px) {\n    .viz {\n\theight: 58%;\n    }\n}\n\n@media screen and (max-width: 340px) {\n    .viz {\n\theight: 50%;\n    }\n}\n"

/***/ }),

/***/ "./src/app/components/viz/systemic_racism/systemic_racism.ng.html":
/*!************************************************************************!*\
  !*** ./src/app/components/viz/systemic_racism/systemic_racism.ng.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> {{text}} {{citation}} </div>\n\n<h1> <span>Systemic racism</span> is built brick by brick. </h1>\n<h2 fxHide.lt-md> Click on a block to learn more. </h2>\n<h3 fxHide.gt-sm> Click on a block after the animation completes. </h3>\n<svg class=\"viz\">\n</svg>\n"

/***/ }),

/***/ "./src/app/components/viz/systemic_racism/systemic_racism.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/viz/systemic_racism/systemic_racism.ts ***!
  \*******************************************************************/
/*! exports provided: SystemicRacismViz, SystemicRacismDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemicRacismViz", function() { return SystemicRacismViz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemicRacismDialog", function() { return SystemicRacismDialog; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/components/viz/systemic_racism/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



;
var SystemicRacismViz = /** @class */ (function () {
    function SystemicRacismViz(dialog) {
        this.dialog = dialog;
        // Block dimensions.
        this.BLOCK_HEIGHT = 30;
        this.BLOCK_WIDTH = 30;
        // Distance between blocks.
        this.GAP_LENGTH = 5;
        // Initial delay in ms before first block gets launched.
        this.DELAY = 100;
        // The transition time in ms.
        this.DURATION = 1000;
        // Where the block will be dropped from.
        this.START_X = 50;
        this.START_Y = 20;
        // The top-left corner of the system.
        this.SYSTEM_X = 50;
        this.SYSTEM_Y = 20;
        this.events = [];
        this.details = _data__WEBPACK_IMPORTED_MODULE_2__["DETAILS"];
    }
    SystemicRacismViz.prototype.ngAfterViewInit = function () {
        this.svgContainer = d3.select("svg.viz");
        this.svgWidth = parseInt(this.svgContainer.style("width"));
        this.svgHeight = parseInt(this.svgContainer.style("height"));
        this.initializeData();
        /** https://mathiasbynens.be/notes/settimeout-onload */
        setTimeout(this.initializeViz.bind(this), 0);
        d3.select(window).on('resize', this.resizeBlocks.bind(this));
    };
    // Function to call when the page gets resized
    SystemicRacismViz.prototype.resizeBlocks = function () {
        var heightRatio = parseInt(this.svgContainer.style("height")) / this.svgHeight;
        var widthRatio = parseInt(this.svgContainer.style("width")) / this.svgWidth;
        d3.selectAll("rect")
            .attr("height", this.BLOCK_HEIGHT * heightRatio)
            .attr("width", this.BLOCK_WIDTH * widthRatio)
            .attr("x", function (d) { return d.x * widthRatio; })
            .attr("y", function (d) { return d.y * heightRatio; });
    };
    // Instantiates the visualization based on the dataset
    SystemicRacismViz.prototype.initializeViz = function () {
        var sel = this.svgContainer
            .selectAll("rect")
            .data(this.events);
        sel.enter()
            .append("rect")
            .attr("x", this.START_X)
            .attr("y", this.START_Y)
            .attr("width", this.BLOCK_WIDTH)
            .attr("height", this.BLOCK_HEIGHT)
            .attr("opacity", 0)
            .attr("id", function (d, i) { return "element" + i; })
            .sort(function (a, b) {
            if (a.delay < b.delay) {
                return 1;
            }
            return -1;
        })
            .on("mouseover", this.handleMouseOver)
            .on("mouseout", this.handleMouseOut)
            .on("click", this.openDialog.bind(this))
            .transition()
            .delay(function (d) { return d.delay; })
            .duration(this.DURATION)
            .attr("x", function (d) { return d.x; })
            .attr("y", function (d) { return d.y; })
            .attr("opacity", 1);
        sel.exit();
    };
    // Instantiates the dataset
    SystemicRacismViz.prototype.initializeData = function () {
        var cols = Math.ceil((this.svgWidth - this.SYSTEM_X - this.BLOCK_WIDTH * 2)
            / (this.BLOCK_WIDTH + this.GAP_LENGTH));
        var rows = Math.ceil((this.svgHeight - this.SYSTEM_Y - this.BLOCK_HEIGHT - this.GAP_LENGTH)
            / (this.BLOCK_HEIGHT + this.GAP_LENGTH));
        this.totalBlocks = rows * cols;
        var delay = this.DELAY;
        var x = this.SYSTEM_X;
        for (var c = 0; c < cols; c++) {
            var y = this.SYSTEM_Y;
            for (var r = 0; r < rows; r++) {
                var details = this.getDetail(rows, cols, r, c);
                this.events.push({ x: x, y: y, delay: delay, details: details });
                y += this.BLOCK_HEIGHT + this.GAP_LENGTH;
                delay += this.DELAY;
            }
            x += this.BLOCK_WIDTH + this.GAP_LENGTH;
        }
    };
    // Returns a detail, which could be a block about history,
    // a suggestion to tweet a detail at me, or a hint that if
    // you expanded the page and refreshed it, you'd get more
    // details.
    SystemicRacismViz.prototype.getDetail = function (rows, cols, r, c) {
        var details;
        var totalDetails = this.details.length;
        var index = c * rows + r;
        if (totalDetails < this.totalBlocks) {
            if (index < totalDetails) {
                details = this.details[index];
            }
            else {
                details = _data__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_DETAIL"];
            }
        }
        else {
            if (index < this.totalBlocks - 1) {
                details = this.details[index];
            }
            else {
                details = _data__WEBPACK_IMPORTED_MODULE_2__["MORE_DETAIL"];
            }
        }
        return details;
    };
    // Change the color of the rectangle when you hover over it
    SystemicRacismViz.prototype.handleMouseOver = function (d, i) {
        d3.select(this)
            .attr("fill", "red")
            .style("cursor", "pointer");
    };
    SystemicRacismViz.prototype.handleMouseOut = function (d, i) {
        d3.select(this).attr("fill", "black");
    };
    SystemicRacismViz.prototype.openDialog = function (d, i) {
        var dialogRef = this.dialog.open(SystemicRacismDialog, {
            width: '80%',
            data: {
                index: this.events.length - i - 1,
                events: this.events,
                totalBlocks: this.totalBlocks,
                svgContainer: this.svgContainer,
            },
        });
    };
    SystemicRacismViz = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'systemic-racism-viz',
            template: __webpack_require__(/*! ./systemic_racism.ng.html */ "./src/app/components/viz/systemic_racism/systemic_racism.ng.html"),
            styles: [__webpack_require__(/*! ./systemic_racism.css */ "./src/app/components/viz/systemic_racism/systemic_racism.css")],
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], SystemicRacismViz);
    return SystemicRacismViz;
}());

var SystemicRacismDialog = /** @class */ (function () {
    function SystemicRacismDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SystemicRacismDialog.prototype.ngOnInit = function () {
        this.blockIndex = this.data.index;
        this.updateVisit();
    };
    SystemicRacismDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    SystemicRacismDialog.prototype.onNext = function () {
        this.blockIndex += 1;
        this.updateVisit();
    };
    SystemicRacismDialog.prototype.onPrevious = function () {
        this.blockIndex -= 1;
        this.updateVisit();
    };
    SystemicRacismDialog.prototype.updateVisit = function () {
        this.data.svgContainer
            .select("#element" + this.blockIndex)
            .attr("opacity", .5);
        this.title.nativeElement.scrollTop = 0;
        this.content.nativeElement.scrollTop = 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matDialogTitle'),
        __metadata("design:type", Object)
    ], SystemicRacismDialog.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matDialogContent'),
        __metadata("design:type", Object)
    ], SystemicRacismDialog.prototype, "content", void 0);
    SystemicRacismDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'systemic-racism-dialog',
            template: __webpack_require__(/*! ./dialog.ng.html */ "./src/app/components/viz/systemic_racism/dialog.ng.html"),
            styles: [__webpack_require__(/*! ./dialog.css */ "./src/app/components/viz/systemic_racism/dialog.css")],
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object])
    ], SystemicRacismDialog);
    return SystemicRacismDialog;
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
    FileType["Post"] = "post";
    FileType["About"] = "about";
    FileType["Resume"] = "resume";
})(FileType || (FileType = {}));


/***/ }),

/***/ "./src/app/pages/about/about.css":
/*!***************************************!*\
  !*** ./src/app/pages/about/about.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n    height: 100%;\n}\n\n.button {\n    z-index: 2;\n}\n\n.about-box {\n    position: absolute;\n    bottom: .5em;\n    left: .5em;\n    background: white;\n    left: 5%;\n    bottom: 5%;\n    width: 87%;\n    border-radius:8px;\n    border-top-width:1.33333px;\n    box-shadow:rgba(0, 0, 0, 0.3) 0px 2px 4px 0px;\n    padding: 10px;\n}\n\n.button-container {\n    margin-top: 5px;\n}\n\n.content-container {\n    overflow-y: scroll;\n    max-height: 150px;\n}\n"

/***/ }),

/***/ "./src/app/pages/about/about.ng.html":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.ng.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<panel [name]=\"'About'\">\n  <ng-container content>\n    <div #aboutBox class=\"about-box\">\n      <div class=\"content-container\">\n\t<b>{{points[pointIndex].title}}.</b> {{points[pointIndex].description}}\n      </div>\n      <div class=\"button-container\" fxLayout=\"row-reverse\">\n\t<button mat-button [disabled]=\"pointIndex === points.length - 1\"\n\t\t(click)=\"onNext()\">Next</button>\n\t<button mat-button [disabled]=\"pointIndex === 0\"\n\t\t(click)=\"onPrevious()\">Previous</button>\n      </div>\n    </div>\n    <div id=\"map\" class=\"map\"></div>\n  </ng-container>\n</panel>\n"

/***/ }),

/***/ "./src/app/pages/about/about.ts":
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/app/pages/about/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var About = /** @class */ (function () {
    function About() {
        this.points = _data__WEBPACK_IMPORTED_MODULE_1__["POINTS"];
        this.pointIndex = 0;
    }
    About.prototype.ngAfterViewInit = function () {
        var position = this.getCurrentPosition();
        var zoom = this.getCurrentZoom();
        var overlay = new ol.control.Control({
            element: this.aboutBox.nativeElement,
        });
        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            controls: [overlay],
            view: new ol.View({
                center: position,
                zoom: zoom,
            })
        });
    };
    About.prototype.getCurrentPosition = function () {
        return ol.proj.fromLonLat([this.points[this.pointIndex].longitude,
            this.points[this.pointIndex].latitude]);
    };
    About.prototype.getCurrentZoom = function () {
        return this.points[this.pointIndex].zoom;
    };
    About.prototype.onPrevious = function () {
        this.pointIndex -= 1;
        var position = this.getCurrentPosition();
        var zoom = this.getCurrentZoom();
        this.flyTo(position, zoom);
    };
    About.prototype.onNext = function () {
        this.pointIndex += 1;
        var position = this.getCurrentPosition();
        var zoom = this.getCurrentZoom();
        this.flyTo(position, zoom);
    };
    About.prototype.flyTo = function (position, zoom) {
        var view = this.map.getView();
        var duration = 500;
        view.animate({
            zoom: zoom,
            center: position,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aboutBox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], About.prototype, "aboutBox", void 0);
    About = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.ng.html */ "./src/app/pages/about/about.ng.html"),
            styles: [__webpack_require__(/*! ./about.css */ "./src/app/pages/about/about.css")]
        })
    ], About);
    return About;
}());



/***/ }),

/***/ "./src/app/pages/about/data.ts":
/*!*************************************!*\
  !*** ./src/app/pages/about/data.ts ***!
  \*************************************/
/*! exports provided: POINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTS", function() { return POINTS; });
var POINTS = [
    {
        latitude: 49.1283514,
        longitude: -123.2264278,
        zoom: 10,
        title: 'Richmond, Canada',
        description: 'I was born here. My mom immigrated to Richmond amid escalating tensions between Taiwan and China, right before the Third Taiwan Strait Crisis. I visited this city as an adult, experiencing the cultural shock of expecting a place to be Western, only to learn that it was 53% Chinese. When shopping at the Richmond Centre, so much of the signage was in Chinese that I thought maybe I had taken the plane to Taipei by mistake. In all honesty, I did not spend much time in Canada, nor do I know it\'s history well, but am thankful to hold its citizenship.',
    },
    {
        latitude: 23.8629809,
        longitude: 121.16388,
        zoom: 6,
        title: 'Taipei, Taiwan',
        description: 'I moved back to Taiwan as a toddler and spent my first 18 years here.',
    },
    {
        latitude: 33.7676334,
        longitude: -84.56103223,
        zoom: 6,
        title: 'Atlanta, Georgia',
        description: 'I went to Georgia Tech for undergrad.',
    },
    {
        latitude: 42.3142643,
        longitude: -71.110711,
        zoom: 6,
        title: 'Boston, Massachussetts',
        description: 'I moved to Boston for work after I graduated.',
    },
];


/***/ }),

/***/ "./src/app/pages/desktop/desktop.ng.html":
/*!***********************************************!*\
  !*** ./src/app/pages/desktop/desktop.ng.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n  <shortcut\n    [name]=\"'About me'\"\n    [fileType]=\"FileType.About\"\n    [id]=\"2\">\n  </shortcut>\n  <shortcut\n    [name]=\"'BLM'\"\n    [fileType]=\"FileType.Folder\"\n    [id]=\"1\">\n  </shortcut>\n  <shortcut\n    [name]=\"'Resume'\"\n    [fileType]=\"FileType.Resume\"\n    [id]=\"-1\">\n  </shortcut>\n</div>\n"

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
/* harmony import */ var _interfaces_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/file */ "./src/app/interfaces/file.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Desktop = /** @class */ (function () {
    function Desktop() {
        this.FileType = _interfaces_file__WEBPACK_IMPORTED_MODULE_1__["FileType"];
    }
    Desktop = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'desktop',
            template: __webpack_require__(/*! ./desktop.ng.html */ "./src/app/pages/desktop/desktop.ng.html"),
        })
    ], Desktop);
    return Desktop;
}());



/***/ }),

/***/ "./src/app/pages/folder/folder.ng.html":
/*!*********************************************!*\
  !*** ./src/app/pages/folder/folder.ng.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<panel [name]=\"'BLM'\">\n  <directory content></directory>\n</panel>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Folder = /** @class */ (function () {
    function Folder() {
    }
    Folder = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'folder',
            template: __webpack_require__(/*! ./folder.ng.html */ "./src/app/pages/folder/folder.ng.html"),
        })
    ], Folder);
    return Folder;
}());



/***/ }),

/***/ "./src/app/pages/post/post.ng.html":
/*!*****************************************!*\
  !*** ./src/app/pages/post/post.ng.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<panel [name]=\"'BLM'\">\n  <systemic-racism-viz content></systemic-racism-viz>\n</panel>\n"

/***/ }),

/***/ "./src/app/pages/post/post.ts":
/*!************************************!*\
  !*** ./src/app/pages/post/post.ts ***!
  \************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Post = /** @class */ (function () {
    function Post() {
    }
    Post = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'post',
            template: __webpack_require__(/*! ./post.ng.html */ "./src/app/pages/post/post.ng.html"),
        })
    ], Post);
    return Post;
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