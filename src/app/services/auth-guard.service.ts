import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return this.checkLogin(state.url);
	}

	checkLogin(url: string): boolean {
		if (this.authService.isLogged()) return true; 

		this.authService.redirectUrl = url;

		this.router.navigate(['/iniciar-sesion']);
		return false;
	}
}
