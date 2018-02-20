webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <i class=\"fa fa-arrow-left\" (click)=\"backClicked()\"></i>\n      <span style=\"margin-left: 20px;\">About</span>\n    </mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(loc) {
        this.loc = loc;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.backClicked = function () {
        this.loc.back();
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n    background-color:white;\r\n    height:75vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.footer {\r\n    position: relative;\r\n    bottom: 0px;\r\n    background-color:white;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet> </router-outlet>\n<mat-toolbar class=\"footer\" style=\"background-color:rgb(48, 46, 46);color:white;margin-top:10px;height:120px; font-size:10px;\">\n    Avis Budget Group @copyrights<br>\n    Since 2003<br>\n    United States of America\n</mat-toolbar>    "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, loc) {
        this.router = router;
        this.loc = loc;
        this.title = 'app';
        this.back = false;
    }
    AppComponent.prototype.login = function () {
        this.back = true;
    };
    AppComponent.prototype.backClicked = function () {
        this.back = false;
        this.loc.back();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__startpage_startpage_component__ = __webpack_require__("../../../../../src/app/startpage/startpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_success_login_success_component__ = __webpack_require__("../../../../../src/app/login-success/login-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vehicle_prep_vehicle_prep_component__ = __webpack_require__("../../../../../src/app/vehicle-prep/vehicle-prep.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__startpage_startpage_component__["a" /* StartpageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_success_login_success_component__["a" /* LoginSuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_17__vehicle_prep_vehicle_prep_component__["a" /* VehiclePrepComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot([
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] },
                    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_13__startpage_startpage_component__["a" /* StartpageComponent */] },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */] },
                    { path: 'loginsuccess', component: __WEBPACK_IMPORTED_MODULE_14__login_success_login_success_component__["a" /* LoginSuccessComponent */] },
                    { path: 'vehicleprep', component: __WEBPACK_IMPORTED_MODULE_17__vehicle_prep_vehicle_prep_component__["a" /* VehiclePrepComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__startpage_startpage_component__["a" /* StartpageComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_dialog__["b" /* MatDialogModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/login-success/login-success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-success/login-success.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login-success works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/login-success/login-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginSuccessComponent = /** @class */ (function () {
    function LoginSuccessComponent() {
    }
    LoginSuccessComponent.prototype.ngOnInit = function () {
    };
    LoginSuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-success',
            template: __webpack_require__("../../../../../src/app/login-success/login-success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-success/login-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginSuccessComponent);
    return LoginSuccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: inline-block;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    padding:20px;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    \r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <i class=\"fa fa-arrow-left align-left\" (click)=\"  backClicked()\"></i>\n      <span style=\"margin-left: 20px;\">Welcome to Prep App</span>\n    </mat-toolbar>\n    \n<div class=\"example-container\">\n    <mat-toolbar>\n        <span style=\"margin-left: 20px;\">Sign In</span>\n      </mat-toolbar>\n      <br>\n  <mat-form-field>\n    <input  [(ngModel)]=\"user\" type=\"text\" matInput placeholder=\"Username\" [ngModelOptions]=\"{standalone: true}\">\n  </mat-form-field>\n  \n  <mat-form-field>\n    <input [(ngModel)]=\"pass\" type=\"password\" matInput placeholder=\"Password\" [ngModelOptions]=\"{standalone: true}\">\n  </mat-form-field>\n<br>\n  <span style=\"color:red;\">{{invalid}}</span>\n  <br><br>\n  <button mat-button\t(click)=\"login()\" style=\"background-color: rgb(0, 255, 13);color:white;height:50px; width:120px;\"><b>Login</b></button>\n  <br>\n  <br>\n  <br>\n  <div>\n  <a href=\"/login\">Forget Password</a><br><br>\n  <a href=\"/login\"> New user ? Sign Up Details</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loc, snackBar) {
        this.router = router;
        this.loc = loc;
        this.snackBar = snackBar;
        this.invalid = "";
        this.user = "";
        this.pass = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        if (this.user == "abc" && this.pass == "abc") {
            this.router.navigateByUrl("/vehicleprep");
            this.openSnackBar("Welcome", "Successfully Logged In");
        }
        else {
            this.invalid = "Invalid Username or Password";
            this.openSnackBar("Sorry", "Invalid Credentials");
        }
    };
    LoginComponent.prototype.backClicked = function () {
        this.loc.back();
    };
    LoginComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/startpage/startpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/startpage/startpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<mat-sidenav-container >\n\n    <mat-sidenav #sidenav mode=\"push\" opened=\"false\"  style=\"width:35%; color:rgb(255, 0, 0);\">\n     <div style=\"text-align: center;\"> <br>\n      <i class=\"fa fa-home \" style=\"font-size:70px;\" routerLink=\"/\" (click)=\"sidenav.toggle()\"></i><br><br>\n      <div> \n        <button mat-button  routerLink=\"/login\" type=\"button\" class=\"btn-block\"  (click)=\"sidenav.toggle();\">Login</button><br>\n        <button mat-button routerLink=\"/about\" type=\"button\" class=\"btn-block\"  (click)=\"sidenav.toggle();\">About</button>\n      </div>\n      </div>\n    </mat-sidenav>\n  \n    <mat-toolbar>\n      <i class=\"fa fa-bars\" (click)=\"sidenav.toggle()\"></i>\n        <span style=\"margin-left: 20px;\">Vehicle Deletion Prep</span>\n    </mat-toolbar>\n  \n\n  <div style=\"width:100%;\">\n  <img src=\"./assets/car.gif\" width=\"100%\">\n  </div>\n</mat-sidenav-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/startpage/startpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartpageComponent = /** @class */ (function () {
    function StartpageComponent() {
    }
    StartpageComponent.prototype.ngOnInit = function () {
    };
    StartpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-startpage',
            template: __webpack_require__("../../../../../src/app/startpage/startpage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/startpage/startpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StartpageComponent);
    return StartpageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vehicle-prep/vehicle-prep.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding:10px;\r\n    \r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n    border-radius: 5px;  \r\n  }\r\n  \r\n  .mat-form-field{\r\n      width:100%;\r\n  }\r\n  \r\n  .mat-select{\r\n    text-align:center;\r\n}\r\n  \r\n  .select_left{\r\n  text-align:left;\r\n}\r\n  \r\n  .grid_element{\r\n    position: absolute;\r\n    left: 5px;\r\n    padding:5px;\r\n  }\r\n  \r\n  .mat-select{\r\n    font-size:10px;    \r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle-prep/vehicle-prep.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n    <mat-toolbar>\n        <i class=\"fa fa-arrow-left\" (click)=\"backClicked()\">  </i>\n          <span style=\"margin-left: 20px; font-family:Arial;\">Mva {{MvaNumber}} Vehicle Prep</span> \n          <span style=\"width:100%;text-align:left\"></span> \n          <i class=\"fa fa-ellipsis-v\" (click)=\"sidenav1.toggle();\">  </i>  \n        </mat-toolbar>\n  \n        <mat-sidenav  #sidenav1 mode=\"over\" opened=\"false\" position=\"end\"  style=\"width:30%; color:rgb(255, 0, 0);\">\n            <div style=\"text-align: center;\"> <br>\n             <div> \n               <button mat-button  routerLink=\"/logout\" type=\"button\" class=\"btn-block\"  (click)=\"sidenav1.toggle();logout();\">Logout</button><br>\n             </div>\n             </div>\n           </mat-sidenav>\n      \n</mat-sidenav-container>\n\n<div class=\"example-container\">\n<mat-accordion >\n\n    <mat-expansion-panel>\n      <mat-expansion-panel-header style=\"background: red;\">\n          <mat-panel-title>\n          <b>Vehicle Details</b>\n          </mat-panel-title>\n      </mat-expansion-panel-header>\n      <br>\n      <mat-form-field>\n          <mat-select placeholder=\"Inspection Type\" class=\"select_left\">\n              <mat-option *ngFor=\"let itype of Itype\" [value]=\"itype.value\">\n                {{ itype.viewValue }}\n              </mat-option>\n            </mat-select>\n      </mat-form-field>\n  \n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"MVA\" [(ngModel)]=\"MvaNumber\" disabled>\n      </mat-form-field>\n\n      <mat-form-field>\n          <input matInput placeholder=\"Make/Model\" disabled style=\" font-family:'Times New Roman', Times, serif;\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <mat-select placeholder=\"Wheels\" class=\"select_left\">\n                <mat-option *ngFor=\"let wheel of Wheels\" [value]=\"wheel.value\">\n                  {{ wheel.viewValue }}\n                </mat-option> \n              </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"Wizard Mileage\" disabled >\n          </mat-form-field>\n\n          <mat-form-field hintLabel=\"Max 9 charaters\">\n            <input type=\"text\" matInput placeholder=\"Actual Mileage\" maxlength=\"9\" >\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-select placeholder=\"Interior\" class=\"select_left\">\n                <mat-option *ngFor=\"let int of Interior\" [value]=\"int.value\">\n                  {{ int.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-form-field>\n\n        <mat-form-field hintLabel=\"Please specify in litres\">\n        <input type=\"text\" matInput placeholder=\"Engine Size\" >\n        </mat-form-field><br>\n\n        <mat-form-field>\n          <input type=\"date\" matInput placeholder=\"Date\" >\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Last 8 of VIN\" disabled >\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select placeholder=\"Prep City\" class=\"select_left\">\n              <mat-option *ngFor=\"let city of PCity\" [value]=\"city.value\">\n                {{ city.viewValue }}\n              </mat-option>\n            </mat-select>\n      </mat-form-field>\n\n      <mat-grid-list cols=\"2\" rowHeight=\"4:1\" >\n        <mat-grid-tile ><div class=\"grid_element\" >Recalls Clear?</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n   \n        <mat-grid-tile><div class=\"grid_element\">IQ/VR/CC/EZ/ZIP Removed?</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n      </mat-grid-list>\n    </mat-expansion-panel>\n<br>\n\n<!--          Expansion 2      -->\n    <mat-expansion-panel>\n      <mat-expansion-panel-header style=\"background: red;\">\n          <mat-panel-title>\n        <b> Drivers Seat/Cockpit</b>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <br>\n      <mat-grid-list cols=\"2\" rowHeight=\"3:1\" >\n        <mat-grid-tile><div class=\"grid_element\" >Inspect Left Side & Center Rails</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x1\"></mat-slide-toggle></mat-grid-tile>\n        \n        <mat-grid-tile *ngIf=\"x1\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x1\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let dtype of DType\" [value]=\"dtype.value\">\n                  {{ dtype.viewValue }}\n                </mat-option>\n              </mat-select>\n            </mat-grid-tile>\n\n      <mat-grid-tile *ngIf=\"x1\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Damage Severity  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x1\">\n            <mat-select placeholder=\"Select Severity\">\n                <mat-option *ngFor=\"let stype of SType\" [value]=\"stype.value\">\n                  {{ stype.viewValue }}\n                </mat-option>\n              </mat-select>        \n      </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Horn Function </div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Turn Signals</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Wipers good operation </div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Warning Lights on Dashboard Cluster</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x2\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x2\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x2\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let d2type of D2Type\" [value]=\"d2type.value\">\n                  {{ d2type.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Visor / Mirror / Interior lamps</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x12\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x12\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x12\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let d12type of DT12Type\" [value]=\"d12type.value\">\n                  {{ d12type.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Headliner </div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x3\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x3\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x3\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let d3type of D3Type\" [value]=\"d3type.value\">\n                  {{ d3type.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">All Switches - Locks, Mirror </div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Heat / AC Operation </div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">All Knobs / Vents</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x4\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x4\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x4\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let d4type of D4Type\" [value]=\"d4type.value\">\n                  {{ d4type.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Radio / Stereo / Speakers</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x5\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x5\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x5\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let d5type of D5Type\" [value]=\"d5type.value\">\n                  {{ d5type.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Back Up Camera operation</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x6\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x6\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x6\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let d6type of D6Type\" [value]=\"d6type.value\">\n                  {{ d6type.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Power Outlet functioning</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Seats / Power / Manual</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Seatbelts</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x7\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x7\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x7\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let d7type of D7Type\" [value]=\"d7type.value\">\n                  {{ d7type.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Trim - Door / Seat</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x8\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x8\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x8\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let d8type of D8Type\" [value]=\"d8type.value\">\n                  {{ d8type.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Upholstery / Carpet</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x9\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x9\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x9\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let d9type of D9Type\" [value]=\"d9type.value\">\n                  {{ d9type.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Fuel level</div></mat-grid-tile>\n        <mat-grid-tile>\n          <mat-select placeholder=\"Select Type\">\n            <mat-option *ngFor=\"let d10type of D10Type\" [value]=\"d10type.value\">\n              {{ d10type.viewValue }}\n            </mat-option>\n          </mat-select></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Trunk / Hood / Fuel Release</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Floor Mat Front Set (If equippped)</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x11\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x11\"><div class=\"grid_element\" style=\"color:red; font-size:10px;\">Did the vehicle come with mats (see ROME sticker)?</div></mat-grid-tile>\n        <mat-grid-tile *ngIf=\"x11\"><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n\n      </mat-grid-list>\n    </mat-expansion-panel>\n    <br>\n\n<!--    Expansion 3      -->\n<mat-expansion-panel>\n    <mat-expansion-panel-header style=\"background: red;\">\n      <mat-panel-title>\n      <b>Left Rear</b>\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <br>\n      <mat-grid-list cols=\"2\" rowHeight=\"3:1\" >\n\n        <mat-grid-tile><div class=\"grid_element\">Exterior Door /Mldgs / Body</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x12\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x12\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x12\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let lr1 of lftRearDT1\" [value]=\"lr1.value\">\n                  {{ lr1.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x12\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Severity  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x12\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let lr1 of lftRearDS1\" [value]=\"lr1.value\">\n                  {{ lr1.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">LR Glass</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x13\" ></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x13\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x13\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let lr1 of lftRearDT3\" [value]=\"lr1.value\">\n                  {{ lr1.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Upholstery / Carpet</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x14\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x14\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x14\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let lr1 of lftRearDT4\" [value]=\"lr1.value\">\n                  {{ lr1.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Trim - Door / Seat</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x15\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x15\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x15\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let lr1 of lftRearDT5\" [value]=\"lr1.value\">\n                  {{ lr1.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Seat Belt</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x16\" ></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x16\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x16\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let lr1 of lftRearDT6\" [value]=\"lr1.value\">\n                  {{ lr1.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Switches, Window, Lock</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Floor Mats Rear Set (If equippped)</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x17\" ></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x17\"><div class=\"grid_element\"  style=\"color:red; font-size:10px;\"> Did the vehicle come with mats (see ROME sticker)?  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x17\"><mat-slide-toggle></mat-slide-toggle> </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Wheel / Cover /Nuts / Caps </div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x18\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x18\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x18\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let lr1 of lftRearDT7\" [value]=\"lr1.value\">\n                  {{ lr1.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n        \n        <mat-grid-tile *ngIf=\"x18\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x18\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let lr1 of lftRearDS2\" [value]=\"lr1.value\">\n                  {{ lr1.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Qtr Pnl - Mldg / Body</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x19\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x19\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x19\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let lr1 of lftRearDT8\" [value]=\"lr1.value\">\n                  {{ lr1.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x19\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x19\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let lr1 of lftRearDS3\" [value]=\"lr1.value\">\n                  {{ lr1.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\">Lights</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile colspan=\"2\" rowspan=\"2\">\n          <mat-form-field>  \n          <input type=\"text\" matInput placeholder=\"Left Rear Tire Make Model\">\n        </mat-form-field>\n        </mat-grid-tile>\n        \n        <mat-grid-tile><div class=\"grid_element\">Left Rear Tire damage</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x20\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x20\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x20\">\n            <mat-select placeholder=\"Select Type\">\n                <mat-option *ngFor=\"let lr1 of lftRearDT9\" [value]=\"lr1.value\">\n                  {{ lr1.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"2\" rowspan=\"2\"> <mat-form-field>  \n          <input type=\"text\" matInput placeholder=\"Left Rear Tire Thread\">\n        </mat-form-field></mat-grid-tile>\n\n      </mat-grid-list>\n  </mat-expansion-panel>\n  <br>\n<!--    Expansion 4      -->\n<mat-expansion-panel>\n    <mat-expansion-panel-header style=\"background: red;\">\n      <mat-panel-title>\n     <b>Rear of Vehicle</b>\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <br>\n    <mat-grid-list cols=\"2\" rowHeight=\"3:1\" >\n\n        <mat-grid-tile><div class=\"grid_element\" >Inspect Rear Undercarriage</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x21\"></mat-slide-toggle></mat-grid-tile>\n        \n        <mat-grid-tile *ngIf=\"x21\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x21\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let xtype of X1Type\" [value]=\"xtype.value\">\n                  {{ xtype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n      <mat-grid-tile *ngIf=\"x21\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x21\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let xtype of X2Type\" [value]=\"xtype.value\">\n                  {{ xtype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n\n      <mat-grid-tile><div class=\"grid_element\" >Inspect Rear Body Panel / Floor</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x22\"></mat-slide-toggle></mat-grid-tile>\n        \n        <mat-grid-tile *ngIf=\"x22\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x22\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let xtype of X3Type\" [value]=\"xtype.value\">\n                  {{ xtype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n      <mat-grid-tile *ngIf=\"x22\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x22\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let xtype of X4Type\" [value]=\"xtype.value\">\n                  {{ xtype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n      <mat-grid-tile><div class=\"grid_element\" >Bumper</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x23\"></mat-slide-toggle></mat-grid-tile>\n        \n        <mat-grid-tile *ngIf=\"x23\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x23\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let xtype of X5Type\" [value]=\"xtype.value\">\n                  {{ xtype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n      <mat-grid-tile *ngIf=\"x23\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x23\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let xtype of X6Type\" [value]=\"xtype.value\">\n                  {{ xtype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n\n      <mat-grid-tile><div class=\"grid_element\" >Lights / Lenses</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x24\"></mat-slide-toggle></mat-grid-tile>\n        \n        <mat-grid-tile *ngIf=\"x24\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x24\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let xtype of X7Type\" [value]=\"xtype.value\">\n                  {{ xtype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n      <mat-grid-tile *ngIf=\"x24\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x24\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let xtype of X8Type\" [value]=\"xtype.value\">\n                  {{ xtype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n\n      <mat-grid-tile><div class=\"grid_element\" >Deck Lid / Trunk / Body</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x25\"></mat-slide-toggle></mat-grid-tile>\n        \n        <mat-grid-tile *ngIf=\"x25\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x25\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let xtype of X9Type\" [value]=\"xtype.value\">\n                  {{ xtype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n      <mat-grid-tile *ngIf=\"x25\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x25\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let xtype of X10Type\" [value]=\"xtype.value\">\n                  {{ xtype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n     \n\n      <mat-grid-tile><div class=\"grid_element\" >Cargo Net / Privacy Cover / Carpet</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x26\"></mat-slide-toggle></mat-grid-tile>\n        \n        <mat-grid-tile *ngIf=\"x26\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x26\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let xtype of X11Type\" [value]=\"xtype.value\">\n                  {{ xtype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n      <mat-grid-tile><div class=\"grid_element\" >Spare Tire / Air Kit / Jack / Mat</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\" >Manual-Book (move to RF seat)</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n        \n        <mat-grid-tile><div class=\"grid_element\" >Roof</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x27\"></mat-slide-toggle></mat-grid-tile> \n       \n        <mat-grid-tile *ngIf=\"x27\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x27\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let xtype of X12Type\" [value]=\"xtype.value\">\n                  {{ xtype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n      <mat-grid-tile *ngIf=\"x27\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n      <mat-grid-tile *ngIf=\"x27\">\n          <mat-select placeholder=\"Specify Type\">\n              <mat-option *ngFor=\"let xtype of X15Type\" [value]=\"xtype.value\">\n                {{ xtype.viewValue }}\n              </mat-option>\n            </mat-select>\n    </mat-grid-tile>\n\n      <mat-grid-tile><div class=\"grid_element\" >Antenna / Gas Cap</div></mat-grid-tile>\n      <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x28\"></mat-slide-toggle></mat-grid-tile> \n     \n      <mat-grid-tile *ngIf=\"x28\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n      <mat-grid-tile *ngIf=\"x28\">\n          <mat-select placeholder=\"Specify Type\">\n              <mat-option *ngFor=\"let xtype of X13Type\" [value]=\"xtype.value\">\n                {{ xtype.viewValue }}\n              </mat-option>\n            </mat-select>\n    </mat-grid-tile>\n\n    <mat-grid-tile><div class=\"grid_element\" >Back / Hatch Glass</div></mat-grid-tile>\n      <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x29\"></mat-slide-toggle></mat-grid-tile> \n     \n      <mat-grid-tile *ngIf=\"x29\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n      <mat-grid-tile *ngIf=\"x29\">\n          <mat-select placeholder=\"Specify Type\">\n              <mat-option *ngFor=\"let xtype of X14Type\" [value]=\"xtype.value\">\n                {{ xtype.viewValue }}\n              </mat-option>\n            </mat-select>\n    </mat-grid-tile>\n\n    <mat-grid-tile><div class=\"grid_element\" >DVD headphones and remote</div></mat-grid-tile>\n    <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile> \n   \n\n    </mat-grid-list>  \n\n  </mat-expansion-panel>\n\n  <br>\n\n<!--          Expansion 5      -->\n<mat-expansion-panel>\n    <mat-expansion-panel-header style=\"background: red;\">\n      <mat-panel-title>\n        <b>Right Rear</b>\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <br>\n\n    <mat-grid-list cols=\"2\" rowHeight=\"3:1\" >\n\n        <mat-grid-tile><div class=\"grid_element\" >Qtr Pnl - Mldg / Body</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x30\"></mat-slide-toggle></mat-grid-tile>\n        \n        <mat-grid-tile *ngIf=\"x30\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x30\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let ytype of Y1Type\" [value]=\"ytype.value\">\n                  {{ ytype.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n        <mat-grid-tile *ngIf=\"x30\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x30\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let ytype of Y2Type\" [value]=\"ytype.value\">\n                  {{ ytype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n        \n        <mat-grid-tile><div class=\"grid_element\" >Lights</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x31\"></mat-slide-toggle></mat-grid-tile>\n\n        \n        <mat-grid-tile><div class=\"grid_element\" >Wheel / Cover / Nuts / Caps</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x32\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x32\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x32\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let ytype of Y3Type\" [value]=\"ytype.value\">\n                  {{ ytype.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n        <mat-grid-tile *ngIf=\"x32\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x32\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let ytype of Y4Type\" [value]=\"ytype.value\">\n                  {{ ytype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n        \n\n        <mat-grid-tile><div class=\"grid_element\" >Exterior Door / Mldgs / Body</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x33\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x33\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x33\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let ytype of Y5Type\" [value]=\"ytype.value\">\n                  {{ ytype.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n        <mat-grid-tile *ngIf=\"x33\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x33\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let ytype of Y11Type\" [value]=\"ytype.value\">\n                  {{ ytype.viewValue }}\n                </mat-option>\n              </mat-select>\n      </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\" >RR Glass</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x34\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x34\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x34\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let ytype of Y6Type\" [value]=\"ytype.value\">\n                  {{ ytype.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n\n        <mat-grid-tile><div class=\"grid_element\" >Trim - Door, Seat</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x35\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x35\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x35\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let ytype of Y7Type\" [value]=\"ytype.value\">\n                  {{ ytype.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\" >Switches, Window, Lock</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x36\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\" >Seat Belt</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x37\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x37\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x37\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let ytype of Y8Type\" [value]=\"ytype.value\">\n                  {{ ytype.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\" >Upholstery / Carpet</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x38\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x38\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x38\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let ytype of Y9Type\" [value]=\"ytype.value\">\n                  {{ ytype.viewValue }}\n                </mat-option>\n              </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"2\" rowspan=\"2\"> <mat-form-field>  \n        <input type=\"text\" matInput placeholder=\"Right Rear Tire Make Model\">\n        </mat-form-field></mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\" >Right Rear Tire damage</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"x40\"></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"x40\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"x40\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let ytype of Y10Type\" [value]=\"ytype.value\">\n                  {{ ytype.viewValue }}\n                </mat-option>\n              </mat-select>\n            </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"2\" rowspan=\"2\"> <mat-form-field>  \n        <input type=\"text\" matInput placeholder=\"Right Rear Tire Thread\">\n        </mat-form-field></mat-grid-tile>\n      \n      </mat-grid-list>\n    \n  </mat-expansion-panel>\n  <br>\n\n  \n<!--          Expansion 6      -->\n<mat-expansion-panel>\n    <mat-expansion-panel-header style=\"background: red;\">\n      <mat-panel-title>\n      <b>Right Side Front</b>\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <br> \n   <mat-grid-list cols=\"2\" rowHeight=\"3:1\" >\n      <mat-grid-tile><div class=\"grid_element\" >Inspect Right - Side & Ctr Rails</div></mat-grid-tile>\n      <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"RSF1\"></mat-slide-toggle></mat-grid-tile>\n      \n      <mat-grid-tile *ngIf=\"RSF1\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n      <mat-grid-tile *ngIf=\"RSF1\">\n          <mat-select placeholder=\"Specify Type\">\n              <mat-option *ngFor=\"let rsf of RgtSdeDT1\" [value]=\"rsf.value\">\n                {{ rsf.viewValue }}\n              </mat-option>\n            </mat-select>\n      </mat-grid-tile>\n      <mat-grid-tile *ngIf=\"RSF1\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n      <mat-grid-tile *ngIf=\"RSF1\">\n          <mat-select placeholder=\"Specify Type\">\n              <mat-option *ngFor=\"let rsf of RgtSdeDS1\" [value]=\"rsf.value\">\n                {{ rsf.viewValue }}\n              </mat-option>\n            </mat-select>\n    </mat-grid-tile>\n\n    <mat-grid-tile><div class=\"grid_element\" >Undercarriage Front Right</div></mat-grid-tile>\n    <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"RSF2\"></mat-slide-toggle></mat-grid-tile>\n    \n    <mat-grid-tile *ngIf=\"RSF2\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n    <mat-grid-tile *ngIf=\"RSF2\">\n        <mat-select placeholder=\"Specify Type\">\n            <mat-option *ngFor=\"let rsf of RgtSdeDT2\" [value]=\"rsf.value\">\n              {{ rsf.viewValue }}\n            </mat-option>\n          </mat-select>\n    </mat-grid-tile>\n    <mat-grid-tile *ngIf=\"RSF2\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n    <mat-grid-tile *ngIf=\"RSF2\">\n        <mat-select placeholder=\"Specify Type\">\n            <mat-option *ngFor=\"let rsf of RgtSdeDS2\" [value]=\"rsf.value\">\n              {{ rsf.viewValue }}\n            </mat-option>\n          </mat-select>\n  </mat-grid-tile>\n  \n  <mat-grid-tile><div class=\"grid_element\" >Exterior Door / Mldgs / Body</div></mat-grid-tile>\n  <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"RSF3\"></mat-slide-toggle></mat-grid-tile>\n  \n  <mat-grid-tile *ngIf=\"RSF3\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n  <mat-grid-tile *ngIf=\"RSF3\">\n      <mat-select placeholder=\"Specify Type\">\n          <mat-option *ngFor=\"let rsf of RgtSdeDT3\" [value]=\"rsf.value\">\n            {{ rsf.viewValue }}\n          </mat-option>\n        </mat-select>\n  </mat-grid-tile>\n  <mat-grid-tile *ngIf=\"RSF3\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n  <mat-grid-tile *ngIf=\"RSF3\">\n      <mat-select placeholder=\"Specify Type\">\n          <mat-option *ngFor=\"let rsf of RgtSdeDS3\" [value]=\"rsf.value\">\n            {{ rsf.viewValue }}\n          </mat-option>\n        </mat-select>\n</mat-grid-tile>\n\n<mat-grid-tile><div class=\"grid_element\" >RF Glass</div></mat-grid-tile>\n<mat-grid-tile><mat-slide-toggle [(ngModel)]=\"RSF4\"></mat-slide-toggle></mat-grid-tile>\n\n<mat-grid-tile *ngIf=\"RSF4\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n<mat-grid-tile *ngIf=\"RSF4\">\n    <mat-select placeholder=\"Specify Type\">\n        <mat-option *ngFor=\"let rsf of RgtSdeDT4\" [value]=\"rsf.value\">\n          {{ rsf.viewValue }}\n        </mat-option>\n      </mat-select>\n</mat-grid-tile>\n\n<mat-grid-tile><div class=\"grid_element\" >RF Mirror</div></mat-grid-tile>\n<mat-grid-tile><mat-slide-toggle [(ngModel)]=\"RSF5\"></mat-slide-toggle></mat-grid-tile>\n\n<mat-grid-tile *ngIf=\"RSF5\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n<mat-grid-tile *ngIf=\"RSF5\">\n    <mat-select placeholder=\"Specify Type\">\n        <mat-option *ngFor=\"let rsf of RgtSdeDT5\" [value]=\"rsf.value\">\n          {{ rsf.viewValue }}\n        </mat-option>\n      </mat-select>\n</mat-grid-tile>\n\n<mat-grid-tile><div class=\"grid_element\" >Upholstery / Carpet</div></mat-grid-tile>\n<mat-grid-tile><mat-slide-toggle [(ngModel)]=\"RSF6\"></mat-slide-toggle></mat-grid-tile>\n\n<mat-grid-tile *ngIf=\"RSF6\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n<mat-grid-tile *ngIf=\"RSF6\">\n    <mat-select placeholder=\"Specify Type\">\n        <mat-option *ngFor=\"let rsf of RgtSdeDT6\" [value]=\"rsf.value\">\n          {{ rsf.viewValue }}\n        </mat-option>\n      </mat-select>\n</mat-grid-tile>\n\n<mat-grid-tile><div class=\"grid_element\" >Trim - Door, Seat</div></mat-grid-tile>\n<mat-grid-tile><mat-slide-toggle [(ngModel)]=\"RSF7\"></mat-slide-toggle></mat-grid-tile>\n\n<mat-grid-tile *ngIf=\"RSF7\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n<mat-grid-tile *ngIf=\"RSF7\">\n    <mat-select placeholder=\"Specify Type\">\n        <mat-option *ngFor=\"let rsf of RgtSdeDT7\" [value]=\"rsf.value\">\n          {{ rsf.viewValue }}\n        </mat-option>\n      </mat-select>\n</mat-grid-tile>\n\n\n<mat-grid-tile><div class=\"grid_element\" >Switches, Window, Lock</div></mat-grid-tile>\n<mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n<mat-grid-tile><div class=\"grid_element\" >Seat Belt</div></mat-grid-tile>\n<mat-grid-tile><mat-slide-toggle [(ngModel)]=\"RSF8\"></mat-slide-toggle></mat-grid-tile>\n\n<mat-grid-tile *ngIf=\"RSF8\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n<mat-grid-tile *ngIf=\"RSF8\">\n    <mat-select placeholder=\"Specify Type\">\n        <mat-option *ngFor=\"let rsf of RgtSdeDT8\" [value]=\"rsf.value\">\n          {{ rsf.viewValue }}\n        </mat-option>\n      </mat-select>\n</mat-grid-tile>\n\n<mat-grid-tile><div class=\"grid_element\" >Windshield (RF Side)</div></mat-grid-tile>\n<mat-grid-tile><mat-slide-toggle [(ngModel)]=\"RSF9\"></mat-slide-toggle></mat-grid-tile>\n\n<mat-grid-tile *ngIf=\"RSF9\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n<mat-grid-tile *ngIf=\"RSF9\">\n    <mat-select placeholder=\"Specify Type\">\n        <mat-option *ngFor=\"let rsf of RgtSdeDT9\" [value]=\"rsf.value\">\n          {{ rsf.viewValue }}\n        </mat-option>\n      </mat-select>\n</mat-grid-tile>\n\n<mat-grid-tile><div class=\"grid_element\" >RF Fender / Mldg / Body</div></mat-grid-tile>\n<mat-grid-tile><mat-slide-toggle [(ngModel)]=\"RSF10\"></mat-slide-toggle></mat-grid-tile>\n\n<mat-grid-tile *ngIf=\"RSF10\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n<mat-grid-tile *ngIf=\"RSF10\">\n    <mat-select placeholder=\"Specify Type\">\n        <mat-option *ngFor=\"let rsf of RgtSdeDT10\" [value]=\"rsf.value\">\n          {{ rsf.viewValue }}\n        </mat-option>\n      </mat-select>\n</mat-grid-tile>\n\n<mat-grid-tile *ngIf=\"RSF10\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n<mat-grid-tile *ngIf=\"RSF10\">\n    <mat-select placeholder=\"Specify Type\">\n        <mat-option *ngFor=\"let rsf of RgtSdeDS10\" [value]=\"rsf.value\">\n          {{ rsf.viewValue }}\n        </mat-option>\n      </mat-select>\n</mat-grid-tile>\n\n<mat-grid-tile><div class=\"grid_element\" >Wheel / Cover / Nuts / Caps</div></mat-grid-tile>\n<mat-grid-tile><mat-slide-toggle [(ngModel)]=\"RSF11\"></mat-slide-toggle></mat-grid-tile>\n\n<mat-grid-tile *ngIf=\"RSF11\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n<mat-grid-tile *ngIf=\"RSF11\">\n    <mat-select placeholder=\"Specify Type\">\n        <mat-option *ngFor=\"let rsf of RgtSdeDT11\" [value]=\"rsf.value\">\n          {{ rsf.viewValue }}\n        </mat-option>\n      </mat-select>\n</mat-grid-tile>\n\n<mat-grid-tile *ngIf=\"RSF11\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Severity Type  </div></mat-grid-tile>        \n<mat-grid-tile *ngIf=\"RSF11\">\n    <mat-select placeholder=\"Specify Type\">\n        <mat-option *ngFor=\"let rsf of RgtSdeDS11\" [value]=\"rsf.value\">\n          {{ rsf.viewValue }}\n        </mat-option>\n      </mat-select>\n</mat-grid-tile>\n\n<mat-grid-tile><div class=\"grid_element\" >Lights</div></mat-grid-tile>\n<mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n<mat-grid-tile colspan=\"2\" rowspan=\"2\"> <mat-form-field>  \n    <input type=\"text\" matInput placeholder=\"Right Front Tire Make Model\">\n</mat-form-field></mat-grid-tile>\n\n<mat-grid-tile><div class=\"grid_element\" >Right Front Tire damage</div></mat-grid-tile>\n<mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n<mat-grid-tile *ngIf=\"RSF12\"><div class=\"grid_element\"   style=\"color:red; font-size:10px;\"> Specify Damage Type  </div></mat-grid-tile>        \n<mat-grid-tile *ngIf=\"RSF12\">\n    <mat-select placeholder=\"Specify Type\">\n        <mat-option *ngFor=\"let rsf of RgtSdeDT12\" [value]=\"rsf.value\">\n          {{ rsf.viewValue }}\n        </mat-option>\n      </mat-select>\n</mat-grid-tile>\n\n<mat-grid-tile colspan=\"2\" rowspan=\"2\"> <mat-form-field>  \n    <input type=\"text\" matInput placeholder=\"Right Front Tire Thread\">\n  </mat-form-field></mat-grid-tile>\n  \n</mat-grid-list>\n</mat-expansion-panel>\n<br>\n\n<!--          Expansion 7      -->\n<mat-expansion-panel>\n    <mat-expansion-panel-header style=\"background: red;\">\n      <mat-panel-title>\n        <b>Front End</b>\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <br>\n    <mat-grid-list cols=\"2\" rowHeight=\"3:1\" >\n    <mat-grid-tile><div class=\"grid_element\" >Headlamps (must work)</div></mat-grid-tile>\n    <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"FE1\"></mat-slide-toggle></mat-grid-tile>\n    \n    <mat-grid-tile *ngIf=\"FE1\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n    <mat-grid-tile *ngIf=\"FE1\">\n        <mat-select placeholder=\"Specify Type\">\n            <mat-option *ngFor=\"let fe of FrntEndDT1\" [value]=\"fe.value\">\n              {{ fe.viewValue }}\n            </mat-option>\n          </mat-select>\n        </mat-grid-tile>\n\n    <mat-grid-tile><div class=\"grid_element\" >Turn signals (must work)</div></mat-grid-tile>\n    <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n    <mat-grid-tile><div class=\"grid_element\" >Fog Lamps (must work)</div></mat-grid-tile>\n    <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"FE2\" ></mat-slide-toggle></mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"FE2\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n    <mat-grid-tile *ngIf=\"FE2\">\n        <mat-select placeholder=\"Specify Type\">\n            <mat-option *ngFor=\"let fe of FrntEndDT2\" [value]=\"fe.value\">\n              {{ fe.viewValue }}\n            </mat-option>\n          </mat-select>\n        </mat-grid-tile>\n\n    <mat-grid-tile><div class=\"grid_element\" >Bumper</div></mat-grid-tile>\n    <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"FE3\"></mat-slide-toggle></mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"FE3\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n    <mat-grid-tile *ngIf=\"FE3\">\n        <mat-select placeholder=\"Specify Type\">\n            <mat-option *ngFor=\"let fe of FrntEndDT3\" [value]=\"fe.value\">\n              {{ fe.viewValue }}\n            </mat-option>\n          </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"FE3\"><div class=\"grid_element\" style=\"color:red;\"> Specify Severity Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"FE3\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let fe of FrntEndDS1\" [value]=\"fe.value\">\n                  {{ fe.viewValue }}\n                </mat-option>\n              </mat-select>\n            </mat-grid-tile>\n\n    <mat-grid-tile><div class=\"grid_element\" >Grille</div></mat-grid-tile>\n    <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"FE4\"></mat-slide-toggle></mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"FE4\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n    <mat-grid-tile *ngIf=\"FE4\">\n        <mat-select placeholder=\"Specify Type\">\n            <mat-option *ngFor=\"let fe of FrntEndDT4\" [value]=\"fe.value\">\n              {{ fe.viewValue }}\n            </mat-option>\n          </mat-select>\n        </mat-grid-tile>\n\n    <mat-grid-tile><div class=\"grid_element\" >Hood (must operate)</div></mat-grid-tile>\n    <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"FE5\"></mat-slide-toggle></mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"FE5\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n    <mat-grid-tile *ngIf=\"FE5\">\n        <mat-select placeholder=\"Specify Type\">\n            <mat-option *ngFor=\"let fe of FrntEndDT5\" [value]=\"fe.value\">\n              {{ fe.viewValue }}\n            </mat-option>\n          </mat-select>\n        </mat-grid-tile>\n\n      <mat-grid-tile *ngIf=\"FE5\"><div class=\"grid_element\" style=\"color:red;\"> Specify Severity Type  </div></mat-grid-tile>        \n      <mat-grid-tile *ngIf=\"FE5\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let fe of FrntEndDS2\" [value]=\"fe.value\">\n                  {{ fe.viewValue }}\n                </mat-option>\n            </mat-select>\n          </mat-grid-tile>\n        </mat-grid-list>\n  </mat-expansion-panel>  \n  <br>\n\n\n<!--          Expansion 8      -->\n<mat-expansion-panel>\n      <mat-expansion-panel-header style=\"background: red;\">\n        <mat-panel-title>\n          <b> Engine Compartment</b>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <br>\n      <mat-grid-list cols=\"2\" rowHeight=\"3:1\" >\n        \n        <mat-grid-tile><div class=\"grid_element\" >Oil Level</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n        \n        <mat-grid-tile><div class=\"grid_element\" >Oil Color</div></mat-grid-tile>\n        <mat-grid-tile><mat-select placeholder=\"Select value\">\n          <mat-option *ngFor=\"let ec of EngCmpt1\" [value]=\"ec.value\">\n            {{ ec.viewValue }}\n          </mat-option></mat-select>\n        </mat-grid-tile>\n        \n        <mat-grid-tile><div class=\"grid_element\" >Battery</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n        \n        <mat-grid-tile><div class=\"grid_element\" >Washer Fluid</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n        \n        <mat-grid-tile><div class=\"grid_element\" >All other Fluid levels at \"full\" level</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n        <br>\n        <mat-grid-tile><div class=\"grid_element\" >Emission sticker intact & in good condition</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n  \n        </mat-grid-list>\n    </mat-expansion-panel>\n    <br>\n\n\n<!--          Expansion 9      -->\n<mat-expansion-panel>\n    <mat-expansion-panel-header style=\"background: red;\">\n      <mat-panel-title>\n        <b> Left Front</b>\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <br>\n    <mat-grid-list cols=\"2\" rowHeight=\"3:1\" >\n\n      <mat-grid-tile><div class=\"grid_element\" >Undercarriage Front Left</div></mat-grid-tile>\n      <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"LF1\"></mat-slide-toggle></mat-grid-tile>\n  \n      <mat-grid-tile *ngIf=\"LF1\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n      <mat-grid-tile *ngIf=\"LF1\">\n          <mat-select placeholder=\"Specify Type\">\n              <mat-option *ngFor=\"let lf of LftFrntDT1\" [value]=\"lf.value\">\n                {{ lf.viewValue }}\n              </mat-option>\n            </mat-select>\n          </mat-grid-tile>\n  \n        <mat-grid-tile *ngIf=\"LF1\"><div class=\"grid_element\" style=\"color:red;\"> Specify Severity Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"LF1\">\n              <mat-select placeholder=\"Specify Type\">\n                  <mat-option *ngFor=\"let lf of LftFrntDS1\" [value]=\"lf.value\">\n                    {{ lf.viewValue }}\n                  </mat-option>\n            </mat-select>\n        </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\" >Examine Sub- Frame</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"LF2\"></mat-slide-toggle></mat-grid-tile>\n    \n        <mat-grid-tile *ngIf=\"LF2\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"LF2\">\n            <mat-select placeholder=\"Specify Type\">\n                <mat-option *ngFor=\"let lf of LftFrntDT2\" [value]=\"lf.value\">\n                  {{ lf.viewValue }}\n                </mat-option>\n              </mat-select>\n            </mat-grid-tile>\n    \n          <mat-grid-tile *ngIf=\"LF2\"><div class=\"grid_element\" style=\"color:red;\"> Specify Severity Type  </div></mat-grid-tile>        \n          <mat-grid-tile *ngIf=\"LF2\">\n                <mat-select placeholder=\"Specify Type\">\n                    <mat-option *ngFor=\"let lf of LftFrntDS2\" [value]=\"lf.value\">\n                      {{ lf.viewValue }}\n                    </mat-option>\n              </mat-select>\n          </mat-grid-tile>\n\n        <mat-grid-tile><div class=\"grid_element\" >LF Fender / Mldg / Body</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"LF3\"></mat-slide-toggle></mat-grid-tile>\n      \n        <mat-grid-tile *ngIf=\"LF3\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"LF3\">\n              <mat-select placeholder=\"Specify Type\">\n                  <mat-option *ngFor=\"let lf of LftFrntDT3\" [value]=\"lf.value\">\n                    {{ lf.viewValue }}\n                  </mat-option>\n                </mat-select>\n              </mat-grid-tile>\n      \n          <mat-grid-tile *ngIf=\"LF3\"><div class=\"grid_element\" style=\"color:red;\"> Specify Severity Type  </div></mat-grid-tile>        \n          <mat-grid-tile *ngIf=\"LF3\">\n                  <mat-select placeholder=\"Specify Type\">\n                      <mat-option *ngFor=\"let lf of LftFrntDS3\" [value]=\"lf.value\">\n                        {{ lf.viewValue }}\n                      </mat-option>\n              </mat-select>\n          </mat-grid-tile>\n\n          <mat-grid-tile><div class=\"grid_element\" >LF Glass</div></mat-grid-tile>\n          <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"LF4\"></mat-slide-toggle></mat-grid-tile>\n        \n          <mat-grid-tile *ngIf=\"LF4\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n          <mat-grid-tile *ngIf=\"LF4\">\n                <mat-select placeholder=\"Specify Type\">\n                    <mat-option *ngFor=\"let lf of LftFrntDT4\" [value]=\"lf.value\">\n                      {{ lf.viewValue }}\n                    </mat-option>\n                  </mat-select>\n                </mat-grid-tile>\n        \n        <mat-grid-tile><div class=\"grid_element\" >LF Mirror</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"LF5\"></mat-slide-toggle></mat-grid-tile>\n              \n        <mat-grid-tile *ngIf=\"LF5\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"LF5\">\n                  <mat-select placeholder=\"Specify Type\">\n                      <mat-option *ngFor=\"let lf of LftFrntDT5\" [value]=\"lf.value\">\n                          {{ lf.viewValue }}\n                      </mat-option>\n                </mat-select>\n        </mat-grid-tile>\n        \n        <mat-grid-tile><div class=\"grid_element\" >Exterior Door / Mldgs / Body</div></mat-grid-tile>\n        <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"LF6\"></mat-slide-toggle></mat-grid-tile>\n      \n        <mat-grid-tile *ngIf=\"LF6\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n        <mat-grid-tile *ngIf=\"LF6\">\n              <mat-select placeholder=\"Specify Type\">\n                  <mat-option *ngFor=\"let lf of LftFrntDT6\" [value]=\"lf.value\">\n                    {{ lf.viewValue }}\n                  </mat-option>\n                </mat-select>\n              </mat-grid-tile>\n      \n          <mat-grid-tile *ngIf=\"LF6\"><div class=\"grid_element\" style=\"color:red;\"> Specify Severity Type  </div></mat-grid-tile>        \n          <mat-grid-tile *ngIf=\"LF6\">\n                  <mat-select placeholder=\"Specify Type\">\n                      <mat-option *ngFor=\"let lf of LftFrntDS6\" [value]=\"lf.value\">\n                    {{ lf.viewValue }}\n                      </mat-option>\n              </mat-select>\n          </mat-grid-tile>                        \n\n\n      <mat-grid-tile><div class=\"grid_element\" >Wheel / Cover / Nuts / Caps</div></mat-grid-tile>\n      <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"LF7\"></mat-slide-toggle></mat-grid-tile>\n        \n      <mat-grid-tile *ngIf=\"LF7\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n      <mat-grid-tile *ngIf=\"LF7\">\n                <mat-select placeholder=\"Specify Type\">\n                    <mat-option *ngFor=\"let lf of LftFrntDT7\" [value]=\"lf.value\">\n                      {{ lf.viewValue }}\n                    </mat-option>\n                  </mat-select>\n                </mat-grid-tile>\n        \n      <mat-grid-tile *ngIf=\"LF7\"><div class=\"grid_element\" style=\"color:red;\"> Specify Severity Type  </div></mat-grid-tile>        \n      <mat-grid-tile *ngIf=\"LF7\">\n              <mat-select placeholder=\"Specify Type\">\n                    <mat-option *ngFor=\"let lf of LftFrntDS7\" [value]=\"lf.value\">\n                      {{ lf.viewValue }}\n              </mat-option>\n          </mat-select>\n      </mat-grid-tile> \n      \n      <mat-grid-tile><div class=\"grid_element\" >Windshield (LF Side)</div></mat-grid-tile>\n      <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"LF8\"></mat-slide-toggle></mat-grid-tile>\n        \n      <mat-grid-tile *ngIf=\"LF8\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n      <mat-grid-tile *ngIf=\"LF8\">\n            <mat-select placeholder=\"Specify Type\">\n                    <mat-option *ngFor=\"let lf of LftFrntDT8\" [value]=\"lf.value\">\n                      {{ lf.viewValue }}\n                   </mat-option>\n            </mat-select>\n      </mat-grid-tile>\n\n      <mat-grid-tile><div class=\"grid_element\" >Keys (TB = 2 sets)</div></mat-grid-tile>\n      <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"LF9\"></mat-slide-toggle></mat-grid-tile>\n        \n      <mat-grid-tile *ngIf=\"LF9\"><div class=\"grid_element\" >Second key requested</div></mat-grid-tile>\n      <mat-grid-tile *ngIf=\"LF9\"><mat-slide-toggle [(ngModel)]=\"LF10\"></mat-slide-toggle></mat-grid-tile>\n       \n      <mat-grid-tile colspan=\"2\" rowspan=\"2\" *ngIf=\"LF10\">\n      <mat-form-field><input type=\"date\" matInput placeholder=\"Date\" ></mat-form-field>\n      </mat-grid-tile>\n\n    <mat-grid-tile><div class=\"grid_element\" >Remotes (TB, Retail = 2 sets)</div></mat-grid-tile>\n    <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n    <mat-grid-tile colspan=\"2\" rowspan=\"2\"> <mat-form-field>  \n        <input type=\"text\" matInput placeholder=\"Left Front Tire Make Model\">\n      </mat-form-field></mat-grid-tile>\n\n    <mat-grid-tile><div class=\"grid_element\" >Left Front Tire damage</div></mat-grid-tile>\n    <mat-grid-tile><mat-slide-toggle [(ngModel)]=\"LF11\"></mat-slide-toggle></mat-grid-tile>\n    \n    <mat-grid-tile *ngIf=\"LF11\"><div class=\"grid_element\" style=\"color:red;\"> Specify Damage Type  </div></mat-grid-tile>        \n    <mat-grid-tile *ngIf=\"LF11\">\n          <mat-select placeholder=\"Specify Type\">\n                  <mat-option *ngFor=\"let lf of LftFrntDT11\" [value]=\"lf.value\">\n                    {{ lf.viewValue }}\n                 </mat-option>\n          </mat-select>\n    </mat-grid-tile>\n\n    <mat-grid-tile colspan=\"2\" rowspan=\"2\"> <mat-form-field>  \n        <input type=\"text\" matInput placeholder=\" Left Front Tire Thread\">\n      </mat-form-field></mat-grid-tile>\n \n    </mat-grid-list>\n  </mat-expansion-panel>    \n  <br>\n\n\n<!--          Expansion 10      -->\n<mat-expansion-panel>\n    <mat-expansion-panel-header style=\"background: red;\">\n      <mat-panel-title>\n        <b>Chargable Damage</b>\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <br>\n    <div class=\"grid_element\" style=\"padding-left:38px;\"><b>Ford</b> has turnback allowances upto <b>$500</b> deductible<span style=\"margin-left:4px;\"></span><i class=\"fa fa-info\"> </i> </div>\n    <br><br><hr><br>\n      <div style=\"text-align: center;\"><b>Panel/Issues</b></div>\n      \n    <mat-grid-list cols=\"4\" rowHeight=\"5:6\">\n        <mat-grid-tile><div class=\"grid_element\">ABG Ramp Amt $$</div></mat-grid-tile>\n        <mat-grid-tile><div class=\"grid_element\">Repair No or Yes</div></mat-grid-tile>\n        <mat-grid-tile><div class=\"grid_element\">ABG <br>Cost of Repair $$</div></mat-grid-tile>\n        <mat-grid-tile><div class=\"grid_element\">Remaining Damage on MVA $$</div></mat-grid-tile>\n    </mat-grid-list>\n<hr>\n    <mat-grid-list cols=\"4\" rowHeight=\"5:3\">\n    <!--    <mat-grid-tile colspan=\"2\"><div class=\"grid_element\">Drivers Seat/Cockpit</div></mat-grid-tile>\n        <mat-grid-tile colspan=\"2\"><div class=\"grid_element\"><i class=\"fa fa-bullseye\"> </i> Turn Signals</div></mat-grid-tile>\n    -->\n    <div style=\"text-align: center;\"><b>Drivers Seat/Cockpit - Turn Signals</b></div>\n\n        <mat-grid-tile><mat-form-field>  \n            <input matInput placeholder=\"0\" style=\"width:80%;\">\n          </mat-form-field></mat-grid-tile>\n\n        <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n\n        <mat-grid-tile><mat-form-field>  \n            <input matInput placeholder=\"0\" style=\"width:50%;\">\n          </mat-form-field></mat-grid-tile>\n\n        <mat-grid-tile><mat-form-field>  \n            <input matInput placeholder=\"0\">\n          </mat-form-field></mat-grid-tile>\n<!--                                      -->    \n  <mat-grid-tile colspan=\"4\"><div style=\"text-align: center;\"><b>Left Rear Tire Damage - Puncture</b></div></mat-grid-tile>\n       \n          <mat-grid-tile><mat-form-field>  \n              <input matInput placeholder=\"0\">\n            </mat-form-field></mat-grid-tile>\n  \n          <mat-grid-tile><mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n  \n          <mat-grid-tile><mat-form-field>  \n              <input matInput placeholder=\"0\">\n            </mat-form-field></mat-grid-tile>\n  \n          <mat-grid-tile><mat-form-field>  \n              <input matInput placeholder=\"0\">\n            </mat-form-field></mat-grid-tile>\n    \n    </mat-grid-list>\n\n\n    <br>\n      <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Total Existing Condition/Ramp Amount\" style=\"font-size:25px;\" disabled [(ngModel)]=\"valuexyz\">\n      </mat-form-field>\n\n      <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Prepped Condition\" style=\"font-size:25px;\" disabled [(ngModel)]=\"valueabc\">\n      </mat-form-field>\n\n    </mat-expansion-panel>\n  <br>\n\n  </mat-accordion>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/vehicle-prep/vehicle-prep.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiclePrepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehiclePrepComponent = /** @class */ (function () {
    function VehiclePrepComponent(loc, snackBar) {
        this.loc = loc;
        this.snackBar = snackBar;
        this.panelOpenState = false;
        this.toggle = false;
        this.MvaNumber = '44762894';
        this.valuexyz = "$600";
        this.valueabc = "$300";
        this.Itype = [
            { value: 'TB', viewValue: 'Turnback' },
            { value: 'WS', viewValue: 'Wholesale' },
            { value: 'UTD', viewValue: 'Ultimate Test Drive' }
        ];
        this.Wheels = [
            { value: 'ALY', viewValue: 'Alloy' },
            { value: 'STL', viewValue: 'Steel' },
        ];
        this.Interior = [
            { value: 'CLT', viewValue: 'Cloth' },
            { value: 'VIN', viewValue: 'Vinyl' },
            { value: 'LTH', viewValue: 'Leather' }
        ];
        this.PCity = [
            { value: 'MCO', viewValue: 'MCO' },
            { value: 'EWR', viewValue: 'EWR' }
        ];
        // Door seat Cockpit 
        this.DType = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chip', viewValue: 'Chip' },
        ];
        this.SType = [
            { value: '<1', viewValue: '<1' },
            { value: '1-4', viewValue: '1-4' },
            { value: '4-8', viewValue: '4-8' },
            { value: '>8', viewValue: '>8' }
        ];
        this.D2Type = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inoperative', viewValue: 'Inoperative' }
        ];
        this.D3Type = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.D4Type = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inoperative', viewValue: 'Inoperative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.D5Type = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inoperative', viewValue: 'Inoperative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.D6Type = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inoperative', viewValue: 'Inoperative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.D7Type = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inoperative', viewValue: 'Inoperative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.D8Type = [
            { value: 'Loose', viewValue: 'loose' },
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.D9Type = [
            { value: 'Loose', viewValue: 'loose' },
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.D10Type = [
            { value: 'E', viewValue: 'E' },
            { value: '1/8', viewValue: '1/8' },
            { value: '1/4', viewValue: '1/4' },
            { value: '3/8', viewValue: '3/8' },
            { value: '1/2', viewValue: '1/2' },
            { value: '5/8', viewValue: '5/8' },
            { value: '3/4', viewValue: '3/4' },
            { value: '7/8', viewValue: '7/8' },
            { value: 'F', viewValue: 'F' },
        ];
        this.DT12Type = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inoperative', viewValue: 'Inoperative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        // Left Rear 
        this.lftRearDT1 = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'chip', viewValue: 'chip' }
        ];
        this.lftRearDS1 = [
            { value: '< 1"', viewValue: '< 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: ' >8"' }
        ];
        this.lftRearDT3 = [
            { value: 'Scratch"', viewValue: 'Scratch' },
            { value: 'Crack', viewValue: 'Crack' },
            { value: 'Aftermarket', viewValue: 'Aftermarket' },
            { value: 'Molding damage', viewValue: 'Molding damage' }
        ];
        this.lftRearDT4 = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.lftRearDT5 = [
            { value: 'Loose', viewValue: 'Loose' },
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.lftRearDT6 = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inoperative', viewValue: 'Inoperative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.lftRearDT7 = [
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Bent', viewValue: 'Bent' }
        ];
        this.lftRearDS2 = [
            { value: '< 2"', viewValue: ' < 2"' },
            { value: '2-4"', viewValue: '2-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.lftRearDT8 = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'chip', viewValue: 'chip' }
        ];
        this.lftRearDS3 = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.lftRearDT9 = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Puncture', viewValue: 'Puncture' },
            { value: 'Buldge', viewValue: 'Buldge' },
            { value: 'Wear Pattern', viewValue: 'Wear Pattern' }
        ];
        this.X1Type = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chip', viewValue: 'Chip' }
        ];
        this.X2Type = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.X3Type = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chip', viewValue: 'Chip' }
        ];
        this.X4Type = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.X5Type = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chip', viewValue: 'Chip' }
        ];
        this.X6Type = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.X7Type = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chip', viewValue: 'Chip' }
        ];
        this.X8Type = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.X9Type = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chip', viewValue: 'Chip' }
        ];
        this.X10Type = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.X11Type = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Inoperative', viewValue: 'Inoperative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.X12Type = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chip', viewValue: 'Chip' }
        ];
        this.X13Type = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inoperative', viewValue: 'Inoperative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.X14Type = [
            { value: 'Scratch"', viewValue: 'Scratch' },
            { value: 'Crack', viewValue: 'Crack' },
            { value: 'Aftermarket', viewValue: 'Aftermarket' },
            { value: 'Chip', viewValue: 'Chip' }
        ];
        this.X15Type = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.Y1Type = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chip', viewValue: 'Chip' }
        ];
        this.Y2Type = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.Y3Type = [
            { value: 'Bent', viewValue: 'Bent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' }
        ];
        this.Y4Type = [
            { value: '< 2"', viewValue: ' < 2"' },
            { value: '2-4"', viewValue: '2-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.Y5Type = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chip', viewValue: 'Chip' }
        ];
        this.Y6Type = [
            { value: 'Scratch"', viewValue: 'Scratch' },
            { value: 'Crack', viewValue: 'Crack' },
            { value: 'Chip', viewValue: 'Chip' },
            { value: 'Aftermarket', viewValue: 'Aftermarket' },
            { value: 'Molding damage', viewValue: 'Molding damage' }
        ];
        this.Y7Type = [
            { value: 'Loose', viewValue: 'Loose' },
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.Y8Type = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Inoperative', viewValue: 'Inoperative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.Y9Type = [
            { value: 'Loose', viewValue: 'Loose' },
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.Y10Type = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Puncture', viewValue: 'Puncture' },
            { value: 'Buldge', viewValue: 'Buldge' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Wear Pattern', viewValue: 'Wear Pattern' }
        ];
        this.Y11Type = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.FrntEndDT1 = [
            { value: 'Moisture inside', viewValue: 'Moisture inside' },
            { value: 'Crack', viewValue: 'Crack' },
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inoperative', viewValue: 'Inoperative' },
        ];
        this.FrntEndDT2 = [
            { value: 'Moisture inside', viewValue: 'Moisture inside' },
            { value: 'Crack', viewValue: 'Crack' },
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Inoperative', viewValue: 'Inoperative' },
        ];
        this.FrntEndDT3 = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'chips', viewValue: 'chips' },
        ];
        this.FrntEndDS1 = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.FrntEndDT4 = [
            { value: 'Cracked', viewValue: 'Cracked' },
            { value: 'Loose', viewValue: 'Loose' }
        ];
        this.FrntEndDT5 = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chips', viewValue: 'Chips' }
        ];
        this.FrntEndDS2 = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.EngCmpt1 = [
            { value: 'CLE', viewValue: 'CLE' },
            { value: 'BRO', viewValue: 'BRO' },
            { value: 'BLA', viewValue: 'BLA' }
        ];
        this.LftFrntDT1 = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chips', viewValue: 'Chips' }
        ];
        this.LftFrntDS1 = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.LftFrntDT2 = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chips', viewValue: 'Chips' }
        ];
        this.LftFrntDS2 = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.LftFrntDT3 = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chips', viewValue: 'Chips' }
        ];
        this.LftFrntDS3 = [
            { value: '< 1"', viewValue: ' < 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.LftFrntDT4 = [
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crack', viewValue: 'Crack' },
            { value: 'Chip', viewValue: 'Chip' },
            { value: 'Aftermarket', viewValue: 'Aftermarket' },
            { value: 'Molding damage', viewValue: 'Molding damage' },
        ];
        this.LftFrntDT5 = [
            { value: 'Bent', viewValue: 'Bent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Color mismatch', viewValue: 'Color mismatch' },
            { value: 'Chip', viewValue: 'Chip' }
        ];
        this.LftFrntDT6 = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chips', viewValue: 'Chips' }
        ];
        this.LftFrntDS6 = [
            { value: '< 1"', viewValue: '< 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.LftFrntDT7 = [
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Bent', viewValue: 'Bent' },
        ];
        this.LftFrntDS7 = [
            { value: '< 2"', viewValue: '< 2"' },
            { value: '2-4"', viewValue: '2-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.LftFrntDT8 = [
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crack', viewValue: 'Crack' },
            { value: 'Chip', viewValue: 'Chip' },
            { value: 'Aftermarket', viewValue: 'Aftermarket' }
        ];
        this.LftFrntDT11 = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Puncture', viewValue: 'Puncture' },
            { value: 'Buldge', viewValue: 'Buldge' },
            { value: 'Wear Pattern', viewValue: 'Wear Pattern' },
        ];
        this.RgtSdeDT1 = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chips', viewValue: 'Chips' }
        ];
        this.RgtSdeDS1 = [
            { value: '< 1"', viewValue: '< 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.RgtSdeDT2 = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chips', viewValue: 'Chips' }
        ];
        this.RgtSdeDS2 = [
            { value: '< 1"', viewValue: '< 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.RgtSdeDT3 = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chips', viewValue: 'Chips' }
        ];
        this.RgtSdeDS3 = [
            { value: '< 1"', viewValue: '< 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.RgtSdeDT4 = [
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crack', viewValue: 'Crack' },
            { value: 'Chip', viewValue: 'Chip' },
            { value: 'Aftermarket', viewValue: 'Aftermarket' },
            { value: 'Molding damage', viewValue: 'Molding damage' },
        ];
        this.RgtSdeDT5 = [
            { value: 'Bent', viewValue: 'Bent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Color mismatch', viewValue: 'Color mismatch' },
            { value: 'Chip', viewValue: 'Chip' }
        ];
        this.RgtSdeDT6 = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.RgtSdeDT7 = [
            { value: 'Loose', viewValue: 'Loose' },
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Torn', viewValue: 'Torn' },
            { value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"' },
            { value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"' }
        ];
        this.RgtSdeDT8 = [
            { value: 'Broken', viewValue: 'Broken' },
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Inoperative', viewValue: 'Inoperative' },
            { value: 'Missing', viewValue: 'Missing' }
        ];
        this.RgtSdeDT9 = [
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crack', viewValue: 'Crack' },
            { value: 'Chip', viewValue: 'Chip' },
            { value: 'Aftermarket', viewValue: 'Aftermarket' }
        ];
        this.RgtSdeDT10 = [
            { value: 'Dent', viewValue: 'Dent' },
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Crease', viewValue: 'Crease' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Tear', viewValue: 'Tear' },
            { value: 'Chips', viewValue: 'Chips' }
        ];
        this.RgtSdeDS10 = [
            { value: '< 1"', viewValue: '< 1"' },
            { value: '1-4"', viewValue: '1-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.RgtSdeDT11 = [
            { value: 'Scratch', viewValue: 'Scratch' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Bent', viewValue: 'Bent' },
        ];
        this.RgtSdeDS11 = [
            { value: '< 2"', viewValue: '< 2"' },
            { value: '2-4"', viewValue: '2-4"' },
            { value: '4-8"', viewValue: '4-8"' },
            { value: '>8"', viewValue: '>8"' }
        ];
        this.RgtSdeDT12 = [
            { value: 'Cut', viewValue: 'Cut' },
            { value: 'Puncture', viewValue: 'Puncture' },
            { value: 'Buldge', viewValue: 'Buldge' },
            { value: 'Gouge', viewValue: 'Gouge' },
            { value: 'Wear Pattern', viewValue: 'Wear Pattern' }
        ];
    }
    VehiclePrepComponent.prototype.ngOnInit = function () {
    };
    VehiclePrepComponent.prototype.backClicked = function () {
        this.loc.back();
    };
    VehiclePrepComponent.prototype.logout = function () {
        this.openSnackBar("Session Over", "Logged Out");
    };
    VehiclePrepComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    VehiclePrepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vehicle-prep',
            template: __webpack_require__("../../../../../src/app/vehicle-prep/vehicle-prep.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vehicle-prep/vehicle-prep.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatSnackBar */]])
    ], VehiclePrepComponent);
    return VehiclePrepComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map