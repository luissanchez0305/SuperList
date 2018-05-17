webpackJsonp([2],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecipePage = (function () {
    function RecipePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(navParams.get('recipe'));
        this.recipe = __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].OFFLINE_RECIPE_DATA;
    }
    RecipePage.prototype.ionViewDidLoad = function () {
    };
    return RecipePage;
}());
RecipePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recipe',template:/*ion-inline-start:"c:\Users\lsanc\projects\SuperList\src\pages\recipe\recipe.html"*/'<!--\n\n  Generated template for the RecipePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ recipe.name }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div>\n\n    Ingredientes\n\n  </div>\n\n  <ion-list>\n\n    <ion-item *ngFor="let ingredient of recipe.ingredients" nav-transition="ios" nav-direction="forward">\n\n        {{ ingredient }}\n\n    </ion-item>\n\n  </ion-list>\n\n  <div>\n\n    Que tengo que hacer?\n\n  </div>\n\n  <ion-list>\n\n    <div>\n\n        Instrucciones\n\n    </div>\n\n    <ion-item *ngFor="let step of recipe.steps" nav-transition="ios" nav-direction="forward">\n\n        {{ step }}\n\n    </ion-item>\n\n  </ion-list>\n\n  <div>\n\n    Otras recetas que me pueden gustar...\n\n  </div>\n\n  <ion-list>\n\n    <ion-item *ngFor="let other of recipe.others" nav-transition="ios" nav-direction="forward">\n\n        {{ other.name }}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\SuperList\src\pages\recipe\recipe.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
], RecipePage);

var _a, _b;
//# sourceMappingURL=recipe.js.map

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
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forgot/forgot.module": [
		281,
		1
	],
	"../pages/recipe/recipe.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        selector: 'page-list',template:/*ion-inline-start:"c:\Users\lsanc\projects\SuperList\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\SuperList\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forgot_forgot__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recipe_recipe__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_helper__ = __webpack_require__(31);
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
            __WEBPACK_IMPORTED_MODULE_10__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_recipe_recipe__["a" /* RecipePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_recipe_recipe__["a" /* RecipePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_16__providers_helper__["a" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__["a" /* Dialogs */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_constants__ = __webpack_require__(41);
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
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */], method: '' },
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
        var view = this.nav.getActive();
        if (view.name == 'RegisterPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_10__services_constants__["a" /* Constants */].USER_EMAIL, '');
        this.storage.set(__WEBPACK_IMPORTED_MODULE_10__services_constants__["a" /* Constants */].USER_LOGGEDIN, 'false');
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"c:\Users\lsanc\projects\SuperList\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list *ngIf="loginState != true">\n\n      <button menuClose ion-item *ngFor="let p of pagesLogin" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n    <ion-list *ngIf="loginState == true">\n\n      <button menuClose ion-item *ngFor="let p of pagesLogout" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"c:\Users\lsanc\projects\SuperList\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* HelperService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_dialogs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(32);
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = {
    API_ENDPOINT: 'https://www.esferasoluciones.com/api/superlist/',
    USER_EMAIL: 'userEmail',
    USER_LOGGEDIN: 'UserLoggedIn',
    OFFLINE_RECIPES_DATA: [
        {
            id: "1",
            name: "Mini Pizzas",
            time: "35",
            favorites: "12",
            pricelevel: "secondary",
            image: "image1.jpg"
        },
        {
            id: "2",
            name: "Arroz Chorrerano",
            time: "75",
            favorites: "5",
            pricelevel: "bright",
            image: "image2.jpg"
        },
        {
            id: "3",
            name: "Hamburguesa Big",
            time: "45",
            favorites: "25",
            pricelevel: "secondary",
            image: "image3.jpg"
        },
        {
            id: "4",
            name: "Arroz con Vegetales",
            time: "60",
            favorites: "10",
            pricelevel: "bright",
            image: "image4.jpg"
        },
        {
            id: "5",
            name: "Pizza",
            time: "50",
            favorites: "24",
            pricelevel: "danger",
            image: "image5.jpg"
        },
    ],
    OFFLINE_RECIPE_DATA: {
        id: "1",
        name: "Mini Pizza",
        ingredients: [
            "Ingredient 1",
            "Ingredient 2",
            "Ingredient 3",
            "Ingredient 4",
            "Ingredient 5"
        ],
        steps: [
            "instruction 1",
            "instruction 2",
            "instruction 3",
            "instruction 4",
            "instruction 5",
            "instruction 6",
            "instruction 7",
            "instruction 8",
            "instruction 9",
        ],
        others: [
            {
                id: "2",
                name: "Arroz Chorrerano"
            },
            {
                id: "3",
                name: "Hamburguesa Big"
            }
        ]
    }
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(259);
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

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_forgot__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_constants__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise__);
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
        this.authService.postData(data, 'controllers/user.php').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.status == "ok") {
                //loginObjects();
                //this.storage.set('loginData', JSON.stringify(this.responseData));
                _this.helper.gapAlert('Usuario logueado', 'Login successful');
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_9__services_constants__["a" /* Constants */].USER_EMAIL, _this.responseData.loggedUserEmail);
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_9__services_constants__["a" /* Constants */].USER_LOGGEDIN, 'true');
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
        selector: 'page-login',template:/*ion-inline-start:"c:\Users\lsanc\projects\SuperList\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div ng-show="true">\n\n\n\n        <div class="list card cardprogram">\n\n            <form [formGroup]="login" (ngSubmit)="attemptUserLogin()">\n\n            <div class="item item-body">\n\n                <label class="lorems lorems-content">\n\n                   Por favor introduce la información de tu cuenta\n\n                </label>\n\n                <br/>\n\n                <br/>\n\n                <ion-item>\n\n                    <ion-input type="text" placeholder="Email" autocapitalize="none" formControlName="email"></ion-input>\n\n                </ion-item>\n\n                <br>\n\n                <ion-item>\n\n                    <ion-input type="password" placeholder="Contraseña" formControlName="pwd"></ion-input>\n\n                </ion-item>\n\n                <br>\n\n                <input type="submit" class="button button-calm" value="INGRESAR" [disabled]="!login.valid"/>\n\n                <br>\n\n                <br>\n\n                <div ion-button (click)="openRegister()">\n\n                    REGISTRARSE\n\n                </div>\n\n                <div ion-button (click)="openForgot()">\n\n                    RECUPERAR MI CONTRASEÑA\n\n                </div>\n\n\n\n            </div>\n\n            </form>\n\n        </div>\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"c:\Users\lsanc\projects\SuperList\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recipe_recipe__ = __webpack_require__(108);
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
    function HomePage(navCtrl, helper, storage, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.helper = helper;
        this.storage = storage;
        this.events = events;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].USER_LOGGEDIN).then(function (value) {
            if (value == 'true') {
                _this.events.publish("loginEvent");
            }
        });
        this.recipes = __WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].OFFLINE_RECIPES_DATA;
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.openRecipe = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__recipe_recipe__["a" /* RecipePage */], { recipe: id });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"c:\Users\lsanc\projects\SuperList\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-input type="text" placeholder="Buscar receta"></ion-input>\n\n  </ion-item>\n\n  \n\n  <ion-list class="recipes">\n\n    <ion-item class="recipe center" *ngFor="let recipe of recipes" nav-transition="ios" nav-direction="forward">\n\n      <div class="top" (click)="openRecipe(recipe.id)">\n\n        <ion-img src="images/{{ recipe.image }}" class="image"></ion-img>\n\n        <label class="title">{{ recipe.name }}</label>\n\n      </div>\n\n      <div class="bottom" (click)="openRecipe(recipe.id)">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-33 class="favorites">\n\n              <ion-icon ios="ios-star" md="md-star"></ion-icon>{{ recipe.favorites }}\n\n            </ion-col>\n\n            <ion-col col-33 class="share">\n\n              <ion-icon ios="ios-share" md="md-share"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-33 class="pricelevel">\n\n              <ion-icon color="{{ recipe.pricelevel }}" ios="logo-usd" md="logo-usd"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-33 class="time">\n\n              <ion-icon ios="ios-timer" md="md-timer"></ion-icon>{{ recipe.time }}mins\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\SuperList\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_constants__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise__);
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
    function RegisterPage(navCtrl, authService, helper, formBuilder, storage, events) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.events = events;
        this.register = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            name: [''],
            last_name: [''],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])]
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        if (this.helper.loginState)
            console.log('register loaded: logged in');
        else
            console.log('regisger loaded: not logged in');
    };
    RegisterPage.prototype.openLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.openForgot = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__forgot_forgot__["a" /* ForgotPage */]);
    };
    RegisterPage.prototype.attemptUserRegister = function () {
        var _this = this;
        var data = { type: 'manage', n: this.register.value.name, a: this.register.value.last_name, e: this.register.value.email, p: this.register.value.pwd };
        this.authService.postData(data, 'controllers/user.php').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.status == "ok") {
                //loginObjects();
                //this.storage.set('loginData', JSON.stringify(this.responseData));
                _this.helper.gapAlert('Usuario logueado', 'Login successful');
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_9__services_constants__["a" /* Constants */].USER_EMAIL, _this.responseData.loggedUserEmail);
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_9__services_constants__["a" /* Constants */].USER_LOGGEDIN, 'true');
                _this.events.publish("loginEvent");
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
        selector: 'page-register',template:/*ion-inline-start:"c:\Users\lsanc\projects\SuperList\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Registrarse</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div ng-show="true">\n\n\n\n        <div class="list card cardprogram">\n\n            <form [formGroup]="register" (ngSubmit)="attemptUserRegister()">\n\n            <div class="item item-body">\n\n                <label class="lorems lorems-content">\n\n                   Por favor llene sus datos en el siguiente formulario\n\n                </label>\n\n                <br/>\n\n                <br/>\n\n                <ion-item>\n\n                    <ion-input type="text" placeholder="Email*" autocapitalize="none" formControlName="email"></ion-input>\n\n                </ion-item>\n\n                <br/>\n\n                <ion-item>\n\n                    <ion-input type="text" placeholder="Nombre" formControlName="name"></ion-input>\n\n                </ion-item>\n\n                <br/> \n\n                <ion-item>\n\n                    <ion-input type="text" placeholder="Apellido" formControlName="last_name"></ion-input>\n\n                </ion-item>\n\n                <br/>  \n\n                <ion-item>\n\n                    <ion-input type="password" placeholder="Contraseña*" formControlName="pwd"></ion-input>\n\n                </ion-item>\n\n                <br>\n\n                <input type="submit" class="button button-calm" value="REGISTRAR" [disabled]="!register.valid"/>\n\n                <br>\n\n                <br>\n\n                <div ion-button (click)="openLogin()">\n\n                    LOGIN\n\n                </div>\n\n                <div ion-button (click)="openForgot()">\n\n                    RECUPERAR MI CONTRASEÑA\n\n                </div>\n\n\n\n            </div>\n\n            </form>\n\n        </div>\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"c:\Users\lsanc\projects\SuperList\src\pages\register\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(navCtrl, authService, helper, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.helper = helper;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.showSent = false;
        this.forgot = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.showSent = false;
    }
    ForgotPage.prototype.openLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    ForgotPage.prototype.openRegister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    ForgotPage.prototype.attemptUserForgot = function () {
        var _this = this;
        var data = { type: 'cred', e: this.forgot.value.email };
        this.authService.postData(data, 'mail.php').then(function (result) {
            _this.showSent = true;
        }, function (err) {
            // Error log
            _this.helper.gapAlert('Error en logueao', err);
        });
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot',template:/*ion-inline-start:"c:\Users\lsanc\projects\SuperList\src\pages\forgot\forgot.html"*/'<!--\n\n  Generated template for the ForgotPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>forgot</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div ng-show="true">\n\n\n\n        <div class="list card cardprogram">\n\n            <form [formGroup]="forgot" (ngSubmit)="attemptUserForgot()">\n\n                <div class="item item-body">\n\n                    <div margin-bottom padding class="card-triky"><label>\n\n                   <ion-icon name="information-circle"></ion-icon> Por favor introduce la información de tu cuenta\n\n                </label>\n\n                    </div>\n\n                    <div margin-bottom padding class="card-triky">\n\n\n\n                        <ion-item *ngIf="!showSent">\n\n                            <ion-input type="email" placeholder="Email" autocapitalize="none" formControlName="email"></ion-input>\n\n                        </ion-item>\n\n\n\n                    </div>\n\n                    <div style="text-align:center">\n\n                        <br *ngIf="!showSent">\n\n                        <button ion-button full type="submit" class="button button-calm" [disabled]="!forgot.valid" *ngIf="!showSent">ENVIAR</button>\n\n                        <!--<br *ngIf="!showSent">-->\n\n                        <!--<br *ngIf="!showSent">-->\n\n                        <label class="lorems lorems-content" *ngIf="showSent">\n\n                   Una nueva contraseña ha sido enviada a la direccion de correo que envio<br>Por favor, le recomendamos que la cambie tan pronto vuelva a entrar\n\n                </label>\n\n                        <br/>\n\n                        <div ion-button clear (click)="openRegister()">\n\n                            Registrarse\n\n                        </div>\n\n                        <br/>\n\n                        <div ion-button clear (click)="openLogin()">\n\n                            Login\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </form>\n\n        </div>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\SuperList\src\pages\forgot\forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map