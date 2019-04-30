import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('menuAnimation', [
      state('show', style({ opacity: 1, transform: "translateX(0)", zIndex:6})),
      state('hide', style({ opacity: 0, transform: "translateX(100%)", zIndex:4})),
      transition('show => hide', animate('200ms ease-in')),
      transition('hide => show', animate('400ms ease-out')),
      state('showOptions', style({ opacity: 1, transform: "translateY(0)", zIndex:6})),
      state('hideOptions', style({ opacity: 0, transform: "translateY(-5%)", zIndex:4})),
      transition('showOptions => hideOptions', animate('400ms ease-in')),
      transition('hideOptions => showOptions', animate('400ms ease-out')),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  showMobile: String = 'hide';
  innerWidth = 0;
  optionsHover = 'hideOptions';
  constructor() {
 
   }
  ngOnInit() {
    
  }
  showOptions() {
    this.optionsHover = 'showOptions';
  }
  hideOptions() {
    this.optionsHover = 'hideOptions'
  }
  showMenuMobile() {
    this.showMobile = 'show';
  }
  hideMenuMobile() {
    this.showMobile = 'hide';
  }
  

}
