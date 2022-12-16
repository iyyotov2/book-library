import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent {
  id = this.activatedRoute.snapshot.params['id'];

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private router: Router) {
    this.bookService.deleteBook(this.id).subscribe(() => {
      this.router.navigate(['/book/list']);
    });
  }
}