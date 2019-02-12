import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit, OnDestroy {
  posts: Post [] = [];
  private postsSub: Subscription;

  enteredEventName = '';
  enteredAltitud = '';
  enteredLatitud = '';

  constructor(public postsService: PostsService) {

  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.eventName, form.value.altitud, form.value.latitud);
    form.resetForm();
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
