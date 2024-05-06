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

  add(post: Post) {
    return this.#http.post<Post>(this.#apiUrl, post);
  }

  update(id: number, post: Post) {
    return this.#http.put<Post>(this.#apiUrl, post);
  }

  delete(id: number) {
    return this.#http.delete<boolean>(`${this.#apiUrl}/${id}`);
  }
}
