import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
