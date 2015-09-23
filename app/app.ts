import {Component, View, NgFor, NgIf, bootstrap} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control} from 'angular2/angular2';


//Custom Validator
function telValidator(control) {
  if (!control.value.match(/^[0-9]+$/)) {
    return { invalideTelephone: true };
  }
};

function emailValidator(control) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!control.value.match(re)) {
      return { invalideEmail: true };
    }
}


@Component({
  selector: 'app',
  viewBindings: [FormBuilder]
})
@View({
  templateUrl: 'form.html',
  directives: [FORM_DIRECTIVES, NgFor, NgIf]
})
export class AppComponent {
  form: ControlGroup;
  parent: ControlGroup;
  formButton:boolean;
  countryGroup: Array<string>;
  constructor(fb: FormBuilder, pb: FormBuilder) {
      this.countryGroup = ['Poland', 'USA'];
      this.formButton = false;
      this.form = fb.group({
      fullName: ['', Validators.required],
      telephone: ['', Validators.compose([ Validators.required, telValidator])],
      address1: ['', Validators.required],
      address2: ['', Validators.required ],
      city: ['', Validators.required],
      state: ['', Validators.required ],
      zip: ['', Validators.required],
      country: ['', Validators.required ],
      18: [true],
      copy: [false]
      });
      this.parent = pb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([ Validators.required, emailValidator])],
            address1: ['', Validators.required],
            address2: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required],
            country: ['', Validators.required],
            telephone: ['', Validators.compose([ Validators.required, telValidator])]
        });
  }
  changeState(value) {
       this.formButton = value;
  }
  checkButton (f, p, a) {
    if ( !!a && !!f ) {
      return false;
    }
    if ( !a && !!f && !!p ) {
      return false;
    }
    return true;
  }
	onSubmit() {
		  ;
	}
}
bootstrap(AppComponent);