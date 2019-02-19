import { Events } from '../models/events';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class PostsService {
  private postUpdated = new Subject<Events[]>();

  selectedEvent: Events;
  posts: Events[] = [];

  readonly URL_API = "https://jamonto5.dis.eafit.edu.co/server/";
  constructor(private http: HttpClient) {
    this.selectedEvent = new Events();
  }

  getEvents() {
    return this.http.get(this.URL_API);
  }

  postEvent(Event: Events) {
    return this.http.post(this.URL_API, Event);
  }

  putEvent(Event: Events) {
    return this.http.put(this.URL_API + `${Event._id}`, Event);
  }

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
