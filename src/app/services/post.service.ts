import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  #apiUrl = `https://jsonplaceholder.org/posts`;

  #http = inject(HttpClient);

  constructor() {}

  async getAll() {
    return await lastValueFrom(this.#http.get<Post[]>(this.#apiUrl));
  }

  getById(id: number) {
    return this.#http.get<Post>(`${this.#apiUrl}/${id}`);
  }

  async add(post: Post) {
    const newPost = {
      category: 'lorem',
      content: post.title,
      image:
        'https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org',
      publishedAt: '04/02/2023 13:25:21',
      slug: 'lorem-ipsum',
      status: 'published',
      thumbnail:
        'https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      updatedAt: '14/03/2023 17:22:20',
      url: 'https://jsonplaceholder.org/posts/lorem-ipsum',
      userId: 1,
    };
    return lastValueFrom(this.#http.post<Post>(this.#apiUrl, newPost));
  }

  update(id: number, post: Post) {
    return this.#http.put<Post>(this.#apiUrl, post);
  }

  delete(id: number) {
    return this.#http.delete<boolean>(`${this.#apiUrl}/${id}`);
  }
}
