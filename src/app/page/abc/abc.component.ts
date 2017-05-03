import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AbcComponent implements OnInit {

  constructor(private translateService:TranslateService) { }

  ngOnInit() {
  }

}
