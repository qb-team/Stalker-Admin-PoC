/*
 * Container of all components
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http'; 

/* service */
import { AuthenticationService } from './services/authentication.service';
import { OrganizationService } from 'src/api/api';
import { DataService } from './services/data.service';

import { AppComponent } from './app.component';

/* child component */
import { MenuFunctionalityComponent } from './menu-functionality/menu-functionality.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ContentComponent } from './content/content.component';
import { ContentTrackUsersComponent } from './content/content-track-users/content-track-users.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FooterComponent } from './footer/footer.component';
import { ContentHomeComponent } from './content/content-home/content-home.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuFunctionalityComponent,
    ContentComponent,
    ContentTrackUsersComponent,
    MenubarComponent,
    LoginComponent,
    ResetPasswordComponent,
    FooterComponent,
    ContentHomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService, DataService, OrganizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
