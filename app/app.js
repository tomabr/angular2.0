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
function telValidator(control) {
    if (!control.value.match(/^[0-9]+$/)) {
        return { invalideTelephone: true };
    }
}
;
var AppComponent = (function () {
    function AppComponent(fb) {
        this.countryGroup = ['Poland', 'USA'];
        this.formButton = false;
        this.form = fb.group({
            fullName: ['', angular2_2.Validators.required],
            telephone: ['', angular2_2.Validators.compose([angular2_2.Validators.required, telValidator])],
            address1: ['', angular2_2.Validators.required],
            address2: ['', angular2_2.Validators.required],
            city: ['', angular2_2.Validators.required],
            state: ['', angular2_2.Validators.required],
            zip: ['', angular2_2.Validators.required],
            country: ['', angular2_2.Validators.required],
            18: [1],
            copy: [0],
            parent: fb.group({
                name: [''],
                email: [''],
                address1: [''],
                address2: [''],
                city: [''],
                state: [''],
                zip: [''],
                country: [''],
                telephone: ['']
            })
        });
    }
    AppComponent.prototype.changeState = function (value) {
        this.formButton = value;
    };
    AppComponent.prototype.onSubmit = function () {
        ;
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewBindings: [angular2_2.FormBuilder]
        }),
        angular2_1.View({
            templateUrl: 'form.html',
            directives: [angular2_2.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
angular2_1.bootstrap(AppComponent);

//# sourceMappingURL=app.js.map