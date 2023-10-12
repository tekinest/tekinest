import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { NgReduxModule, NgRedux } from '@angular-redux/store'
import { HttpClientModule } from '@angular/common/http'
import { rootReducer, IAppState } from './store/index'
import {AngularFireModule} from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { NewsecModule } from './newsec/newsec.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Views
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './container/home/home.component';
import { HeaderComponent } from './partials/shared/header/header.component';
import { AppService } from "./services/app.service";
import { ProjectComponent } from './partials/home/project/project.component';
import { ServiceComponent } from './partials/home/service/service.component';
import { FooterCardComponent } from './partials/home/footer-card/footer-card.component';
import { FooterComponent } from './partials/shared/footer/footer.component';
import { SocialComponent } from './partials/shared/social/social.component';
import { AboutComponent } from './container/about/about.component';
import { AboutServiceComponent } from './partials/about/about-service/about-service.component';
import { VisionComponent } from './partials/about/vision/vision.component';
import { ContactComponent } from './container/contact/contact.component';
import { InputComponent } from './partials/contact/input/input.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectComponent,
    ServiceComponent,
    FooterCardComponent,
    FooterComponent,
    SocialComponent,
    AboutComponent,
    AboutServiceComponent,
    VisionComponent,
    ContactComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgReduxModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.newsec),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    NewsecModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {})
  }
}
