import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

projects:Array<any> = [];

  constructor(public projectsService:ProjectsService) { }

  ngOnInit() {
    this.projectsService.getProjectList().subscribe( list =>{
      this.projects = list;
    });
  }

}
