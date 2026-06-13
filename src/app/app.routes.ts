import { Routes } from '@angular/router';
import { HomeComponent } from './portfolio/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];
