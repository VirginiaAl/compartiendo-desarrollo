import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable()
export class ProjectsService {
  options: object = {
    withCredentials: true
  }


  BASE_URL: string = environment.BASE_URL;
  constructor(private http: Http) { }

  getProjectList(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/project`, this.options)
      .map((res) => res.json());
  }

  getProjectByID(id): Observable<any> {
    return this.http.get(`${this.BASE_URL}/project/${id}`, this.options)
      .map((res) => res.json());
  }

  findByCategory(category): Observable<any> {
    return this.http.get(`${this.BASE_URL}/project/cat/${category}`, this.options)
      .map((res) => res.json());
  }

  editProject(projects): Observable<any> {
    return this.http.put(`${this.BASE_URL}/project/${projects._id}`, projects, this.options)
      .map((res) => res.json());
  }

  createProject(project): Observable<any> {
    return this.http.post(`${this.BASE_URL}/project`, project, this.options)
      .map((res) => res.json());
  }

  deleteProject(id) {
    return this.http.delete(`${this.BASE_URL}/project/${id}`, this.options)
      .map((res) => res.json());
  }


}
