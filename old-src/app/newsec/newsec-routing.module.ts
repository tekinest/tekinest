import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { ContactComponent } from './container/contact/contact.component';
import { LoginComponent } from './container/login/login.component'
import { DashboardComponent } from "./container/dashboard/dashboard.component";


const routes: Routes = [
  {path: 'newsec', component: HomeComponent},
  {path: 'newsec/contact', component: ContactComponent},
  {path: 'newsec/login', component: LoginComponent},
  {path: 'newsec/dashboard', component: DashboardComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewsecRoutingModule { }
