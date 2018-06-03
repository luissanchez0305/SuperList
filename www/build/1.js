webpackJsonp([1],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalManageListPageModule", function() { return ModalManageListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_manage_list__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalManageListPageModule = (function () {
    function ModalManageListPageModule() {
    }
    return ModalManageListPageModule;
}());
ModalManageListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_manage_list__["a" /* ModalManageListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_manage_list__["a" /* ModalManageListPage */]),
        ],
    })
], ModalManageListPageModule);

//# sourceMappingURL=modal-manage-list.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalManageListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
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
 * Generated class for the ModalManageListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalManageListPage = (function () {
    function ModalManageListPage(navCtrl, formBuilder, navParams, viewCtrl, events) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.new_list = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        var new_text = 'Ingresar';
        this.button_text = new_text.toUpperCase();
        this.title = new_text;
    }
    ModalManageListPage.prototype.ionViewDidLoad = function () {
    };
    ModalManageListPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalManageListPage.prototype.manageList = function () {
        this.events.publish('addNewList', this.new_list.value.name);
        this.viewCtrl.dismiss();
    };
    return ModalManageListPage;
}());
ModalManageListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-manage-list',template:/*ion-inline-start:"c:\Users\lsanc\projects\SuperList\src\pages\modal-manage-list\modal-manage-list.html"*/'<!--\n  Generated template for the ModalManageListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-navbar>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons end>\n    <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="new_list" (ngSubmit)="manageList()">\n    <div class="item item-body">\n        <ion-item>\n            <ion-input type="text" placeholder="Nombre de la lista" autocapitalize="none" formControlName="name" [(ngModel)]="name"></ion-input>\n        </ion-item>\n        <br>\n        <input type="submit" class="button button-calm" value="{{ button_text }}" [disabled]="!new_list.valid"/>\n\n    </div>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\SuperList\src\pages\modal-manage-list\modal-manage-list.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _e || Object])
], ModalManageListPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=modal-manage-list.js.map

/***/ })

});
//# sourceMappingURL=1.js.map