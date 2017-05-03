import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AlimentosComponent implements OnInit {

  constructor(private translateService:TranslateService) { }

  ngOnInit() {
  }

}
