import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(public projectsService: ProjectsService,
  public route: Router) { }

  ngOnInit() {
  }

  createProject(project){
    this.projectsService.createProject(project)
    .map(p => this.route.navigate(['/project', p._id]))
    .subscribe()
  }

}
