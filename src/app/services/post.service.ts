import { Injectable } from '@angular/core';
import { posts } from '../data/posts';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts = posts;
  filteredPosts: any;

  private filteredComponentsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(posts);
  
  constructor() { }

  /**
   * Gets posts based on a search term
   * @returns Observable filtered posts
   */
  getFilteredPosts(): Observable<any> {
    return this.filteredComponentsSubject.asObservable();
  }

  /**
   * Adds posts to the list of posts
   * @param newPost - New post to add
   */
  addPost(newPost: any): void {
    this.posts.push(newPost);
  }

  /**
   * Filters posts based on a search term
   * @param searchKeyword - Filters based on a search term
   */
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
