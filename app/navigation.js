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
        this.slide = true;
        this.menu = [
            { name: 'Dashboard', elem: [], sprite: 'sprite-dashboard' },
            { name: 'Rankings', elem: [], sprite: 'sprite-rankings' },
            { name: 'Analytics', elem: [], sprite: 'sprite-analitycs' },
            { name: 'Apps', elem: [], sprite: 'sprite-apps' },
            { name: 'Guides', elem: [], sprite: 'sprite-guides' },
            { name: 'Training', elem: [], sprite: 'sprite-training' },
        ];
        this.accounts = [
            { name: 'Support', elem: [], sprite: 'sprite-support', state: 0 },
            { name: 'Messages', elem: [], badge: 4, sprite: 'sprite-messages', state: 0 },
            { name: 'Settings', sprite: 'sprite-settings', state: 0, elem: [{ name: 'Personal Information' }, { name: 'Password' }, { name: 'Contact' }] },
            { name: 'Logout', elem: [], state: 0, sprite: 'sprite-logout' }
        ];
    }
    NavigationComponent.prototype.toogleItems = function (el) {
        el.state = !el.state;
    };
    NavigationComponent.prototype.active = function (el) {
        return (!!el) ? '_active' : null;
    };
    NavigationComponent.prototype.tiggerPanel = function (el) {
        return (!!el) ? 'navigation _show' : 'navigation _hide';
    };
    NavigationComponent.prototype.showPanel = function (el) {
        this.slide = true;
    };
    NavigationComponent.prototype.hidePanel = function (el) {
        this.slide = false;
    };
    NavigationComponent = __decorate([
        angular2_1.Component({
            selector: 'navigation',
            viewBindings: [angular2_2.FormBuilder]
        }),
        angular2_1.View({
            templateUrl: 'templates/navigation.html',
            directives: [angular2_2.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
})();
exports.NavigationComponent = NavigationComponent;
angular2_1.bootstrap(NavigationComponent);

//# sourceMappingURL=navigation.js.map