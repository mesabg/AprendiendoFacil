import { Directive, Renderer, ElementRef } from '@angular/core';
declare var $;

@Directive({
  selector: '[MenuHighlight]',
  host:{
  	'(mouseenter)': 'onMouseEnter()',
  	'(click)': 'onMouseClick()'
  }
})
export class MenuHighlightDirective {
	private mouseEntered:boolean = true;
	constructor(private renderer:Renderer, private element:ElementRef) { }

	onMouseEnter(){
		this.renderer.setElementClass(
			this.element.nativeElement, 
			'mouseenter', 
			true
		);
	}

	onMouseClick(){
		var self = this;
		$.each($(this.element.nativeElement).parent().children(), function(index, dom_element){
			self.renderer.setElementAttribute(
				dom_element, 
				'state', 
				'inactive'
			);
		});
		$.each($($(this.element.nativeElement).parent().siblings()[0]).children(), function(index, dom_element){
			self.renderer.setElementAttribute(
				dom_element, 
				'state', 
				'inactive'
			);
		});
		
		this.renderer.setElementAttribute(
			this.element.nativeElement, 
			'state', 
			'active'
		);
	}
}
