"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_1 = require("../service/service");
var MyData = (function () {
    function MyData() {
    }
    return MyData;
}());
exports.MyData = MyData;
var CoreComponent = (function () {
    function CoreComponent(productService) {
        this.productService = productService;
        this.counter = 0;
        this.product = [];
    }
    CoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProduct()
            .subscribe(function (resData) { return _this.products = resData; });
    };
    CoreComponent.prototype.incCounter = function () {
        this.counter++;
    };
    CoreComponent.prototype.getProduct = function (pro) {
        this.product.push(pro);
        console.log(pro);
    };
    return CoreComponent;
}());
CoreComponent = __decorate([
    core_1.Component({
        selector: 'comp-corebody',
        templateUrl: './corebody.html',
        styleUrls: ['./corebody.css'],
        providers: [service_1.myService]
    }),
    __metadata("design:paramtypes", [service_1.myService])
], CoreComponent);
exports.CoreComponent = CoreComponent;
//# sourceMappingURL=corebody.js.map