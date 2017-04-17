import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
