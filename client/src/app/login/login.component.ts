import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  login(username, password){
    this.auth.login(username, password).subscribe();
  }

  logout() {
    this.auth.logout().subscribe();
  }

}
