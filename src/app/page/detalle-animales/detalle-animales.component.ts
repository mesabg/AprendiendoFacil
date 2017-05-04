import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { TranslateService } from '../../translate/translate.service';
import { UserDataService } from '../../services/user-data.service';

//-- Using JQuery
declare var $:any;

@Component({
  selector: 'app-detalle-animales',
  templateUrl: './detalle-animales.component.html',
  styleUrls: ['./detalle-animales.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class DetalleAnimalesComponent implements OnInit {

  constructor(private translateService:TranslateService, private userDataService:UserDataService) { }

	ngOnInit() {
		var language:any = this.userDataService.getUserData();
		if (language == undefined){
			console.log("User is not logged in, using default language...");
			language = "en";
		}else{ language = language.language; }
		console.log(this.userDataService.getUserData());
		this.translateService.use(language);
	}

}
