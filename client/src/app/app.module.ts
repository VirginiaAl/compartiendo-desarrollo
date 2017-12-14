import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { AgmCoreModule } from '@agm/core';


import { AuthService } from "./services/auth.service";
import { ProjectsService } from './services/projects.service';
import { ChatService } from './services/chat.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'project/new', component: NewProjectComponent },
  { path: 'project/edit/:id', component: EditProjectComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'projects/cat/:category', component: ProjectsListComponent },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProjectComponent,
    ProjectsListComponent,
    NewProjectComponent,
    EditProjectComponent,

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
