import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'app-detalle-numeros',
  templateUrl: './detalle-numeros.component.html',
  styleUrls: ['./detalle-numeros.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class DetalleNumerosComponent implements OnInit {

  constructor(private translateService:TranslateService) { }

  ngOnInit() {
  }

}
