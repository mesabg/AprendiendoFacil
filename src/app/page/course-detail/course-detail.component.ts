import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CourseDetailComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

}
