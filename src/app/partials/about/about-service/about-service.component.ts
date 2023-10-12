import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-service',
  templateUrl: './about-service.component.html',
  styleUrls: ['./about-service.component.css']
})
export class AboutServiceComponent implements OnInit {

  @Input() data: { title: string, detail: [] }

  constructor() { }

  ngOnInit() {  }

}
