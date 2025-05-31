import { Routes } from '@angular/router';
import { AboutMeComponent } from './know-harsha/about-me/about-me.component';
import { ProfessionalComponent } from './know-harsha/professional/professional.component';
import { TechStackComponent } from './know-harsha/tech-stack/tech-stack.component';
import { ContactComponent } from './know-harsha/contact/contact.component';
import { ProjectsComponent } from './know-harsha/projects/projects.component';

export const routes: Routes = [
    {path: 'aboutMe', component: AboutMeComponent},
    {path: 'professional', component: ProfessionalComponent},
    {path: 'techStack', component: TechStackComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: '', redirectTo: 'aboutMe', pathMatch: 'full'} 
];
