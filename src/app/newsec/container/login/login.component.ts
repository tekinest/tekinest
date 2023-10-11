import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store'
import { AuthActions } from '../../store/auth/actions'
import { IAppState } from '../../../store/index'
import { HttpClient } from '@angular/common/http'
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import { NotifierService } from 'angular-notifier'
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  private readonly notifier: NotifierService;

  @select() auth
  email: string
  password: string
  form: FormGroup
  loading: boolean = false
  user; action; subscription

  constructor(private ngRedux: NgRedux<IAppState>, 
    private http: HttpClient, 
    private db: AngularFireDatabase, private authentication: AngularFireAuth, 
    notifierService: NotifierService, private route: Router) {
    this.notifier = notifierService;
    this.form = new FormGroup({ 
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.min(6),
      ]),
    })
    this.subscription = ngRedux.select('auth').subscribe(item => this.user = item)
    this.action = new AuthActions(ngRedux, http, db, authentication)
  }

  ngOnInit() {
  }

  get formEmail() { return this.form.get('email'); }

  get formPassword() { return this.form.get('password'); }

  submit = () => {
    if (!this.formEmail.errors && !this.formPassword.errors && !this.loading) {
      this.loading = true
      this.action.login(this.form.value, res => {
        this.loading = false
        if (res !== 'done') this.notifier.notify('error', res);
        else this.route.navigate(['newsec/dashboard'])
      }) 
    } else console.log(this.form.value)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
