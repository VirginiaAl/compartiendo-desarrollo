import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

projects:Array<any> = [];

  constructor(public projectsService:ProjectsService,
    private route: Router,
   private router: ActivatedRoute,
) { }

  ngOnInit() {
    // this.projectsService.getProjectList().subscribe( list =>{
    //   this.projects = list;
    //   console.log(this.projects)
    // });

    this.router.params.subscribe(params => {
      console.log('PARAMS' + params['category'])
      if(params['category'] != undefined){
      this.projectsService.findByCategory(params['category'])
        .map(projects => this.projects = projects)
        .subscribe()
      }
      else{
        this.projectsService.getProjectList()
        .map( list => this.projects = list)
        .subscribe()
      }

    })

}

  goToHome() {
      this.route.navigate(['/home']);
    }

}
