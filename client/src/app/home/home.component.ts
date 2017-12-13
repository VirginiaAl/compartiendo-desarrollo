import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects:Array<any> = [];

  constructor(private auth: AuthService,
    public projectsService:ProjectsService,
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.projectsService.getProjectList()
    .map( list => this.projects = list)
    .subscribe()
  }

  signup(username, password){
  this.auth.signup(username, password).subscribe();
  this.route.navigate(['/user']);
  }

  login(username, password){
    this.auth.login(username, password).subscribe();
    this.route.navigate(['/user']);
  }



}
