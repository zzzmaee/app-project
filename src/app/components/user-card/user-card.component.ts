import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
@Input() user!: User;
@Output() userDeleted = new EventEmitter<number>()

  deleteUser(): void {
  this.userDeleted.emit(this.user.id)
  }
}
