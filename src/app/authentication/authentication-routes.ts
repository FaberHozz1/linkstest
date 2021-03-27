import { Routes } from '@angular/router';
import { URLS } from '../shared/constants/urls.constant';
import { AUTH_URLS } from './constants/urls.constant';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: AUTH_URLS.login
  },
  {
    path: AUTH_URLS.login,
    component: LoginComponent
  },
  {
    path: AUTH_URLS.register,
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: AUTH_URLS.login
  },
];