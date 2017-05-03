import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { TranslateService } from '../../translate/translate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class RegisterComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

}
