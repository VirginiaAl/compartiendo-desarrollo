import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects:Array<any> = [];

  constructor(public projectsService:ProjectsService, private router: Router) { }

  ngOnInit() {

    
  }
  goToHome() {
      this.router.navigate(['/home']);
    }

}
