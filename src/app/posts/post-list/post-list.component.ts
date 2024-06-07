import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { id: 1, title: 'Primer Post' },
    { id: 2, title: 'Segundo Post' },
    { id: 3, title: 'Tercer Post' }
  ];

  constructor(private router: Router) {}

  viewDetails(postId: number): void {
    this.router.navigate(['/posts', postId]);
  }
}
