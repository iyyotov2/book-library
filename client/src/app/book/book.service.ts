import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IBook } from '../shared/interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<IBook[]>('/book');
  }

  getBook(id: string) {
    return this.http.get<IBook>(`/book/${id}`);
  }

  createBook(
    bookTitle: string,
    author: string,
    yearOfIssue: string,
    image: string,
    genre: string,
    nationality: string
  ) {
    let headers = new HttpHeaders()
      .append('X-Authorization', `${sessionStorage.getItem('authToken')}`);
    return this.http.post<IBook>(
      '/book',
      { bookTitle, author, yearOfIssue, image, genre, nationality },
      { 'headers': headers }
    );
  }

  updateBook(
    bookTitle: string,
    author: string,
    yearOfIssue: string,
    image: string,
    genre: string,
    nationality: string,
    id: string
  ) {
    let headers = new HttpHeaders()
      .append('X-Authorization', `${sessionStorage.getItem('authToken')}`);
    return this.http.put<IBook>(
      `/book/${id}`,
      { bookTitle, author, yearOfIssue, image, genre, nationality },
      { 'headers': headers }
    );
  }

  deleteBook(id: string) {
    let headers = new HttpHeaders()
      .append('X-Authorization', `${sessionStorage.getItem('authToken')}`)
    return this.http.delete<IBook>(`/book/${id}`, { 'headers': headers });
  }
}