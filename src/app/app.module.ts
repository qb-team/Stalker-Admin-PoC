import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

/* Auth service */
import { AuthenticationService } from './services/authentication.service';
import { MenuFunctionalityComponent } from './menu-funzionalita/menu-functionality.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ContentComponent } from './content/content.component';
import { ContentTrackUsersComponent } from './content/content-track-users/content-track-users.component';
import { DataService } from './services/data.service';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuFunctionalityComponent,
    MenubarComponent,
    ContentComponent,
    ContentTrackUsersComponent,
    LoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [AuthenticationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
