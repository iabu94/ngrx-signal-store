import { signalStore, withState } from '@ngrx/signals';
import { Post } from '../models';

type PostState = {
  posts: Post[];
  isLoading: boolean;
};

const initialState: PostState = {
  posts: [],
  isLoading: false,
};

export const PostStore = signalStore(
  { providedIn: 'root' },
  withState(initialState)
);
