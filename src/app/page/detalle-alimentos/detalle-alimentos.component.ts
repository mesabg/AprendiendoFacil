import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'app-detalle-alimentos',
  templateUrl: './detalle-alimentos.component.html',
  styleUrls: ['./detalle-alimentos.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class DetalleAlimentosComponent implements OnInit {

  constructor(private translateService:TranslateService) { }

  ngOnInit() {
  }

}
