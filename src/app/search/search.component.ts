import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyword: string = '';

  constructor(private searchService: SearchService) {}

  findPost(keyword: string) {
    this.searchService.filterPosts(this.keyword.toLowerCase());
  }

  ngOnInit(): void {
    
  }

}
