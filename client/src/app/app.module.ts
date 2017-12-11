import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { AgmCoreModule } from '@agm/core';


import { AuthService } from "./services/auth.service";
import { ProjectsService } from './services/projects.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';


const routes: Routes = [
  //{ path: '**', redirectTo: '' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'projects', component: ProjectsListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProjectComponent,
    ProjectsListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7W0HY5n39NygEXomWtZNtHOXR9QAtqCU'
    })
  ],
  providers: [AuthService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
