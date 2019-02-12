import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { PostCreateComponent } from '../post-create/post-create.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  private postsSub: Subscription;
  public postCreate: PostCreateComponent;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    /*this.posts = this.postsService.getPosts;*/

    this.getEvents();
    //console.log(this.postsService.posts.length);
    /*this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.postsService.posts = posts;
      });*/
  }

  getEvents() {
    this.postsService.getPosts()
      .subscribe(res => {
        this.postsService.posts = res as Post[];
        console.log(res);
      });
  }

  editEvent(post: Post) {
    this.postsService.selectedEvent = post;
  }

  deleteEvent(_id: string) {
    this.postsService.deleteEvent(_id)
      .subscribe(res => {
        console.log(res);
        this.getEvents();
      });

  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
