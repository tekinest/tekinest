import { Component, OnInit, } from '@angular/core';
import { IAppState } from '../../../../store/index'
import { HttpClient } from '@angular/common/http'
import { NotifierService } from 'angular-notifier'
import { NgRedux } from '@angular-redux/store'
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import { AuthActions } from '../../../store/auth/actions'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})


export class MembersComponent implements OnInit {

  private readonly notifier: NotifierService;
  user; subscription; action
  fileToUpload: File = null;
  status: string = ''
  errorMessage = 'Some first names or surnnames are empty, Please make sure everything is filled in correctly'

  constructor(notifierService: NotifierService, 
    private ngRedux: NgRedux<IAppState>, 
    private http: HttpClient, 
    private db: AngularFireDatabase,
    private authentication: AngularFireAuth) {
    this.notifier = notifierService;
    this.subscription = ngRedux.select('auth').subscribe(item => this.user = item)
    this.action = new AuthActions(ngRedux, http, db, authentication)
  }

  ngOnInit() {}

  handleFile = async (files: FileList) => {
    this.status = 'UPLOADING FILE'
    this.fileToUpload = files.item(0);
    const reader = new FileReader();
    reader.readAsText(this.fileToUpload);
    reader.onload = async () => {
      const text = reader.result;
      const members = csvJSON(text);
      this.validateMembers(members)
    };
  }

  validateMembers = members => {
    this.status = 'VALIDATING DATA'
    let invalidName = false, invalidEmail = '', invalidSurname = false, errorText = ''
    members.map(member => {
      if (!member.firstName || member.firstName == '') invalidName = true
      if (!member.surname || member.surname == '') invalidSurname = true
      if (!validateEmail(member.email)) invalidEmail = invalidEmail + `${member.email} `
    })
    if (invalidEmail != '') errorText = `This emails are invalid (${invalidEmail}).`
    if (invalidName || invalidSurname) errorText = errorText + ` ${this.errorMessage}`
    if (errorText != '') {
      this.status = ''
      this.notifier.notify('error', errorText);
    } else this.addMembers(members)
  }

  addMembers = members => {
    this.status = 'ADDING MEMBERS'
    if (this.user.user) {
      this.action.addMembers(this.user.user.name, this.user.user.companyId, members, res => {
        this.status = 'SUCCESSFUL'
        this.action.getMembers(this.user.user.companyId)
      })
    }
  }

  resetStatus = () => {
    this.status = '';
  }
}




const csvJSON = csv => {
  let lines = csv.split("\n");
  let result = [];
  let headers = lines[0].split(",");

  for(var i = 1; i < lines.length; i++) {
    let obj = {};
    let currentline = lines[i].split(",");
      for(var j = 0; j < headers.length; j++) {
        obj[headers[j].trim()] = currentline[j].trim();
      }
    result.push(obj);
  } 
  return result; //JavaScript object
  // return JSON.stringify(result); //JSON
}

const validateEmail = mail => {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {return true}
 else {return false}
}

