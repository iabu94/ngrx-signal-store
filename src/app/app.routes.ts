import { Routes } from '@angular/router';
import { postsResolver } from './services';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    resolve: {
      loadedPosts: postsResolver,
    },
    loadComponent: () =>
      import('./components/posts/posts.component').then(c => c.PostsComponent),
  },
];
