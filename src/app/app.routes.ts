import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { App } from './app';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { Users } from './users/users';

export const routes: Routes = [
  {
    path: 'profile',
    component: Profile,
    data: { name: 'Aman pate' },
  },
  {
    path: '',
    component: Home,
  },

  {
    path: 'about',
    component: About,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'user/:id/:name/:email/:age',
    component: Users,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
