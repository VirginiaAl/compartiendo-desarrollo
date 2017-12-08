import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class ProjectsService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }

  getProjectList(): Observable<any> {
    return this.http.get('${this.BASE_URL}/project')
      .map((res) => res.json());
  }

  getProjectByID(id): Observable<any> {
    return this.http.get('${this.BASE_URL}/project/${id}')
      .map((res) => res.json());
  }

  editProject(projects): Observable<any> {
    return this.http.put('${this.BASE_URL}/project/${project.id}', projects)
      .map((res) => res.json());
  }

  deleteProject(id) {
    return this.http.delete("${this.BASE_URL}/project/${id}")
      .map((res) => res.json());
  }


}
