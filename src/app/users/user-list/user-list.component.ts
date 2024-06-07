import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { id: 1, name: 'Taylor Swift' },
    { id: 2, name: 'Luana' },
    { id: 3, name: 'Liam' }
  ];

  constructor(private router: Router) {}

  viewDetails(userId: number): void {
    this.router.navigate(['/users', userId]);
  }
}
