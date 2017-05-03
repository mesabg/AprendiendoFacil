import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ColoresComponent implements OnInit {

  constructor(private translateService:TranslateService) { }

  ngOnInit() {
  }

}
