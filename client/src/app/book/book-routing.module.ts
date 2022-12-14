import { RouterModule, Routes } from '@angular/router';
import { DetailsBookComponent } from './details-book/details-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';

import { NewBookComponent } from './new-book/new-book.component';

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
    path: 'details',
    component: DetailsBookComponent
  },
  {
    path: 'edit',
    component: EditBookComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

export const BookRoutingModule = RouterModule.forChild(routes);