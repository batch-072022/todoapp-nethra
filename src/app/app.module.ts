import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { HomeComponent } from './home/home.component';
import { LinkusersComponent } from './linkusers/linkusers.component';
import { LoginUsersComponent } from './login-users/login-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddtaskComponent,
    EdittaskComponent,
    HomeComponent,
    LinkusersComponent,
    LoginUsersComponent,
    ViewUserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
