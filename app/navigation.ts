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
    {name : 'Dashboard', elem: [], sprite: 'sprite-dashboard'},
    {name : 'Rankings', elem: [], sprite: 'sprite-rankings'},
    {name : 'Analytics', elem: [], sprite: 'sprite-analitycs'},
    {name : 'Apps', elem: [], sprite: 'sprite-apps'},
    {name : 'Guides', elem: [], sprite: 'sprite-guides'},
    {name : 'Training', elem: [], sprite: 'sprite-training'},
    ];

    this.accounts = [
    {name : 'Support', elem: [], sprite: 'sprite-support', state:0},
    {name : 'Messages', elem: [], badge: 4, sprite: 'sprite-messages', state:0},
    {name : 'Settings', sprite: 'sprite-settings', state:0, elem: [{name: 'Personal Information'},{name: 'Password'},{name:'Contact'}]},
    {name : 'Logout', elem: [], state:0, sprite: 'sprite-logout'}
    ];
  }
  toogleItems(el) {
		  el.state = !el.state;
  }
  active(el){
      if(el==1){
       return '_active';
      }
      else{
       return '';
      }
  }
}
bootstrap(NavigationComponent);