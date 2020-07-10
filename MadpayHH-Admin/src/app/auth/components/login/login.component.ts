import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  login (){
    this.authservice.login(this.model).subscribe(next =>{
      console.log('logged in ');
    }, error =>{
      console.log('failed');
    });
  }

}
