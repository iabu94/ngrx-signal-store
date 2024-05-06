import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post } from './models';
import { PostService } from './services';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCard, MatCardContent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  posts = signal<Post[]>([]);

  postService = inject(PostService);

  ngOnInit() {
    this.postService.getAll().subscribe(posts => this.posts.set(posts));
  }
}
