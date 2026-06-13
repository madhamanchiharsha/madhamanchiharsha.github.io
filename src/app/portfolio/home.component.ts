import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero.component';
import { AboutComponent } from './sections/about.component';
import { ExperienceComponent } from './sections/experience.component';
import { TechComponent } from './sections/tech.component';
import { ContactComponent } from './sections/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    TechComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-about />
    <app-experience />
    <app-tech />
    <app-contact />
  `,
})
export class HomeComponent {}
