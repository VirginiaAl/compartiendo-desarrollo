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
    public route: Router,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.projectsService.getProjectByID(params['id'])
        .map(project => this.project = project)
        .subscribe()
    })
  }
  editProject(){
    this.projectsService.editProject(this.project)
    .map(p => this.route.navigate(['/project', p._id]))
    .subscribe()
  }




}
