import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {ChatService} from '../services/chat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private auth: AuthService,
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit() {

}

logout() {
  this.auth.logout().subscribe();
  this.route.navigate(['/home']);
}

}
