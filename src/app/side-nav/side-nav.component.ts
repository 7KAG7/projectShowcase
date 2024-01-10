import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  animations: [
    trigger('shrinkSideNav', [
      state('default', style({
        width: '250px', // Set your default width
      })),
      state('shrunk', style({
        width: '80px', // Set your shrunk width
      })),
      transition('default <=> shrunk', animate('300ms ease-in-out'))
    ]),
  ],
})
export class SideNavComponent implements OnInit {
  isShrunk = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleShrunk() {
    this.isShrunk = !this.isShrunk;
  }
}
