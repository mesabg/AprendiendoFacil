import { Directive, OnInit, ElementRef } from '@angular/core';

//-- Using JQuery
declare var $:any;

@Directive({
	selector: '[pageOverhead]'
})
export class PageOverheadDirective implements OnInit {
	constructor(private element:ElementRef) { 

	}

	ngOnInit(){
		var headerHeight = $($('header')[0]).height();
		var footerHeight = $($('footer')[0]).height();
		var element = $(this.element.nativeElement);
		var elementHeight = element.height();
		var windowHeight = $(window).height();
		var phase = windowHeight - (headerHeight + footerHeight);
		if ( elementHeight < phase ) element.css('height', phase.toString() + 'px');
	}
}
