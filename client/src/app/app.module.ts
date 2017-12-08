import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import { AuthService } from "./services/auth.service";
import { ProjectsService } from './services/projects.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: HomeComponent },
  { path: 'about', component: UserComponent },
  { path: 'about', component: ProjectComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProjectComponent,
    ProjectsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
