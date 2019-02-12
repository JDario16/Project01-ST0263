import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();


  readonly URL_API = 'http://localhost:3000/api/events';
  constructor(private http: HttpClient) {

  }

  getPosts() {
    return [...this.posts]; //Todos los objetos de post[]
  }

  addPost(eventName: string, altitud: string, latitud: string) {
    const post: Post = { eventName: eventName, altitud: altitud, latitud: latitud};
  }

  /*putEvent(post: Post) {
    return this.http.put(this.URL_API + `/${post._id}`, post);
  }*/

  deleteEvent(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }


  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
  /*addPost(eventName: string, altitud: number, latitud: number) {
    const post: Post = { name: eventName, altitud: altitud, latitud: latitud};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }*/
}
