import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = [
    {
      id: 1,
      name: 'Chanaka',
    },
    {
      id: 2,
      name: 'Dileep',
    },
  ];

  constructor() {}

  getUsers() {
    return of(this.users);
  }
}
