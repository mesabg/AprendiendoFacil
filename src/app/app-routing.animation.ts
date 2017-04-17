import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
  return trigger('routerTransition', [
    state('void', style({ position: 'relative' }) ),
    state('*', style({ position: 'relative' }) ),
    transition(':enter', [
      style({left: '100%'}),
      animate('0.5s ease-in-out', style({left: '0'}))
    ]),
    transition(':leave', [ 
      style({left: '0', display: 'none'})
    ])
  ]);
}