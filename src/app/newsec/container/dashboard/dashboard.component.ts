import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../../store/index'
import { HttpClient } from '@angular/common/http'
import { NgRedux } from '@angular-redux/store'
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import { AuthActions } from '../../store/auth/actions'
import { Router } from '@angular/router'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user; subscription; action

  constructor(private ngRedux: NgRedux<IAppState>, 
    private http: HttpClient, 
    private db: AngularFireDatabase,
    private authentication: AngularFireAuth, private route: Router) {
    this.action = new AuthActions(ngRedux, http, db, authentication)
    this.subscription = ngRedux.select('auth').subscribe(item => this.user = item)
  }

  ngOnInit() {
    if (this.user.user) this.action.getMembers(this.user.user.companyId)
    else this.route.navigate(['newsec/login'])
  }

}
