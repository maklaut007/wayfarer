import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit{
  @Input() city: any | null 
  posts: any;
  searchSubject = new Subject();

  constructor(private postService: PostService) {}

  /**
   * Subscribes to the post observable and adds lists of post to the component.
   */
  ngOnInit() {
    this.postService.getFilteredPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
