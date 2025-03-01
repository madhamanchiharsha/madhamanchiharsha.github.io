import { Routes } from '@angular/router';
import { AboutMeComponent } from './know-harsha/about-me/about-me.component';

export const routes: Routes = [
    {path: 'aboutMe', component: AboutMeComponent},
    {path: '', redirectTo: 'aboutMe', pathMatch: 'full'} 
];
