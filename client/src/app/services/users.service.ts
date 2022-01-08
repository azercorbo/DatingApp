import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppUser } from '../models/app-user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly users: Observable<AppUser[]>;

  constructor(private httpClient: HttpClient) {
    this.users = this.httpClient.get<AppUser[]>(
      'https://localhost:5003/api/users'
    );
  }
}
