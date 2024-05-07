import { Component, computed, inject } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { PostStore } from '../../store/post.store';
import { Post } from '../../models';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddPostComponent } from '../add-post/add-post.component';

interface ViewModel {
  posts: Post[];
  loading: boolean;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MatCard, MatCardContent, MatProgressSpinner, MatButton],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  #store = inject(PostStore);
  vm = computed<ViewModel>(() => {
    return {
      posts: this.#store.posts(),
      loading: this.#store.loading(),
    };
  });
  #dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.#dialog.open(AddPostComponent);
    dialogRef.afterClosed().subscribe(data => this.addPost(data));
  }

  async addPost(post: Post) {
    await this.#store.addPost(post);
    alert('saved');
  }
}
