

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';

/*Modulos*/
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const App_Routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'profile', component: AccountComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'signup', component: SignupComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(App_Routes);