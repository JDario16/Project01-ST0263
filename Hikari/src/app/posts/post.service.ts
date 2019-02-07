import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts]; //Todos los objetos de post[]
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
  addPost(tittle: string, content: string) {
    const post: Post = {tittle: tittle, content: content};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
