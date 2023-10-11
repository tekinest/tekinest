import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from "./services/app.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dev-weandel';
  smallHeader: string = 'large'
  

  @HostListener('scroll', ['$event'])

  scroll = (e) => {
    this.smallHeader = e.srcElement.scrollTop > 100 ? 'small' : 'large'
  }

  constructor(public appService: AppService, public route: Router) {

  }
  

  toggleView = () => {
    this.appService.toggleMenu()
  }

  toServices = (target: HTMLElement) => {
    target.scrollIntoView({behavior: "smooth"})
  }

}
