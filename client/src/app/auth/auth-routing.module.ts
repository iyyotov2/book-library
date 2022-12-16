import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: {
      loginRequired: false
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
    data: {
      loginRequired: false
    }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard],
    data: {
      loginRequired: true
    }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

export const AuthRoutingModule = RouterModule.forChild(routes);