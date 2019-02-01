import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
// posts = [
//   {tittle: 'First Post', content: 'This is the first post\'s content'},
//   {tittle: 'Second Post', content: 'This is the second post\'s content'},
//   {tittle: 'Third Post', content: 'This is the third post\'s content'}
// ];
  @Input() posts = [];
}
