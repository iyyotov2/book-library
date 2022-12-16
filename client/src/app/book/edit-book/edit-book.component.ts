import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { BookService } from '../book.service';
import { IBook } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent {
  book: IBook | null = null;
  id = this.activatedRoute.snapshot.params['id'];

  form = this.fb.group({
    bookTitle: ['', [Validators.required]],
    author: ['', [Validators.required]],
    yearOfIssue: ['', [Validators.required]],
    image: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    nationality: ['', [Validators.required]]
  });

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private bookService: BookService, private router: Router) {
    this.bookService.getBook(this.id).subscribe(book => {
      this.book = book;
      this.form.patchValue({
        bookTitle: this.book.bookTitle,
        author: this.book.author,
        yearOfIssue: this.book.yearOfIssue,
        image: this.book.image,
        genre: this.book.genre,
        nationality: this.book.nationality,
      });
    });
  }

  editBookHandler() {
    if (this.form.invalid) { return; }
    const { bookTitle, author, yearOfIssue, image, genre, nationality } = this.form.value;
    const bookId = this.id;
    this.bookService.updateBook(
      bookTitle!,
      author!,
      yearOfIssue!,
      image!,
      genre!,
      nationality!,
      bookId!
    ).subscribe(() => {
      this.router.navigate([`/book/details/${bookId}`]);
    });
  }
}