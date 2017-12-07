import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AuthService } from "./services/auth.service";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',  component: LoginComponent },
  //{ path: 'about', component: MyAboutComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
