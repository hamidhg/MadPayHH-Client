import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import {  authRoutes } from './routes/routes';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(authRoutes)
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  bootstrap: [AuthModule]
})
export class AuthModule { }
