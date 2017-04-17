import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
