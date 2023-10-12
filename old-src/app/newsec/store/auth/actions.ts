import { Component, OnInit, Injectable } from '@angular/core';
import * as actionTypes from './types'
import { NgRedux } from '@angular-redux/store'
import { IAppState } from '../../../store/index'
import { HttpClient } from '@angular/common/http'
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'


@Injectable()
export class AuthActions {

  defaultPassword = 'P@ssw1rd'

  constructor(private ngRedux: NgRedux<IAppState>, 
    private http: HttpClient, private db: AngularFireDatabase, private auth: AngularFireAuth) {}

  login = (data, callback) => {
    return this.auth.auth.signInWithEmailAndPassword(data.email, data.password).then(res => {
      return this.db.database.ref(`companies/${res.user.uid}/profile`)
      .once('value')
      .then(val => {
        this.ngRedux.dispatch({
          type: actionTypes.STORE_USER,
          payload: val.val()
        }); callback('done')
      }).catch(error => console.log(error))
    }).catch(error => {console.log(error); callback(error.message)})
  }

  getMembers = id => {
    return this.db.database.ref(`companies/${id}/members`).once('value')
    .then(res => {
      let members = []
      res.forEach(item => {members = [...members, item.val()]})
      this.ngRedux.dispatch({
        type: actionTypes.STORE_MEMBERS,
        payload: members
      })
    }).catch(error => console.log(error))
  }

  sendMail = async member => {
    return this.http.post('https://newsecapp.herokuapp.com/send', member).subscribe(res => {})
  }

  addMembers = async (companyName, companyId, members, callback) => {
    for (const member of members) {
      await this.auth.auth.createUserWithEmailAndPassword(member.email, this.defaultPassword).then(async user => {
        await this.auth.auth.currentUser.updateProfile({displayName: companyId}).then(async res => {
          await this.db.database.ref(`companies/${companyId}/members/${user.user.uid}`).set({
            memberId: user.user.uid,
            firstName: member.firstName.trim(),
            surname: member.surname.trim(),
            email: member.email.trim(),
            password: this.defaultPassword,
            companyId: companyId,
            created: new Date().toString(),
            timestamp: + new Date()
          }).then(async res => {
            let newMember = {...member, password: this.defaultPassword, companyName, companyId}
            await this.sendMail(newMember)
          }).catch(error => console.log(error))
        }).catch(error => console.log(error))
      }).catch(error => console.log(error))
    }
    callback('done')
  }
}