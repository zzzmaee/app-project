import {Injectable} from '@angular/core';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = []

  constructor() {
  }

  public deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId)
  }
}
