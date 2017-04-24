import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
declare var CryptoJS:any;


@Injectable()
export class AuthService {
	isLoggedIn: boolean;

	constructor(private http:Http) {}

	login(userCredentials:any){
		console.log("Login in...");

		this.isLoggedIn = false;
		var headers = new Headers();
		var credentials = 'user=' + userCredentials.username + '&pass=' + userCredentials.password;
		var hash =  CryptoJS.SHA1(credentials, 'AprendiendoFacil').toString(CryptoJS.enc.Base64);
		headers.append('Content-Type', 'application/X-www-form=urlencoded');

		return new Promise((resolve) => {
			window.sessionStorage.setItem("auth_key", hash);
			console.log(window.sessionStorage.getItem("auth_key"));
			this.isLoggedIn = true;
			resolve(this.isLoggedIn);
		});

		/*return new Promise((resolve) => {
			this.http.post('http://path', credentials, {headers: headers}).subscribe(
				(data) => {
					if(data.json().success){
						window.localStorage.setItem("auth_key", data.json().token);
						this.isLoggedIn = true;
						resolve(this.isLoggedIn);
					}
				}
			);
		});*/
	}
}
