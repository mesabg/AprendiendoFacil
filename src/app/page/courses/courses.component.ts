import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CoursesComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

}
