import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/auth/login/login';
import { RegisterComponent } from './components/auth/register/register';
import { PersonaListComponent } from './components/personas/persona-list/persona-list';
import { PersonaFormComponent } from './components/personas/persona-form/persona-form';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'personas', component: PersonaListComponent },
  { path: 'personas/new', component: PersonaFormComponent },
  { path: 'personas/edit/:id', component: PersonaFormComponent },
  { path: '**', redirectTo: '' }
];