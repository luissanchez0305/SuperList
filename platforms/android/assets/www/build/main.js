webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ForgotPage = (function () {
    function ForgotPage(navCtrl, authService, helper, formBuilder, storage) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.forgot = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    ForgotPage.prototype.openLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ForgotPage.prototype.openRegister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    ForgotPage.prototype.attemptUserForgot = function () {
        /*    var data = { type : 'cred', e : this.loginData.email, p : this.loginData.password };
            this.authService.postData(data,'/controllers/user.php').then((result) => {
            this.responseData = result;
            console.log(this.responseData);
            if (this.responseData.status == "ok") {
                //loginObjects();
                //localStorage.set('loginData', JSON.stringify(this.responseData));
                this.helper.gapAlert('Usuario logueado', 'Login successful');
                this.storage.set('userEmail', this.responseData.loggedUserEmail);
                this.storage.set('UserLoggedIn', 'true');
                this.navCtrl.setRoot(HomePage);
            } else {
                this.helper.gapAlert("Username or password not valid", "Login Unsuccessful");
            }
          }, (err) => {
            // Error log
            this.helper.gapAlert('Error en logueao', err);
          });*/
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/forgot/forgot.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Recuperar mi contraseña</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div ng-show="true">\n\n        <div class="list card cardprogram">\n            <form [formGroup]="forgot" (ngSubmit)="attemptUserForgot()">\n            <div class="item item-body">\n                <label class="lorems lorems-content">\n                   Por favor introduce el email de tu cuenta\n                </label>\n                <br/>\n                <br/>\n                <ion-item>\n                    <ion-input type="text" placeholder="Email" autocapitalize="none"></ion-input>\n                </ion-item>\n                <br>\n                <input type="submit" class="button button-calm" value="Enviar" [disabled]="!forgot.valid"/>\n                <br>\n                <br>\n                <div ion-button (click)="openRegister()">\n                    REGISTRARSE\n                </div>\n                <div ion-button (click)="openLogin()">\n                    LOGIN\n                </div>\n\n            </div>\n            </form>\n        </div>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/forgot/forgot.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RegisterPage = (function () {
    function RegisterPage(navCtrl, authService, helper, formBuilder, storage) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.register = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')])],
            name: [''],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])]
        });
    }
    RegisterPage.prototype.openLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.openForgot = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__forgot_forgot__["a" /* ForgotPage */]);
    };
    RegisterPage.prototype.attemptUserRegister = function () {
        var _this = this;
        var data = { type: 'manage', n: this.register.value.name, e: this.register.value.email, p: this.register.value.pwdd };
        this.authService.postData(data, '/controllers/user.php').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.status == "ok") {
                //loginObjects();
                //this.storage.set('loginData', JSON.stringify(this.responseData));
                _this.helper.gapAlert('Usuario logueado', 'Login successful');
                _this.storage.set('userEmail', _this.responseData.loggedUserEmail);
                _this.storage.set('UserLoggedIn', 'true');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                _this.helper.gapAlert("Username or password not valid", "Login Unsuccessful");
            }
        }, function (err) {
            // Error log
            _this.helper.gapAlert('Error en logueao', err);
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Registrarse</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div ng-show="true">\n\n        <div class="list card cardprogram">\n            <form [formGroup]="register" (ngSubmit)="attemptUserRegister()">\n            <div class="item item-body">\n                <label class="lorems lorems-content">\n                   Por favor llene sus datos en el siguiente formulario\n                </label>\n                <br/>\n                <br/>\n                <ion-item>\n                    <ion-input type="text" placeholder="Email*" autocapitalize="none" formControlName="email"></ion-input>\n                </ion-item>\n                <br/>\n                <ion-item>\n                    <ion-input type="text" placeholder="Nombre" formControlName="name"></ion-input>\n                </ion-item>\n                <br>  \n                <ion-item>\n                    <ion-input type="password" placeholder="Contraseña*" formControlName="pwd"></ion-input>\n                </ion-item>\n                <br>\n                <input type="submit" class="button button-calm" value="REGISTRAR" [disabled]="!register.valid"/>\n                <br>\n                <br>\n                <div ion-button (click)="openLogin()">\n                    LOGIN\n                </div>\n                <div ion-button (click)="openForgot()">\n                    RECUPERAR MI CONTRASEÑA\n                </div>\n\n            </div>\n            </form>\n        </div>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forgot_forgot__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_helper__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_forgot_forgot__["a" /* ForgotPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_forgot_forgot__["a" /* ForgotPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__providers_helper__["a" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__["a" /* Dialogs */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, helper, storage, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.helper = helper;
        this.storage = storage;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.events.subscribe('loginEvent', function () {
            _this.helper.loginState = _this.loginState = true;
        });
        this.loginState = this.helper.loginState;
        // used for an example of ngFor and navigation
        this.pagesLogin = [
            { title: 'Registro/Login', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */], method: '' },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], method: '' },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */], method: '' }
        ];
        // used for an example of ngFor and navigation
        this.pagesLogout = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], method: '' },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */], method: '' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */], method: 'logout' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.logout = function () {
        this.storage.set('userEmail', '');
        this.storage.set('UserLoggedIn', 'false');
        this.helper.loginState = this.loginState = false;
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.method.length > 0) {
            switch (page.method) {
                case 'logout':
                    this.logout();
                    break;
            }
        }
        else
            this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/ubuntu/workspace/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list *ngIf="loginState != true">\n      <button menuClose ion-item *ngFor="let p of pagesLogin" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list *ngIf="loginState == true">\n      <button menuClose ion-item *ngFor="let p of pagesLogout" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/ubuntu/workspace/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* HelperService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = { API_ENDPOINT: 'http://www.esferasoluciones.com/api/superlist/' };
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_dialogs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelperService = (function () {
    function HelperService(storage, dialogs) {
        var _this = this;
        this.storage = storage;
        this.dialogs = dialogs;
        this.storage.get('userEmail').then(function (user) {
            if (user) {
                _this.loginState = true;
            }
            else {
                _this.loginState = false;
            }
        });
    }
    HelperService.prototype.gapAlert = function (message, title) {
        this.dialogs.alert(message, // message
        title, // title
        "Ok" // buttonName
        );
    };
    HelperService.prototype.gapConfirmAlert = function (message, title, yesButtonLabel, noButtonLabel, onConfirm) {
        this.dialogs.confirm(message, // message
        title, // title
        [yesButtonLabel, noButtonLabel] // buttonLabels
        ).then(onConfirm);
    };
    return HelperService;
}());
HelperService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_dialogs__["a" /* Dialogs */]])
], HelperService);

//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_forgot__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginPage = (function () {
    function LoginPage(navCtrl, authService, helper, formBuilder, storage, events) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.events = events;
        this.login = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    LoginPage.prototype.openRegister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.openForgot = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__forgot_forgot__["a" /* ForgotPage */]);
    };
    LoginPage.prototype.attemptUserLogin = function () {
        var _this = this;
        var data = { type: 'cred', e: this.login.value.email, p: this.login.value.pwd };
        this.authService.postData(data, '/controllers/user.php').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.status == "ok") {
                //loginObjects();
                //this.storage.set('loginData', JSON.stringify(this.responseData));
                _this.helper.gapAlert('Usuario logueado', 'Login successful');
                _this.storage.set('userEmail', _this.responseData.loggedUserEmail);
                _this.storage.set('UserLoggedIn', 'true');
                _this.events.publish("loginEvent");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                _this.helper.gapAlert("Username or password not valid", "Login Unsuccessful");
                _this.helper.loginState = false;
            }
        }, function (err) {
            // Error log
            _this.helper.gapAlert('Error en logueao', err);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div ng-show="true">\n\n        <div class="list card cardprogram">\n            <form [formGroup]="login" (ngSubmit)="attemptUserLogin()">\n            <div class="item item-body">\n                <label class="lorems lorems-content">\n                   Por favor introduce la información de tu cuenta\n                </label>\n                <br/>\n                <br/>\n                <ion-item>\n                    <ion-input type="text" placeholder="Email" autocapitalize="none" formControlName="email"></ion-input>\n                </ion-item>\n                <br>\n                <ion-item>\n                    <ion-input type="password" placeholder="Contraseña" formControlName="pwd"></ion-input>\n                </ion-item>\n                <br>\n                <input type="submit" class="button button-calm" value="INGRESAR" [disabled]="!login.valid"/>\n                <br>\n                <br>\n                <div ion-button (click)="openRegister()">\n                    REGISTRARSE\n                </div>\n                <div ion-button (click)="openForgot()">\n                    RECUPERAR MI CONTRASEÑA\n                </div>\n\n            </div>\n            </form>\n        </div>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].API_ENDPOINT + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map