import { Component, OnInit, Injectable } from '@angular/core';
import * as actionTypes from './types';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './index';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class ContactActions {

  constructor(private ngRedux: NgRedux<IAppState>, private http: HttpClient, private db: AngularFireDatabase) {}

  postMessage = (data, callback) => {
    this.db.database.ref('help/weandel').push(data).then(async res => {
      await this.ngRedux.dispatch({
        payload: {...data, timestamp: + new Date()},
        type: actionTypes.POST_MESSAGE
      });
      callback();
    }).catch(error => console.log(error));
  }

  newsecHelp = (data, callback) => {
    this.db.database.ref('help/newsec').push(data).then(async res => {
      await this.ngRedux.dispatch({
        payload: {...data, timestamp: + new Date()},
        type: actionTypes.POST_HELP
      });
      callback();
    }).catch(error => console.log(error));
  }
}