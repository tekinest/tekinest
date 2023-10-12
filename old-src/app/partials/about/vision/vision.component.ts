import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent implements OnInit {

  @Input() title: string
  @Input() description: string

  constructor() { }

  ngOnInit() {
  }

}
