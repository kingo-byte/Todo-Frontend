import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in';
import { SignUpComponent } from './pages/sign-up/sign-up';

export const AUTH_ROUTES: Routes = [
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
];
