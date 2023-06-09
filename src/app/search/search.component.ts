import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyword: string = '';

  constructor(private postService: PostService) {}

  /**
   * Gets filtered posts from post service
   * @param keyword - Search keyword
   */
  findPost(keyword: string) {
    this.postService.filterPosts(this.keyword.toLowerCase());
  }

  ngOnInit(): void {
    
  }

}
