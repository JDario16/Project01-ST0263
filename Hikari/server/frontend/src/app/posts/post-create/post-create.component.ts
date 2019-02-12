import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';
import { Post } from '../post.model';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  providers: [PostsService]
})
export class PostCreateComponent {
  enteredEventName = '';
  enteredAltitud = '';
  enteredLatitud = '';

  constructor(public postsService: PostsService) {

  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    //console.log(form.value);
    this.postsService.addEvent(form.value)
      .subscribe(res => {
        console.log(res);
        this.getEvents();
    });
    //this.postsService.addPost(form.value.eventName, form.value.altitud, form.value.latitud);
    form.resetForm();
  }

  getEvents() {
    this.postsService.getPosts()
      .subscribe(res => {
        this.postsService.posts = res as Post[];
        console.log(res);
      });
  }

  updateEvent(post: Post) {
    console.log('editando');
    this.postsService.selectedEvent = post;

  }
}
