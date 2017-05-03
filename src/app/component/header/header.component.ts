import { Component, OnInit, OnChanges  } from '@angular/core';
import { AuthService }  from '../../services/auth.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnChanges  {
	public localUserData:any = undefined;

	constructor(private authService:AuthService) {
		this.authService.userData.subscribe((userData:any) => {
			console.log("Triggered in the constructor.");
		});
	}

	ngOnInit():void{
		console.log(this.authService.isLoggedIn);
		this.authService.userData.subscribe((userData:any) => {
			console.log("Triggered OnInit.");
		});
	}

	ngOnChanges(){
		console.log('Some Changes');
		this.authService.userData.subscribe((userData:any) => {
			console.log("Triggered OnChanges.");
		});
	}

	dataUploaded(userData:any):void{
		this.localUserData = userData;
		console.log(userData);
	}
}
