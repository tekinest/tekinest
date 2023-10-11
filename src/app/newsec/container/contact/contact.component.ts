import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgRedux, select } from "@angular-redux/store";
import { ContactActions } from '../../../store/actions'
import { IAppState } from "../../../store/index";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase } from "angularfire2/database";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @select() contact
  subscription;
  userData;
  status = 'Send Message'
  valid = true

  firstname: string
  email: string
  message: string
  form: FormGroup 
  action: ContactActions;

  constructor(private ngRedux: NgRedux<IAppState>, 
    private http: HttpClient, 
    private db: AngularFireDatabase) {
    this.form = new FormGroup({
      firstname: new FormControl(),
      email: new FormControl(),
      message: new FormControl()
    })
    this.subscription = ngRedux.select('contact').subscribe(item => this.userData = item)
    this.action = new ContactActions(ngRedux, http, db)
  }

  ngOnInit() {
    document.getElementById('upp').scrollIntoView({behavior: 'smooth'})
  }

  submit = async () => {
    if (this.validate()) {
      this.valid = true
      if (this.status == 'Send Message') {
        this.status = 'Sending..'
        this.action.newsecHelp(this.form.value, () => {
          this.status = 'Sent'
          setTimeout(() => {
            this.status = 'Send Message'
            this.form.reset()
          }, 2000)
        })
      }
    } else this.valid = false
  }

  validate = () => {
    let {firstname, email, message} = this.form.value
    return firstname && firstname != '' && email && email != '' && message && message != ''
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
