import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-box',
  templateUrl: './step-box.component.html',
  styleUrls: ['./step-box.component.css']
})
export class StepBoxComponent implements OnInit {

  @Input() index: number
  @Input() title: string
  @Input() description: string

  constructor() { }

  ngOnInit() {
  }

}
