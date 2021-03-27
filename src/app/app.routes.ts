import { Routes } from '@angular/router';
import { URLS } from './shared/constants/urls.constant';
import { AuthGuard } from './shared/guards/auth.guard';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: URLS.home,
    pathMatch: 'full'
  },
  {
    path: URLS.authentication,
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: URLS.home,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: URLS.home
  }
];