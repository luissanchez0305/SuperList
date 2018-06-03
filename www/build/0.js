webpackJsonp([0],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalManageProductPageModule", function() { return ModalManageProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_manage_product__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalManageProductPageModule = (function () {
    function ModalManageProductPageModule() {
    }
    return ModalManageProductPageModule;
}());
ModalManageProductPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_manage_product__["a" /* ModalManageProductPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_manage_product__["a" /* ModalManageProductPage */]),
        ],
    })
], ModalManageProductPageModule);

//# sourceMappingURL=modal-manage-product.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalManageProductPage; });
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
 * Generated class for the AddProductModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalManageProductPage = (function () {
    function ModalManageProductPage(navCtrl, formBuilder, navParams, viewCtrl, events) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.new_product = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            qty: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        if (this.navParams.get('id')) {
            var save_text = "Editar";
            this.button_text = save_text.toUpperCase();
            this.title = save_text;
            this.id = this.navParams.get('id');
            this.name = this.navParams.get('name');
            this.qty = this.navParams.get('qty');
            this.button_text = 'GUARDAR';
            this.isAdd = false;
        }
        else {
            var new_text = 'Ingresar';
            this.button_text = new_text.toUpperCase();
            this.title = new_text;
            this.isAdd = true;
        }
    }
    ModalManageProductPage.prototype.ionViewDidLoad = function () {
    };
    ModalManageProductPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalManageProductPage.prototype.manageProduct = function () {
        if (this.isAdd) {
            this.events.publish('addNewProduct', this.new_product.value.name, this.new_product.value.qty);
        }
        else {
            this.events.publish('editProduct', this.id, this.new_product.value.name, this.new_product.value.qty);
        }
        this.viewCtrl.dismiss();
    };
    return ModalManageProductPage;
}());
ModalManageProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-manage-product',template:/*ion-inline-start:"c:\Users\lsanc\projects\SuperList\src\pages\modal-manage-product\modal-manage-product.html"*/'<!--\n  Generated template for the AddProductModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-navbar>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons end>\n    <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="new_product" (ngSubmit)="manageProduct()">\n    <div class="item item-body">\n        <ion-item>\n            <ion-input type="text" placeholder="Nombre del producto" autocapitalize="none" formControlName="name" [(ngModel)]="name"></ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n            <ion-input type="number" placeholder="Cantidad" formControlName="qty" [(ngModel)]="qty"></ion-input>\n        </ion-item>\n        <br>\n        <input type="submit" class="button button-calm" value="{{ button_text }}" [disabled]="!new_product.valid"/>\n\n    </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\SuperList\src\pages\modal-manage-product\modal-manage-product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], ModalManageProductPage);

//# sourceMappingURL=modal-manage-product.js.map

/***/ })

});
//# sourceMappingURL=0.js.map