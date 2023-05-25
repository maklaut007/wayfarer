import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent{
  @Input() city: string | null = '';
  posts: any;
  searchSubject = new Subject();

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.getFilteredPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
