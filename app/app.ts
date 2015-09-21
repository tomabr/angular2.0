import {Component, View, NgFor, NgIf, bootstrap} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control} from 'angular2/angular2';


//Custom Validator
function telValidator(control) {
  if (!control.value.match(/^[0-9]+$/)) {
    return { invalideTelephone: true };
  }
};



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
  formButton:boolean;
  countryGroup: Array<string>;
  constructor(fb: FormBuilder) {
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
  changeState(value) {
       this.formButton = value;
  }
	onSubmit() {
		  alert('tak');
	}
}
bootstrap(AppComponent);