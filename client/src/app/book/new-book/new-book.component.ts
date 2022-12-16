import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {
  form = this.fb.group({
    bookTitle: [''],
    author: [''],
    yearOfIssue: [''],
    image: [''],
    genre: [''],
    nationality: ['']
  });

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router) { }

  newBookHandler() {
    const { bookTitle, author, yearOfIssue, image, genre, nationality } = this.form.value;

    this.bookService.createBook(
      bookTitle!,
      author!,
      yearOfIssue!,
      image!,
      genre!,
      nationality!
    ).subscribe(() => {
      this.router.navigate(['/book/list']);
    });
  }
}