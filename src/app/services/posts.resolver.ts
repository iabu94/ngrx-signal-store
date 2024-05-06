import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { PostStore } from '../store/post.store';

export const postsResolver: ResolveFn<boolean> = async () => {
  const store = inject(PostStore);
  await store.loadAll();
  return true;
};
