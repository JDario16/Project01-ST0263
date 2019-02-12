import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Events } from '../../models/events';
import { PostsService } from '../../services/post.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  providers: [ PostsService ]
})
export class PostCreateComponent implements OnInit, OnDestroy {
  private postsSub: Subscription;

  enteredEventName = '';
  enteredAltitud = '';
  enteredLatitud = '';

  constructor(public postsService: PostsService, private matMsg: MatSnackBar) {

  }

  ngOnInit() {
    this.getEvents();
    /*this.posts = this.postsService.getEvents();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Events[]) => {
        this.posts = posts;
      });*/
  }

  addEvent(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if(form.value._id) {
      this.postsService.putEvent(form.value)
        .subscribe(res => {
          this.matMsg.open('Evento actualizado', '', {duration: 2000});
          this.getEvents();
          this.resetForm();
          form.resetForm();
        });
    } else {
      console.log(form.value);
      this.postsService.postEvent(form.value)
        .subscribe(res => {

          this.matMsg.open('Evento registrado', '', {duration: 2000});
          this.getEvents();
          this.resetForm();
          form.resetForm();
        });
    }
  }

  getEvents() {
    this.postsService.getEvents()
      .subscribe(res => {
        this.postsService.posts = res as Events [];
        console.log(res);
      });
  }

  editEvent(event: Events) {
    this.postsService.selectedEvent = event;
  }

  deleteEvent(_id: string) {
    if(confirm('¿Esta seguro de cancelar el evento?')) {
      this.postsService.deleteEvent(_id)
      .subscribe(res => {
        console.log(res);
        this.matMsg.open('Evento cancelado', '', {duration: 2000});
        this.getEvents();
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.postsService.selectedEvent = new Events();
    }
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
