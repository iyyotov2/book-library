import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IBook } from 'src/app/shared/interfaces/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.scss']
})
export class DetailsBookComponent {
  book: IBook | null = null;
  id = this.activatedRoute.snapshot.params['id'];
  userId = sessionStorage.getItem('userId');

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) {
    this.bookService.getBook(this.id).subscribe(book => {
      this.book = book;
    });
  }
}