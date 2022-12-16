import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  bookList: IBook[] | null = null;
  errorFetchingData = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (value) => {
        this.bookList = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      }
    });
  }
}