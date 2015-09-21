import {Component, View, NgFor, NgIf, bootstrap} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control} from 'angular2/angular2';



@Component({
  selector: 'carousel',
  viewBindings: [FormBuilder]
})
@View({
  templateUrl: 'carousel.html',
  directives: [FORM_DIRECTIVES, NgFor, NgIf]
})
export class AppComponent {
  form: ControlGroup;

  constructor(fb: FormBuilder) {

    this.carousel = fb.group({
      input: ['', Validators.required],
    });
  }
  onSubmit() {
		  alert('tak');
  }
}
bootstrap(AppComponent);