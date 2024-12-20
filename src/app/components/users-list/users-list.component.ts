import {Component} from '@angular/core';
import {UserCardComponent} from "../user-card/user-card.component";
import {User} from "../../models/user";
import {UsersApiService} from "../../services/users-api.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    UserCardComponent
  ],
  templateUrl: './users-list.component.html'
})
export class UsersListComponent {
  users: User[] = [];

  constructor(
    public usersApiService: UsersApiService,
    public usersService: UsersService
  ) {
  }

  public loadUsers() {
    this.usersApiService.getUsers()
      .subscribe(
        (users: User[]) => {
          this.users = users
        }, (error) => {
          console.error('Problema', error)
        }
      );
  }

  public deleteUser(userId: number) {
    this.usersService.deleteUser(userId);
    this.users = this.users.filter(user => user.id !== userId)
  }
}
