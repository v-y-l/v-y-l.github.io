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
        this.title = 'Victor\'s homepage';
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

module.exports = ".header {\n    background: rgb(34,34,34);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 8px 20px 8px 20px;\n}\n\n.header .user {\n    font-family: 'open-sans-bold';\n    color: white;\n}\n\n.twitter {\n    width: 22px;\n    height: 22px;\n    cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/components/header/header.ng.html":
/*!**************************************************!*\
  !*** ./src/app/components/header/header.ng.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\"\n     fxLayoutGap=\"15px\"\n     fxLayoutAlign=\"end\"\n     class=\"header\">\n  <img\n    class=\"twitter\"\n    src=\"../../assets/twitter.png\"\n    (click)=\"goToTwitter()\" />\n  <span class=\"user\">Victor Lin</span>\n</div>\n"

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

module.exports = ".panel {\n    width: 100%;\n    height: 75%;\n}\n\n@media screen and (max-width: 840px) {\n    .panel {\n\theight: 83%;\n    }\n}\n\n.header {\n    color: black;\n    background: #fafafa;\n    padding: 8px;\n    border-radius: 5px 5px 0px 0px;\n    border: 1px 1px 0px 1px solid rgb(135,127,126);\n}\n\n.content {\n    background: white;\n    border-radius: 0px 0px 5px 5px;\n    border: 1px 1px 0px 1px solid rgb(135,127,126);\n    height: 100%;\n}\n\n.close-button {\n    font-family: 'open-sans';\n    background: rgb(252,91,87);\n    min-width: 0px;\n    line-height: 0px;\n    padding: 0px;\n    border-radius: 50%;\n    width: 14px;\n    height: 14px;\n    color: transparent;\n}\n\n.close-button:hover {\n    background-color: rgb(252,91,87);\n    opacity: 1;\n    color: rgb(161,12,18);\n    font-size: 10px;\n}\n\n.close-button:hover ::ng-deep .mat-button-focus-overlay {\n    background-color: transparent;\n}\n\n.fade-in {\n    animation: fadeIn ease .5s;\n    -webkit-animation: fadeIn ease .5s;\n    -moz-animation: fadeIn ease .5s;\n    -o-animation: fadeIn ease .5s;\n    -ms-animation: fadeIn ease .5s;\n}\n\n@keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n}\n\n@-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n}\n"

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

module.exports = ".tile {\n    width: 100px;\n    height: 120px;\n    padding: 25px;\n    border: 1px solid transparent;\n    background: transparent;\n    border-radius: 8px;\n    line-height: 20px;\n    color: white;\n}\n\n.tile:hover {\n    background: #a7a7a773;\n}\n"

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
    title: 'Thank you for reading.',
    body: 'You\'ve read all of the landmark events that contribute to systemic racism in America that I know of. Please tweet at me using #systemicracismviz if I\'ve missed any events or made any typos. This is a personal labor of love, so please be understanding that I may not update the visualization right away.',
    year: 0,
    citations: [],
};
var MORE_DETAIL = {
    title: 'There are more events that don\'t fit the screen.',
    body: 'Believe it or not, the injustices of systemic racism are too numerous to fit your screen. Please resize your browser and refresh or use a larger device.',
    year: 0,
    citations: [],
};
var DETAILS = [
    {
        title: 'Slavery in America',
        year: 1619,
        body: 'The first 19 or so Africans to reach the British colonies arrived in Point Comfort, Virginia, near Jamestown, in 1619, brought by British privateers who had seized them from a captured Portuguese slave ship. Slaves were usually baptized in Africa before embarking.',
        citations: [
            {
                name: 'Africa slaves at Jamestown by National Park Service',
                link: 'https://www.nps.gov/jame/learn/historyculture/african-americans-at-jamestown.htm',
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/components/viz/systemic_racism/dialog.css":
/*!***********************************************************!*\
  !*** ./src/app/components/viz/systemic_racism/dialog.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    outline: none;\n}\n"

/***/ }),

/***/ "./src/app/components/viz/systemic_racism/dialog.ng.html":
/*!***************************************************************!*\
  !*** ./src/app/components/viz/systemic_racism/dialog.ng.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\n  <h1 mat-dialog-title>\n    {{data.events[blockIndex].details.title}}\n    <span *ngIf=\"data.events[blockIndex].details.year > 1\">\n    {{data.events[blockIndex].details.year}}</span></h1>\n  <div mat-dialog-content>\n    <p>{{data.events[blockIndex].details.body}}</p>\n    <ng-container\n\t*ngFor=\"let citation of data.events[blockIndex].details.citations;\n\t\tlet i = index\">\n      <a [href]=\"citation.link\" target=\"_blank\">{{citation.name}}</a>\n      <span class=\"separator\"\n\t    *ngIf=\"i < data.events[blockIndex].details.citations.length - 1\">,</span>\n    </ng-container>\n  </div>\n  <div mat-dialog-actions>\n    <button\n      mat-button\n      [disabled]=\"blockIndex === 0\"\n      (click)=\"onPrevious()\">Previous</button>\n    <button\n      mat-button\n      [disabled]=\"blockIndex === data.events.length - 1 ||\n\t\t  blockIndex === data.totalBlocks - 1\"\n      (click)=\"onNext()\">Next</button>\n    <button mat-button fxHide.lt-md (click)=\"onClose()\">Close</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/viz/systemic_racism/systemic_racism.css":
/*!********************************************************************!*\
  !*** ./src/app/components/viz/systemic_racism/systemic_racism.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".viz {\n    width: 100%;\n    height: 75%;\n}\n\nh1 {\n    color: black;\n    font-family: 'open-sans-light';\n    margin: 0;\n    padding: 18px 10px 0px 50px;\n}\n\nh1 span {\n    color: red;\n}\n\nh2 {\n    color: black;\n    font-family: 'open-sans-light';\n    margin: 0;\n    padding: 10px 10px 5px 50px;\n}\n"

/***/ }),

/***/ "./src/app/components/viz/systemic_racism/systemic_racism.ng.html":
/*!************************************************************************!*\
  !*** ./src/app/components/viz/systemic_racism/systemic_racism.ng.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> {{text}} {{citation}} </div>\n\n<h1> <span>Systemic racism</span> is built brick by brick. </h1>\n<h2 fxHide.lt-md> Click on a block to learn more. </h2>\n<svg class=\"viz\">\n</svg>\n"

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
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
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
        this.svgContainer = d3__WEBPACK_IMPORTED_MODULE_3__["select"]("svg.viz");
        this.svgWidth = parseInt(this.svgContainer.style("width"));
        this.svgHeight = parseInt(this.svgContainer.style("height"));
        this.initializeData();
        /** https://mathiasbynens.be/notes/settimeout-onload */
        setTimeout(this.initializeViz.bind(this), 0);
        d3__WEBPACK_IMPORTED_MODULE_3__["select"](window).on('resize', this.resizeBlocks.bind(this));
    };
    // Function to call when the page gets resized
    SystemicRacismViz.prototype.resizeBlocks = function () {
        var heightRatio = parseInt(this.svgContainer.style("height")) / this.svgHeight;
        var widthRatio = parseInt(this.svgContainer.style("width")) / this.svgWidth;
        d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"]("rect")
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
        d3__WEBPACK_IMPORTED_MODULE_3__["select"](this)
            .attr("fill", "red")
            .style("cursor", "pointer");
    };
    SystemicRacismViz.prototype.handleMouseOut = function (d, i) {
        d3__WEBPACK_IMPORTED_MODULE_3__["select"](this).attr("fill", "black");
    };
    SystemicRacismViz.prototype.openDialog = function (d, i) {
        var dialogRef = this.dialog.open(SystemicRacismDialog, {
            width: '80%',
            data: {
                index: this.events.length - i - 1,
                events: this.events,
                totalBlocks: this.totalBlocks,
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
    };
    SystemicRacismDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    SystemicRacismDialog.prototype.onNext = function () {
        this.blockIndex += 1;
    };
    SystemicRacismDialog.prototype.onPrevious = function () {
        this.blockIndex -= 1;
    };
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
})(FileType || (FileType = {}));


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
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "<panel>\n  <systemic-racism-viz content></systemic-racism-viz>\n</panel>\n"

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