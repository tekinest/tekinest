import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './container/home/home.component';
import { NewsecRoutingModule } from "./newsec-routing.module";
import { HeaderComponent } from './partials/shared/header/header.component';
import { FunctionBoxComponent } from './partials/home/function-box/function-box.component';
import { ServiceBoxComponent } from './partials/home/service-box/service-box.component';
import { StepBoxComponent } from './partials/home/step-box/step-box.component';
import { ContactComponent } from './container/contact/contact.component';
import { InputComponent } from './partials/contact/input/input.component';
import { LoginComponent } from './container/login/login.component';
import { LoginInputComponent } from './partials/login/input/input.component'
import { environment } from 'src/environments/environment';
import {AngularFireModule} from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { NotifierModule } from 'angular-notifier';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { DashHeaderComponent } from './partials/dash-header/dash-header.component';
import { MembersComponent } from './container/dashboard/members/members.component'



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FunctionBoxComponent,
    ServiceBoxComponent, 
    StepBoxComponent, 
    ContactComponent, 
    InputComponent, 
    LoginComponent, 
    LoginInputComponent, 
    DashboardComponent, 
    DashHeaderComponent, 
    MembersComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.newsec),
    CommonModule,
    CarouselModule,
    NewsecRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NotifierModule,
    HttpClientModule
  ],
})
export class NewsecModule { }
