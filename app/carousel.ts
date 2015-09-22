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


export class CarouselComponent {
  images: Array<Object>;
  constructor( ) {
    this.images = [
    {src : 'http://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg', alt: '', class: 'active'}, 
    {src : 'http://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg', alt: '', class: ''},
    {src : 'http://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg', alt: '', class: ''}];
  }
}
bootstrap(CarouselComponent);