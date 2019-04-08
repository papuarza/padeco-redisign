import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  optionsHover: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showOptions() {
    this.optionsHover = true;
  }
  hideOptions() {
    this.optionsHover = false;
  }

}
