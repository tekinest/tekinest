import { Component, OnInit, Input } from '@angular/core';
import { AppService } from "../../../services/app.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() small: string

  constructor(public appService: AppService, public route: Router) { }

  ngOnInit() { }

  toggleMenu = () => {
    this.appService.toggleMenu()
  }

  toService = () => {
    let obj = document.getElementById('services')
    obj.scrollIntoView()
  }
}
