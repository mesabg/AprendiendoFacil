import { Directive, ElementRef } from '@angular/core';

//-- Using JQuery
declare var $:any;

//-- Using ZoomJS
declare var zoom:any;

@Directive({
	selector: '[zoom]',
	host:{
		'(click)': 'onClickCallback()',
		'(mouseover)': 'onMouseOverCallback()'
	}
})
export class ZoomDirective {
	constructor(private element:ElementRef) { }
	onClickCallback(){ zoom.to({element: this.element.nativeElement}); }
	onMouseOverCallback(){ $(this.element.nativeElement).css('cursor', 'crosshair'); }
}
