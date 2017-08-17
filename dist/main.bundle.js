webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/File.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
var File = (function () {
    function File(name, content, type) {
        this.ext = "FILE";
        this.favorite = false;
        this.name = name;
        this.content = content;
        this.type = type;
        this.getExt();
    }
    File.prototype.toggleFavorite = function () {
        this.favorite = !this.favorite;
    };
    File.prototype.getExt = function () {
        if (this.name.match(/\.[^.]+$/igm) != null) {
            this.ext = this.name.match(/\.[^.]+$/)[0].substr(1);
        }
    };
    return File;
}());

//# sourceMappingURL=File.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<files-list></files-list>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__createFile_createfile_component__ = __webpack_require__("../../../../../src/app/createFile/createfile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__files_list_fileslist_component__ = __webpack_require__("../../../../../src/app/files-list/fileslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__files_service__ = __webpack_require__("../../../../../src/app/files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__openedFile_openedfile_component__ = __webpack_require__("../../../../../src/app/openedFile/openedfile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__openedImage_openedimage_component__ = __webpack_require__("../../../../../src/app/openedImage/openedimage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__renamedialog_renamedialog_component__ = __webpack_require__("../../../../../src/app/renamedialog/renamedialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_filesaver__ = __webpack_require__("../../../../ngx-filesaver/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__openedHtml_openedhtml_component__ = __webpack_require__("../../../../../src/app/openedHtml/openedhtml.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__createFile_createfile_component__["a" /* CreateFileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__openedFile_openedfile_component__["a" /* OpenedFileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__openedImage_openedimage_component__["a" /* OpenedImageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__renamedialog_renamedialog_component__["a" /* RenameDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_9__files_list_fileslist_component__["a" /* FilesListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__openedHtml_openedhtml_component__["a" /* OpenedHtmlComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_filesaver__["a" /* FileSaverModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_image_upload__["ImageUploadModule"].forRoot()
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__createFile_createfile_component__["a" /* CreateFileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__openedFile_openedfile_component__["a" /* OpenedFileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__openedImage_openedimage_component__["a" /* OpenedImageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__renamedialog_renamedialog_component__["a" /* RenameDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_16__openedHtml_openedhtml_component__["a" /* OpenedHtmlComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__files_service__["a" /* FilesService */], __WEBPACK_IMPORTED_MODULE_17__notification_service__["a" /* NotificationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/createFile/CreateFile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Новый файл</h1>\r\n<md-select placeholder=\"Тип файла\" [(ngModel)]=\"selectedType\">\r\n  <md-option *ngFor=\"let type of types\" [value]=\"type\">\r\n    {{ type }}\r\n  </md-option>\r\n</md-select>\r\n\r\n<md-dialog-content *ngIf=\"selectedType == 'html' || selectedType == 'txt'\">\r\n  <md-input-container>\r\n    <input mdInput placeholder=\"Имя файла\" value=\"\" required [formControl]=\"nameFormControl\" [(ngModel)]=\"fileName\" >\r\n    <md-error *ngIf=\"nameFormControl.hasError('required')\">\r\n      Name is <strong>required</strong>\r\n    </md-error> \r\n  </md-input-container>\r\n\r\n  <textarea rows=\"20\" placeholder=\"Текст\" [(ngModel)]=\"content\"></textarea>\r\n</md-dialog-content>\r\n\r\n<md-dialog-content *ngIf=\"selectedType == 'image'\">\r\n\r\n  <image-upload  [max]=\"1\" (onFileUploadFinish)=\"fileLoad($event)\"></image-upload>\r\n</md-dialog-content>\r\n\r\n<md-dialog-actions align=\"end\" layout=\"row\">\r\n    <button md-dialog-close md-button class=\"btn btn-primary\">Закрыть</button>\r\n    <button md-dialog-close [disabled]=\"nameFormControl.hasError('required') && selectedType != 'image'\" (click)=\"this.addFile()\" md-button class=\"btn btn-default\">Создать</button>\r\n</md-dialog-actions>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/createFile/CreateFile.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n  resize: none;\n  height: 200px;\n  padding: 10px;\n}\nmd-input-container {\n  width: 100%;\n}\nmd-dialog-actions {\n  white-space: nowrap;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/createFile/createfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__files_service__ = __webpack_require__("../../../../../src/app/files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateFileComponent = (function () {
    function CreateFileComponent(filesService, notification) {
        this.filesService = filesService;
        this.notification = notification;
        this.selectedType = 'image';
        this.types = ['html', 'image', 'txt'];
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]);
    }
    CreateFileComponent.prototype.addFile = function () {
        this.filesService.addFile(this.fileName, this.content, this.selectedType);
        this.filesService.saveFiles();
        this.notification.show(this.fileName, 'Создан');
    };
    CreateFileComponent.prototype.fileLoad = function ($event) {
        console.log(this.test);
        $event.file;
        this.content = $event.src;
        this.fileName = $event.file.name;
    };
    return CreateFileComponent;
}());
CreateFileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'create-file',
        template: __webpack_require__("../../../../../src/app/createFile/CreateFile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/createFile/CreateFile.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], CreateFileComponent);

var _a, _b;
//# sourceMappingURL=createfile.component.js.map

/***/ }),

/***/ "../../../../../src/app/files-list/fileslist.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"filesService.files.length == 0\" class=\"text-center label\">Файлов нет</div>\r\n\r\n\r\n<div *ngIf=\"filesService.files.length > 0\" class=\"\">\r\n<md-tab-group>\r\n  <md-tab label=\"Список файлов\">\r\n      <div class=\"wrap\">\r\n        <table mdSort (mdSortChange)=\"sortData($event)\" class=\"table\">\r\n        <tr>\r\n            <th class=\"tdName\" md-sort-header=\"name\">Name</th>\r\n            <th class=\"tdType\" md-sort-header=\"type\">Type</th>\r\n            <th class=\"tdMenu\" >Menu</th>\r\n        </tr>\r\n\r\n        <tr *ngFor=\"let file of sortedData\"  (dblclick)=\"openDialogOpenFile(file)\" class=\"list_item\">\r\n            <td class=\"tdName\">{{file.name}}</td>\r\n            <td class=\"tdType\">{{file.type || file.ext}}</td>\r\n            <td class=\"tdMenu\">\r\n                <md-icon (click)=\"filesService.toggleFavorite(file)\" *ngIf=\"!file.favorite\">bookmark_border</md-icon>\r\n                <md-icon (click)=\"filesService.toggleFavorite(file)\" *ngIf=\"file.favorite\">bookmark</md-icon> \r\n               \r\n                <md-menu #appMenu=\"mdMenu\">\r\n                    <a *ngIf=\"file.type=='image'\" md-menu-item [href]=\"file.content\" [download]='file.name'>Cкачать</a>\r\n                    <button *ngIf=\"file.type!='image'\" md-menu-item (click)=\"downloadFile(file)\"> Cкачать </button>\r\n                    <button md-menu-item (click)=\"openDialogRename(file)\"> Переименовать </button>\r\n                    <button *ngIf=\"file.type=='html'\" md-menu-item (click)=\"openDialogEditFile(file)\"> Редактировать </button>\r\n                    <button md-menu-item (click)=\"filesService.deleteFile(file)\">Удалить</button>\r\n                </md-menu>\r\n\r\n                <md-icon md-icon-button [mdMenuTriggerFor]=\"appMenu\" >more_vert</md-icon>\r\n\r\n            </td>\r\n        </tr>\r\n    </table>\r\n      </div>\r\n\r\n  </md-tab>\r\n  <md-tab label=\"Закладки\">\r\n    <div class=\"wrap\">\r\n        <table mdSort (mdSortChange)=\"sortData($event)\" class=\"table\">\r\n            <tr>\r\n                <th class=\"tdName\" md-sort-header=\"name\">Name</th>\r\n                <th class=\"tdType\" md-sort-header=\"type\">Type</th>\r\n                <th class=\"tdMenu\" >Menu</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let file of sortedData\" (dblclick)=\"openDialogOpenFile(file)\" class=\"list_item\">\r\n\r\n                    <td class=\"tdName\" *ngIf=\"file.favorite\">{{file.name}}</td>\r\n                    <td class=\"tdType\" *ngIf=\"file.favorite\">{{file.ext}}</td>\r\n                    \r\n                    <td class=\"tdMenu\" *ngIf=\"file.favorite\">\r\n                        <md-icon (click)=\"filesService.toggleFavorite(file)\"  *ngIf=\"!file.favorite\">bookmark_border</md-icon>\r\n                        <md-icon (click)=\"filesService.toggleFavorite(file)\"  *ngIf=\"file.favorite\">bookmark</md-icon>\r\n                        \r\n                        <md-menu #appMenu=\"mdMenu\">\r\n                            <a *ngIf=\"file.type=='image'\" md-menu-item [href]=\"file.content\" [download]='file.name'>Cкачать</a>\r\n                            <button *ngIf=\"file.type!='image'\" md-menu-item (click)=\"downloadFile(file)\"> Cкачать </button>\r\n                            <button md-menu-item (click)=\"openDialogRename(file)\"> Переименовать </button>\r\n                            <button *ngIf=\"file.type=='html'\" md-menu-item (click)=\"openDialogEditFile(file)\"> Редактировать </button>\r\n                            <button md-menu-item (click)=\"filesService.deleteFile(file)\">Удалить</button>\r\n                        </md-menu>\r\n\r\n                        <md-icon md-icon-button [mdMenuTriggerFor]=\"appMenu\" >more_vert</md-icon>\r\n                    </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n  </md-tab>\r\n</md-tab-group>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/files-list/fileslist.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".label {\n  font-size: 30px;\n  padding: 60px;\n  color: gray;\n}\n.list_item {\n  transition: all linear .2s;\n}\n.list_item:hover {\n  background: #ededed;\n}\nmd-icon {\n  transition: all linear .2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  color: #939393;\n}\na {\n  font-weight: 400;\n}\nmd-tab {\n  background: red;\n}\n.wrap {\n  padding: 10px;\n}\ntable {\n  width: 100%;\n  background: white;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\ntable .tdName {\n  width: 70%;\n}\ntable .tdType {\n  width: 10%;\n}\ntable .tdMenu {\n  width: 10%;\n  text-align: center;\n}\ntable td {\n  padding: 6px 5px 0px 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/files-list/fileslist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__files_service__ = __webpack_require__("../../../../../src/app/files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__openedFile_openedfile_component__ = __webpack_require__("../../../../../src/app/openedFile/openedfile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__openedImage_openedimage_component__ = __webpack_require__("../../../../../src/app/openedImage/openedimage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__renamedialog_renamedialog_component__ = __webpack_require__("../../../../../src/app/renamedialog/renamedialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__openedHtml_openedhtml_component__ = __webpack_require__("../../../../../src/app/openedHtml/openedhtml.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FilesListComponent = (function () {
    function FilesListComponent(filesService, dialog, notification) {
        this.filesService = filesService;
        this.dialog = dialog;
        this.notification = notification;
        this.sortedData = filesService.files;
    }
    FilesListComponent.prototype.downloadFile = function (file) {
        var blob = new Blob([file.content], { type: "text/plain;charset=utf-8" });
        console.log(file.content);
        __WEBPACK_IMPORTED_MODULE_6_file_saver__["saveAs"](blob, file.name);
        this.notification.show(file.name, 'Скачивается');
    };
    FilesListComponent.prototype.openDialogRename = function (file) {
        this.filesService.openedFile = file;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__renamedialog_renamedialog_component__["a" /* RenameDialogComponent */]);
    };
    FilesListComponent.prototype.openDialogOpenFile = function (file) {
        this.filesService.openedFile = file;
        switch (file.type) {
            case 'image':
                this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__openedImage_openedimage_component__["a" /* OpenedImageComponent */]);
                break;
            case 'html':
                this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__openedHtml_openedhtml_component__["a" /* OpenedHtmlComponent */]);
                break;
            default:
                this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__openedFile_openedfile_component__["a" /* OpenedFileComponent */]);
                break;
        }
    };
    FilesListComponent.prototype.openDialogEditFile = function (file) {
        this.filesService.openedFile = file;
        switch (file.type) {
            case 'html':
                this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__openedFile_openedfile_component__["a" /* OpenedFileComponent */]);
                break;
        }
    };
    FilesListComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    FilesListComponent.prototype.sortData = function (sort) {
        var _this = this;
        var data = this.filesService.files.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'name': return _this.compare(a.name, b.name, isAsc);
                case 'type': return _this.compare(a.ext, b.ext, isAsc);
            }
        });
    };
    return FilesListComponent;
}());
FilesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'files-list',
        template: __webpack_require__("../../../../../src/app/files-list/fileslist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/files-list/fileslist.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], FilesListComponent);

var _a, _b, _c;
//# sourceMappingURL=fileslist.component.js.map

/***/ }),

/***/ "../../../../../src/app/files.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__File__ = __webpack_require__("../../../../../src/app/File.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilesService = (function () {
    function FilesService(notification) {
        this.notification = notification;
        this.files = [];
        this.getFiles();
    }
    FilesService.prototype.addFile = function (name, content, type) {
        this.files.push(new __WEBPACK_IMPORTED_MODULE_1__File__["a" /* File */](name, content, type));
    };
    FilesService.prototype.toggleFavorite = function (file) {
        file.favorite = !file.favorite;
        this.saveFiles();
        this.notification.show(file.name, (!file.favorite) ? 'Удален из закладок' : 'Добавлен в закладки');
    };
    FilesService.prototype.deleteFile = function (file) {
        this.files.splice(this.files.indexOf(file), 1);
        this.saveFiles();
        this.notification.show(file.name, 'Удален');
    };
    FilesService.prototype.getFiles = function () {
        this.files = JSON.parse(localStorage.getItem('files')) || [];
    };
    FilesService.prototype.saveFiles = function () {
        localStorage.setItem('files', JSON.stringify(this.files));
    };
    return FilesService;
}());
FilesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], FilesService);

var _a;
//# sourceMappingURL=files.service.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "    \r\n<nav class=\"navbar navbar-toggleable-md navbar-dark bg-primary\">\r\n        <md-input-container color=\"white\">\r\n          <input mdInput placeholder=\"Search\" value=\"\">\r\n        </md-input-container>\r\n        <button class=\"addBtn\" md-fab (click)=\"openDialog()\"><md-icon>add</md-icon></button>\r\n\r\n</nav>\r\n\r\n            "

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 0;\n}\nmd-input-container {\n  color: white;\n}\n.addBtn {\n  margin-right: 20px;\n  background: #48c4f9;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__files_service__ = __webpack_require__("../../../../../src/app/files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createFile_createfile_component__ = __webpack_require__("../../../../../src/app/createFile/createfile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(filesSerice, dialog) {
        this.filesSerice = filesSerice;
        this.dialog = dialog;
    }
    NavbarComponent.prototype.openDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__createFile_createfile_component__["a" /* CreateFileComponent */]);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService(snackBar) {
        this.snackBar = snackBar;
    }
    NotificationService.prototype.show = function (name, action) {
        this.snackBar.open(name, action, {
            duration: 1500,
        });
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */]) === "function" && _a || Object])
], NotificationService);

var _a;
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/openedFile/openedfile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{filesService.openedFile.name}}</h1>\r\n\r\n<md-dialog-content>\r\n  <md-input-container>\r\n    <input mdInput placeholder=\"Имя файла\" value=\"\" required [formControl]=\"nameFormControl\" [(ngModel)]=\"edit.name\" >\r\n    <md-error *ngIf=\"nameFormControl.hasError('required')\">\r\n      Name is <strong>required</strong>\r\n    </md-error> \r\n  </md-input-container>\r\n\r\n  <textarea rows=\"20\" placeholder=\"Текст\" [(ngModel)]=\"edit.content\"></textarea>\r\n</md-dialog-content>\r\n\r\n\r\n<md-dialog-actions align=\"end\" layout=\"row\">\r\n    <button md-dialog-close md-button class=\"btn btn-primary\">Закрыть</button>\r\n    <button md-dialog-close [disabled]=\"nameFormControl.hasError('required')\" (click)=\"this.editFile()\" md-button class=\"btn btn-default\">Сохранить</button>\r\n</md-dialog-actions>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/openedFile/openedfile.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n  resize: none;\n  height: 200px;\n  padding: 10px;\n}\nmd-input-container {\n  width: 100%;\n}\nmd-dialog-actions {\n  white-space: nowrap;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/openedFile/openedfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__files_service__ = __webpack_require__("../../../../../src/app/files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__File__ = __webpack_require__("../../../../../src/app/File.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenedFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OpenedFileComponent = (function () {
    function OpenedFileComponent(filesService) {
        this.filesService = filesService;
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]);
        this.edit = new __WEBPACK_IMPORTED_MODULE_3__File__["a" /* File */](this.filesService.openedFile.name, this.filesService.openedFile.content, this.filesService.openedFile.type);
    }
    OpenedFileComponent.prototype.editFile = function () {
        this.filesService.files[this.filesService.files.indexOf(this.filesService.openedFile)].name = this.edit.name;
        this.filesService.files[this.filesService.files.indexOf(this.filesService.openedFile)].content = this.edit.content;
        this.filesService.saveFiles();
    };
    return OpenedFileComponent;
}());
OpenedFileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'opened-file',
        template: __webpack_require__("../../../../../src/app/openedFile/openedfile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/openedFile/openedfile.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */]) === "function" && _a || Object])
], OpenedFileComponent);

var _a;
//# sourceMappingURL=openedfile.component.js.map

/***/ }),

/***/ "../../../../../src/app/openedHtml/openedhtml.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{filesService.openedFile.name}}</h1>\r\n\r\n<md-dialog-content>\r\n    <div class=\"wrap\" [innerHTML]='filesService.openedFile.content'></div>\r\n</md-dialog-content>\r\n\r\n\r\n<md-dialog-actions align=\"end\" layout=\"row\">\r\n    <button md-dialog-close md-button class=\"btn btn-primary\">Закрыть</button>\r\n</md-dialog-actions>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/openedHtml/openedhtml.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-dialog-content {\n  width: 80vw;\n  height: 70vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/openedHtml/openedhtml.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__files_service__ = __webpack_require__("../../../../../src/app/files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__File__ = __webpack_require__("../../../../../src/app/File.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenedHtmlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenedHtmlComponent = (function () {
    function OpenedHtmlComponent(filesService) {
        this.filesService = filesService;
        this.edit = new __WEBPACK_IMPORTED_MODULE_2__File__["a" /* File */](this.filesService.openedFile.name, this.filesService.openedFile.content, this.filesService.openedFile.type);
    }
    return OpenedHtmlComponent;
}());
OpenedHtmlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'opened-html',
        template: __webpack_require__("../../../../../src/app/openedHtml/openedhtml.component.html"),
        styles: [__webpack_require__("../../../../../src/app/openedHtml/openedhtml.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */]) === "function" && _a || Object])
], OpenedHtmlComponent);

var _a;
//# sourceMappingURL=openedhtml.component.js.map

/***/ }),

/***/ "../../../../../src/app/openedImage/openedimage.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{filesService.openedFile.name}}</h1>\r\n<md-dialog-content>\r\n    <img  [alt]=\"edit.name\" [src]=\"edit.content\">\r\n</md-dialog-content>\r\n<md-dialog-actions align=\"end\" layout=\"row\">\r\n    <button md-dialog-close md-button class=\"btn btn-primary\">Закрыть</button>\r\n</md-dialog-actions>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/openedImage/openedimage.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  max-height: 60vh;\n  max-width: 70vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/openedImage/openedimage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__files_service__ = __webpack_require__("../../../../../src/app/files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__File__ = __webpack_require__("../../../../../src/app/File.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenedImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenedImageComponent = (function () {
    function OpenedImageComponent(filesService) {
        this.filesService = filesService;
        this.edit = new __WEBPACK_IMPORTED_MODULE_2__File__["a" /* File */](this.filesService.openedFile.name, this.filesService.openedFile.content, this.filesService.openedFile.type);
        this.image = new Image();
    }
    return OpenedImageComponent;
}());
OpenedImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'opened-image',
        template: __webpack_require__("../../../../../src/app/openedImage/openedimage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/openedImage/openedimage.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */]) === "function" && _a || Object])
], OpenedImageComponent);

var _a;
//# sourceMappingURL=openedimage.component.js.map

/***/ }),

/***/ "../../../../../src/app/renamedialog/renamedialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{filesService.openedFile.name}}</h1>\r\n\r\n<md-dialog-content>\r\n  <md-input-container>\r\n    <input mdInput placeholder=\"Имя файла\" value=\"\" required [formControl]=\"nameFormControl\" [(ngModel)]=\"edit.name\" >\r\n    <md-error *ngIf=\"nameFormControl.hasError('required')\">\r\n      Name is <strong>required</strong>\r\n    </md-error> \r\n  </md-input-container>\r\n</md-dialog-content>\r\n\r\n\r\n<md-dialog-actions align=\"end\" layout=\"row\">\r\n    <button md-dialog-close md-button class=\"btn btn-primary\">Закрыть</button>\r\n    <button md-dialog-close [disabled]=\"nameFormControl.hasError('required')\" (click)=\"this.editFile()\" md-button class=\"btn btn-default\">Сохранить</button>\r\n</md-dialog-actions>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/renamedialog/renamedialog.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/renamedialog/renamedialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__files_service__ = __webpack_require__("../../../../../src/app/files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__File__ = __webpack_require__("../../../../../src/app/File.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenameDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RenameDialogComponent = (function () {
    function RenameDialogComponent(filesService, notification) {
        this.filesService = filesService;
        this.notification = notification;
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]);
        this.edit = new __WEBPACK_IMPORTED_MODULE_3__File__["a" /* File */](this.filesService.openedFile.name, this.filesService.openedFile.content, this.filesService.openedFile.type);
        this.image = new Image();
        console.log(this.image.src, this.edit.content);
    }
    RenameDialogComponent.prototype.editFile = function () {
        this.filesService.files[this.filesService.files.indexOf(this.filesService.openedFile)].name = this.edit.name;
        this.filesService.saveFiles();
        this.notification.show(this.edit.name, 'Переименован');
    };
    return RenameDialogComponent;
}());
RenameDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rename-dialog',
        template: __webpack_require__("../../../../../src/app/renamedialog/renamedialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/renamedialog/renamedialog.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__files_service__["a" /* FilesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], RenameDialogComponent);

var _a, _b;
//# sourceMappingURL=renamedialog.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map