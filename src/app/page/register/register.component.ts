import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
