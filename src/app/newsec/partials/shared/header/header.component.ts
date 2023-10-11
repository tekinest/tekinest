import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu = false
  @Input() navColor: String
  @Input() small: string

  constructor(public route: Router) { }

  ngOnInit() {
  }

  toggleMenu = () => {
    this.menu = !this.menu
  }

}
