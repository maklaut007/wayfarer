import { Injectable } from '@angular/core';
import { posts } from './../data/posts'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  posts = posts;
  filteredPosts: any;

  private filteredComponentsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(posts);
  
  constructor() { }

  getFilteredPosts(): Observable<any> {
    return this.filteredComponentsSubject.asObservable();
  }

  filterPosts(searchKeyword: string) {
    if (searchKeyword) {
      this.filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(searchKeyword);
      });
      this.filteredComponentsSubject.next(this.filteredPosts);
    } else {
      this.filteredPosts = posts;
      this.filteredComponentsSubject.next(this.filteredPosts);
    }
  } 
}
