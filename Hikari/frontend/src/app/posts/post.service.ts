import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostsService {
  selectedEvent: Post;
  posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  //Fazt

  readonly URL_API = 'http://localhost:3000/api/events';
  constructor(private http: HttpClient) {

  }

  getPosts() { //getEvents
    return this.http.get(this.URL_API); //Todos los objetos de post[]
  }

  addEvent(post: Post) {
    return this.http.post(this.URL_API, post);
  }

  putEvent(post: Post) {
    return this.http.put(this.URL_API + `/${post._id}`, post);
  }

  deleteEvent(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }


  /*getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }*/
  /*addPost(eventName: string, altitud: number, latitud: number) {
    const post: Post = { name: eventName, altitud: altitud, latitud: latitud};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }*/
}
