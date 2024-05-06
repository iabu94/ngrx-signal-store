import { Component, computed, inject } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { PostStore } from '../../store/post.store';
import { Post } from '../../models';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

interface ViewModel {
  posts: Post[];
  loading: boolean;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MatCard, MatCardContent, MatProgressSpinner],
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
}
