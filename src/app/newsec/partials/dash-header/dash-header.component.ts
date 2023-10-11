import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../../store/index'
import { NgRedux } from '@angular-redux/store'

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css']
})
export class DashHeaderComponent implements OnInit {

  user; subscription

  constructor(private ngRedux: NgRedux<IAppState>) { 
    this.subscription = ngRedux.select('auth').subscribe(item => this.user = item)
  }

  ngOnInit() {
  }

  
}
