import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  toProjects = (target: HTMLElement) => {
    // target.scrollIntoView({behavior: "smooth"})
  }

  ngOnInit() {
    const element = document.getElementById('upp');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

}
