import { Component, Input } from '@angular/core';
import { posts } from '../data/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() city: string | null = '';
  posts: any = posts;
}
