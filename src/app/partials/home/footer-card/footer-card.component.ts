import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.css']
})
export class FooterCardComponent implements OnInit {

  @Input() url: string
  @Input() link: string
  @Input() color: string
  @Input() title: string

  constructor() { }

  ngOnInit() {
  }

}
