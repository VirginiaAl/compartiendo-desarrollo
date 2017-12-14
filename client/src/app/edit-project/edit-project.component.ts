import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  project;

  constructor(public projectsService: ProjectsService,
  private route: Router,
  private router: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectsService.getProjectByID(params['id'])
        .map(project => this.project = project)
        .subscribe()
    }
  }
    editProject(projects){
      this.projectsService.editProject(projects)
      .map(p => this.route.navigate(['/project', p._id]))
      .subscribe()
    }



}
