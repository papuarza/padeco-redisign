import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('menuAnimation', [
      state('show', style({ opacity: 1, transform: "translateX(0)", zIndex:6})),
      state('hide', style({ opacity: 0, transform: "translateX(5%)", zIndex:4})),
      transition('show => hide', animate('400ms ease-in')),
      transition('hide => show', animate('400ms ease-out')),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  optionsHover: Boolean = false;
  showMobile: String = 'hide';
  innerWidth = 0;
  constructor() {
 
   }
  ngOnInit() {
    
  }
  showOptions() {
    this.optionsHover = true;
  }
  hideOptions() {
    this.optionsHover = false;
  }
  showMenuMobile() {
    this.showMobile = 'show';
  }
  hideMenuMobile() {
    this.showMobile = 'hide';
  }
  

}
