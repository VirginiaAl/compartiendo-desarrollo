import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProjectsService } from '../services/projects.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private auth: AuthService) { }

  login(username, password){
    this.auth.login(username, password).subscribe();
  }

  logout() {
    this.auth.logout().subscribe();
  }


}
