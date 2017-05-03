import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

declare var CryptoJS:any;

@Injectable()
export class AuthService {
	userData: EventEmitter<any> = new EventEmitter<any>();
	isLoggedIn: boolean = true;
	redirectUrl: string = '';

	constructor(private http:Http, private router:Router) {}

	login(userCredentials:any):boolean{
		console.log("Login in Service Activated...");
		sessionStorage.setItem("auth_key", 'sliruvhasirngaowrgasrgñskg)/&%wef');
		this.userData.emit(userCredentials);
		return this.isLoggedIn = true;
	}

	logout():void{
		this.isLoggedIn = false;
		this.userData.emit('Sign In');
	}

	isLogged():boolean{
		return sessionStorage.auth_key != undefined;
	}

	redirect():void{
		if (this.redirectUrl != '') this.router.navigate(['/inicio']);
		else this.router.navigate([this.redirectUrl]);
	}
}
