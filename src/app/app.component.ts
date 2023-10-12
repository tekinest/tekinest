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
  



  constructor(public appService: AppService, public route: Router) {

  }
  

  toggleView = () => {
    this.appService.toggleMenu()
  }

 

}
