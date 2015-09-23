var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.images = [
            { src: 'http://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg', alt: '', class: 'active' },
            { src: 'http://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg', alt: '', class: '' },
            { src: 'http://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg', alt: '', class: '' }];
    }
    CarouselComponent = __decorate([
        angular2_1.Component({
            selector: '.carousel',
            viewBindings: [angular2_2.FormBuilder]
        }),
        angular2_1.View({
            templateUrl: 'templates/carousel.html',
            directives: [angular2_2.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
})();
exports.CarouselComponent = CarouselComponent;
angular2_1.bootstrap(CarouselComponent);

//# sourceMappingURL=carousel.js.map