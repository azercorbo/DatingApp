import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from './models/app-user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: Observable<AppUser[]>;

  constructor(private usersService: UsersService) {
    this.users = this.usersService.users;
  }
}
