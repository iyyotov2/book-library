import { RouterModule, Routes } from '@angular/router';

import { ListBookComponent } from './list-book/list-book.component';
import { NewBookComponent } from './new-book/new-book.component';
import { DetailsBookComponent } from './details-book/details-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { BookResolver } from './resolvers/book.resolver';

const routes: Routes = [
  {
    path: 'list',
    component: ListBookComponent
  },
  {
    path: 'new',
    component: NewBookComponent
  },
  {
    path: 'details/:id',
    resolve: {
      book: BookResolver
    },
    component: DetailsBookComponent
  },
  {
    path: 'edit/:id',
    resolve: {
      book: BookResolver
    },
    component: EditBookComponent
  },
  {
    path: 'delete/:id',
    resolve: {
      book: BookResolver
    },
    component: DeleteBookComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

export const BookRoutingModule = RouterModule.forChild(routes);