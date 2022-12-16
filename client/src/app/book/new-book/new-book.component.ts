import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {
  form = this.fb.group({
    bookTitle: ['', [Validators.required]],
    author: ['', [Validators.required]],
    yearOfIssue: ['', [Validators.required]],
    image: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    nationality: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router) { }

  newBookHandler() {
    if (this.form.invalid) { return; }
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