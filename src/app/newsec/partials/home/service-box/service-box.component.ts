import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css']
})
export class ServiceBoxComponent implements OnInit {

  @Input() icon: string
  @Input() title: string
  @Input() description: string

  constructor() { }

  ngOnInit() {
  }

}
