import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { loginRoutes } from './routes/routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(loginRoutes)
  ],
  declarations: [LoginComponent],
  bootstrap: [LoginModule]
})
export class LoginModule { }
