import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project;

  constructor(public projectsService: ProjectsService,
    private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.projectsService.getProjectByID(params['id'])
        .map(project => this.project = project)
        .subscribe()

    })



  }


  goToHome() {
      this.route.navigate(['/home']);
    }

}
