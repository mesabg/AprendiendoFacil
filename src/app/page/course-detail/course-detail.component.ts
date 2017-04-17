import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CourseDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
