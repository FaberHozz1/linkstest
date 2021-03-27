import { Routes } from '@angular/router';
import { HOME_URLS } from './constants/home.contants';
import { LinksComponent } from './links/links.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    redirectTo: HOME_URLS.links
  },
  {
    path: HOME_URLS.links,
    component: LinksComponent
  },
  {
    path: '**',
    redirectTo: HOME_URLS.links
  }
];