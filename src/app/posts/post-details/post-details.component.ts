import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any;

  posts = [
    { id: 1, title: 'Post 1', imageUrl: 'https://i.pinimg.com/564x/50/9b/83/509b832f5dd7f4c3f1569ca65aa55e47.jpg', description: '🍂☘️⛅' },
    { id: 2, title: 'Post 2', content: 'Este es el segundo post.' },
    { id: 3, title: 'Post 3', content: 'Este es el tercer post.' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.posts.find(post => post.id === postId);
  }
}
