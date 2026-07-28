import { Routes } from '@angular/router';
import { HomeComponent } from './portfolio/home.component';
import { BlogComponent } from './portfolio/blog/blog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: '' },
];
