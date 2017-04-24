import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animation';
import { AuthService } from '../../services/auth.service';

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

	constructor(private authService:AuthService) {}

	ngOnInit() {

	}

	onInput(){

	}

	login(){
		if ( this.userCredentials.username == '' ){ this.valid.username.empty = true; return; }
		if ( !this.validateEmailRegExp.test(this.userCredentials.username) ) { this.valid.username.email = false; return; }
		if ( this.userCredentials.password == '' ) { this.valid.password.empty = true; return; }

		this.valid.username.empty = false;
		this.valid.username.email = true;
		this.valid.password.empty = false;

		this.authService.login(this.userCredentials);
	}
}
