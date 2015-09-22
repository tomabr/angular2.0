import {Component, View, NgFor, NgIf, bootstrap} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control} from 'angular2/angular2';



@Component({
  selector: 'navigation',
  viewBindings: [FormBuilder]
})
@View({
  templateUrl: 'navigation.html',
  directives: [FORM_DIRECTIVES, NgFor, NgIf]
})


export class NavigationComponent {
  menu: Array<Object>;
  support: Array<Object>;
  constructor( ) {
    this.menu = [
    {name : 'Dashboard', elem: []},
    {name : 'Rankings', elem: []},
    {name : 'Analytics', elem: []},
    {name : 'Apps', elem: []},
    {name : 'Guides', elem: []},
    {name : 'Training', elem: []},
    ];

    this.accounts = [
    {name : 'Support', elem: []},
    {name : 'Messages', elem: [], badge: 4},
    {name : 'Settings', elem: [{name: 'Personal Information'},{name: 'Password'},{name:'Contact'}]},
    {name : 'Logout', elem: []}
    ];
  }
  onSubmit() {
		  alert('tak');
  }
}
bootstrap(NavigationComponent);