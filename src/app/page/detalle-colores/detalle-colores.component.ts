import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'app-detalle-colores',
  templateUrl: './detalle-colores.component.html',
  styleUrls: ['./detalle-colores.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class DetalleColoresComponent implements OnInit {

  constructor(private translateService:TranslateService) { }

  ngOnInit() {
  }

}
