import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
  
@Injectable()
export class UserDataService {
	public name:string;
	public lastName:string;
	public username:string;
	public email:string;
	public tlfn:string;
	public language:string;
	public password:string;

	constructor(private authService:AuthService) { 
		if (this.authService.isLoggedIn){
			this.name = "Moisés";
			this.lastName = "Berenguer";
			this.email = "moises.berenguer@gmail.com";
			this.tlfn = "(+58)4164063859";
			this.language = "es";
			this.username = "moises.berenguer";
			this.password = "123456789";
		}
	}

	getUserData():any{
		if (!this.authService.isLogged()) return undefined;
		return {
			name: this.name,
			lastName: this.lastName,
			email: this.email,
			tlfn: this.tlfn,
			language: this.language,
			username: this.username,
			password: this.password
		};
	}
}
