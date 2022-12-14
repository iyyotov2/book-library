import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListBookComponent } from './list-book/list-book.component';
import { NewBookComponent } from './new-book/new-book.component';
import { DetailsBookComponent } from './details-book/details-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  declarations: [
    ListBookComponent,
    NewBookComponent,
    DetailsBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookRoutingModule
  ]
})
export class BookModule { }