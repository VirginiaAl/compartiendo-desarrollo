import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProjectsService } from '../services/projects.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects:Array<any> = [];
  
  constructor(private auth: AuthService, public projectsService:ProjectsService) { }

  ngOnInit() {
    this.projectsService.getProjectList()
    .map( list => this.projects = list)
    .subscribe()
  }

  login(username, password){
    this.auth.login(username, password).subscribe();
  }

  logout() {
    this.auth.logout().subscribe();
  }

}
