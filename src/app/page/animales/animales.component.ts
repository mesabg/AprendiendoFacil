import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AnimalesComponent implements OnInit {

  constructor(private translateService:TranslateService) { }

  ngOnInit() {
  }

}
