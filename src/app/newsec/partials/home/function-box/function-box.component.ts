import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-function-box',
  templateUrl: './function-box.component.html',
  styleUrls: ['./function-box.component.css']
})
export class FunctionBoxComponent implements OnInit {

  @Input() title: string
  @Input() icon: string
  @Input() description: string

  constructor() { }

  ngOnInit() {
  }

}
