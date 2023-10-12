import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { rootReducer, IAppState } from './store/index'



// Views
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './container/home/home.component';

import { AppService } from "./services/app.service";



// @NgModule({
//   declarations: [
//     AppComponent,
    

//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
