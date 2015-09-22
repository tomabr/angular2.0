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
var NavigationComponent = (function () {
    function NavigationComponent() {
        this.menu = [
            { name: 'Dashboard', elem: [] },
            { name: 'Rankings', elem: [] },
            { name: 'Analytics', elem: [] },
            { name: 'Apps', elem: [] },
            { name: 'Guides', elem: [] },
            { name: 'Training', elem: [] },
        ];
        this.accounts = [
            { name: 'Support', elem: [] },
            { name: 'Messages', elem: [], badge: 4 },
            { name: 'Settings', elem: [{ name: 'Personal Information' }, { name: 'Password' }, { name: 'Contact' }] },
            { name: 'Logout', elem: [] }
        ];
    }
    NavigationComponent.prototype.onSubmit = function () {
        alert('tak');
    };
    NavigationComponent = __decorate([
        angular2_1.Component({
            selector: 'navigation',
            viewBindings: [angular2_2.FormBuilder]
        }),
        angular2_1.View({
            templateUrl: 'navigation.html',
            directives: [angular2_2.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
})();
exports.NavigationComponent = NavigationComponent;
angular2_1.bootstrap(NavigationComponent);

//# sourceMappingURL=navigation.js.map