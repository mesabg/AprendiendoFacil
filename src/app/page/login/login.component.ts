import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { AuthService } from '../../services/auth.service';
import { TranslateService } from '../../translate/translate.service';
import { UserDataService } from '../../services/user-data.service';

//-- Using JQuery
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
  providers: [AuthService],
  host: {
  	'[@routerTransition]': '',
  	'(input)': 'onInput()'
  }
})
export class LoginComponent implements OnInit {

	public userCredentials = {
		username: '',
		password: ''
	}

	public valid = {
		username: {
			empty: false,
			email: true
		},
		password: {
			empty: false
		}
	}

	private validateEmailRegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	constructor(private authService:AuthService, private translate: TranslateService, private userDataService:UserDataService) {}

	ngOnInit() {
		var language:any = this.userDataService.getUserData();
		if (language == undefined){
			console.log("User is not logged in, using default language...");
			language = "en";
		}else{ language = language.language; }
		console.log(this.userDataService.getUserData());
		this.translate.use(language);
	}

	onInput(){

	}

	login(){
		if ( this.userCredentials.username == '' ){ 
			this.valid.username.empty = true; 
			return; 
		} 
			this.valid.username.empty = false;

		if ( !this.validateEmailRegExp.test(this.userCredentials.username) ) {
			this.valid.username.email = false; 
			return; 
		} 
			this.valid.username.email = true;

		if ( this.userCredentials.password == '' ) {
			this.valid.password.empty = true; 
			return; 
		}
			this.valid.password.empty = false;

		this.authService.login(this.userCredentials);
		this.authService.redirect();
	}
}
