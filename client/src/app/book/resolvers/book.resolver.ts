import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { BookService } from "../book.service";
import { IBook } from "../../shared/interfaces/book";

@Injectable({
    providedIn: 'root'
})
export class BookResolver implements Resolve<IBook | null> {
    constructor(private bookService: BookService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IBook | null | Observable<IBook> | Promise<IBook> {
        const bookId = route.params['id'];
        if (bookId.length !== 24) {
            this.router.navigate(['/book/list']);
            return null;
        }
        return this.bookService.getBook(bookId);
    }
}