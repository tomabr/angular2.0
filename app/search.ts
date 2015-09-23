import {Component, View, NgFor, NgIf, bootstrap} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control} from 'angular2/angular2';

@Component({
  selector: 'search',
  viewBindings: [FormBuilder]
})
@View({
  templateUrl: 'templates/search.html',
  directives: [FORM_DIRECTIVES, NgFor, NgIf]
})
export class SearchComponent {
  search: ControlGroup;

  constructor(fb: FormBuilder) {
    this.search = fb.group({
      input: ['', Validators.required]
    });
  }
  onSubmit() {
    ;
  }
}
bootstrap(SearchComponent);