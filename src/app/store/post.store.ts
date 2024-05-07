import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Post } from '../models';
import { inject } from '@angular/core';
import { PostService } from '../services';

type PostState = {
  posts: Post[];
  loading: boolean;
};

const initialState: PostState = {
  posts: [],
  loading: false,
};

export const PostStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, postService = inject(PostService)) => ({
    async loadAll() {
      patchState(store, { loading: true });
      const posts = await postService.getAll();
      patchState(store, { posts, loading: false });
    },
    async addPost(post: Post) {
      patchState(store, { loading: true });
      await postService.add(post);
      patchState(store, { loading: false });
    },
  }))
);
