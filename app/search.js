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
var AppComponent = (function () {
    function AppComponent(fb) {
        this.search = fb.group({
            input: ['', angular2_2.Validators.required],
        });
    }
    AppComponent.prototype.onSubmit = function () {
        alert('tak');
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'search',
            viewBindings: [angular2_2.FormBuilder]
        }),
        angular2_1.View({
            templateUrl: 'search.html',
            directives: [angular2_2.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
angular2_1.bootstrap(AppComponent);

//# sourceMappingURL=search.js.map