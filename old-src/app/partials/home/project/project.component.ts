import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() name: string
  @Input() link: string
  @Input() description: string
  @Input() image: string
  @Input() color: string  
  @Input() border: string
  @Input() url: string

  hover: boolean = false

  constructor() { }

  ngOnInit() {
  }

}
