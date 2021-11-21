(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["templates-forms-forms-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/templates/forms/create/create.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templates/forms/create/create.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<p style=\"font-size: 2rem; font-weight: bold\">create works!</p>\r\n\r\n<form [formGroup]=\"createForm\" (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\r\n  <input\r\n    type=\"text\"\r\n    autocomplete=\"off\"\r\n    maxlength=\"100\"\r\n    value=\"\"\r\n    formControlName=\"name\"\r\n    placeholder=\"Enter Name\"\r\n    required\r\n  />\r\n  <input\r\n    type=\"email\"\r\n    [email]=\"true\"\r\n    maxlength=\"100\"\r\n    value=\"\"\r\n    placeholder=\"Email\"\r\n    formControlName=\"email\"\r\n    autocomplete=\"off\"\r\n    required\r\n  />\r\n  <input\r\n    type=\"text\"\r\n    maxlength=\"100\"\r\n    autocomplete=\"off\"\r\n    value=\"\"\r\n    formControlName=\"address\"\r\n    placeholder=\"Enter address \"\r\n    required\r\n  />\r\n  <input\r\n    type=\"text\"\r\n    autocomplete=\"off\"\r\n    value=\"\"\r\n    maxlength=\"11\"\r\n    formControlName=\"mobile\"\r\n    placeholder=\"Email Mobile\"\r\n    (keypress)=\"numberCheckValidation($event)\"\r\n    required\r\n  />\r\n  <button>\r\n    <!-- create -->\r\n\r\n    {{ submitButtonTittle }}\r\n  </button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/templates/forms/create/create.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/templates/forms/create/create.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  padding: 0rem 0rem 0rem 9rem;\n}\nform input {\n  padding: 15px 10px 10px 15px;\n  width: 20%;\n  display: list-item;\n  margin-bottom: 2rem;\n  border: 1px solid #939393dd;\n  border-radius: 5px;\n}\nform .submitButtonEnabled {\n  margin-left: 18.5%;\n  padding: 1rem;\n  background: #008cba;\n  border: none;\n  border-radius: 0.4rem;\n  font-size: 1.6rem;\n  color: #fff;\n}\nform .submitButtonDisabled {\n  background: #b8b7b7dd;\n  margin-left: 18.5%;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.4rem;\n  font-size: 1.6rem;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2Zvcm1zL2NyZWF0ZS9FOlxcbmctYXJhYlxcQW5ndWxhci1Qcm9qZWN0LWxpdmUtU2Vzc2lvbnMtL3NyY1xcYXBwXFx0ZW1wbGF0ZXNcXGZvcm1zXFxjcmVhdGVcXGNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGVtcGxhdGVzL2Zvcm1zL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQ0NGO0FEQUU7RUFDRSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGVzL2Zvcm1zL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBwYWRkaW5nOiAwcmVtIDByZW0gMHJlbSA5cmVtO1xyXG4gIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweCAxMHB4IDE1cHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5MzkzOTNkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLnN1Ym1pdEJ1dHRvbkVuYWJsZWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4LjUlO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDhjYmE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuc3VibWl0QnV0dG9uRGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogI2I4YjdiN2RkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4LjUlO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcbiIsImZvcm0ge1xuICBwYWRkaW5nOiAwcmVtIDByZW0gMHJlbSA5cmVtO1xufVxuZm9ybSBpbnB1dCB7XG4gIHBhZGRpbmc6IDE1cHggMTBweCAxMHB4IDE1cHg7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkzOTM5M2RkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5mb3JtIC5zdWJtaXRCdXR0b25FbmFibGVkIHtcbiAgbWFyZ2luLWxlZnQ6IDE4LjUlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjMDA4Y2JhO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9ybSAuc3VibWl0QnV0dG9uRGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjYjhiN2I3ZGQ7XG4gIG1hcmdpbi1sZWZ0OiAxOC41JTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/templates/forms/create/create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/templates/forms/create/create.component.ts ***!
  \************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CreateComponent = class CreateComponent {
    constructor(activatedRout) {
        this.activatedRout = activatedRout;
        // NOTE Array
        this.editUserDataArray = [
            {
                id: 1,
                name: 'user 1',
                email: 'user1@MediaList.coml',
                address: 'address 1',
                mobile: '01234567801'
            },
            {
                id: 2,
                name: 'user 2',
                email: 'user2@MediaList.coml',
                address: 'address 2',
                mobile: '01234567802'
            },
            {
                id: 3,
                name: 'user 3',
                email: 'user3@MediaList.coml',
                address: 'address 3',
                mobile: '01234567803'
            },
            {
                id: 4,
                name: 'user 4',
                email: 'user4@MediaList.coml',
                address: 'address 4',
                mobile: '01234567804'
            },
            {
                id: 5,
                name: 'user 5',
                email: 'user5@MediaList.coml',
                address: 'address 5',
                mobile: '01234567805'
            }
        ];
        this.updateMode = false;
        // NOTE  Forms
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.submitButtonTittle = 'Create';
    }
    ngOnInit() {
        this.checkQueryParams();
        this.checkHiddenId();
    }
    // NOTE  number Validation fun
    numberCheckValidation(e) {
        if ((48 <= e.keyCode && e.keyCode <= 57) || e.keyCode === 46) {
        }
        else {
            return false;
        }
    }
    checkHiddenId() {
        if (history.state.id) {
            this.updateMode = history.state.updateMode;
            this.userId = history.state.id;
            this.submitButtonTittle = 'Edit';
            this.displayUserData();
        }
    }
    checkQueryParams() {
        this.activatedRout.queryParams.subscribe(queryParams => {
            if (queryParams.updateMode) {
                this.updateMode = queryParams.updateMode;
                this.userId = +queryParams.id;
                this.submitButtonTittle = 'Edit';
                this.displayUserData();
            }
        });
    }
    displayUserData() {
        if (this.updateMode) {
            for (const user of this.editUserDataArray) {
                if (user.id === this.userId) {
                    this.userIndex = this.editUserDataArray.indexOf(user);
                }
            }
            this.createForm.patchValue({
                name: this.editUserDataArray[this.userIndex].name,
                email: this.editUserDataArray[this.userIndex].email,
                address: this.editUserDataArray[this.userIndex].address,
                mobile: this.editUserDataArray[this.userIndex].mobile
            });
        }
    }
    // *********************
    onSubmit() {
        console.log('onSubmit >> ', this.createForm.value);
    }
    ViewChildFun(data) {
        console.log("data in child is >>> ", data);
    }
};
CreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: __webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/index.js!./src/app/templates/forms/create/create.component.html"),
        styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/templates/forms/create/create.component.scss")]
    })
], CreateComponent);



/***/ }),

/***/ "./src/app/templates/forms/forms-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/templates/forms/forms-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/templates/forms/create/create.component.ts");





const routes = [{ path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"] }];
let FormsRoutingModule = class FormsRoutingModule {
};
FormsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], FormsRoutingModule);



/***/ }),

/***/ "./src/app/templates/forms/forms.module.ts":
/*!*************************************************!*\
  !*** ./src/app/templates/forms/forms.module.ts ***!
  \*************************************************/
/*! exports provided: FormsComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponentModule", function() { return FormsComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create/create.component */ "./src/app/templates/forms/create/create.component.ts");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/templates/forms/forms-routing.module.ts");
/* harmony import */ var src_app_sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let FormsComponentModule = class FormsComponentModule {
};
FormsComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_4__["FormsRoutingModule"], src_app_sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
    })
], FormsComponentModule);



/***/ })

}]);
//# sourceMappingURL=templates-forms-forms-module-es2015.js.map