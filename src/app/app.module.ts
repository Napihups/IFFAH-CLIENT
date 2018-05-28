import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { appRoute } from './app.routing';

//----------- SERVICES WITHIN THIS APP MODULE ------/
import { AuthenticationService } from './services/authentication.service';
import { FormValidationService } from './services/form-validation.service';
import { PassportService } from './services/passport.service';
import { AuthGuard } from './services/auth-guard.service';

//----------APP MODULES -----------------------------//
import { UserModule } from './user/user.module';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoute,
    UserModule,
  ],
  providers: [ 
    AuthenticationService,
    FormValidationService,
    PassportService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
