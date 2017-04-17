import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
