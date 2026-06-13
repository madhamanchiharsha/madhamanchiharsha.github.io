import { Component, computed, signal } from '@angular/core';
import { RevealDirective } from '../reveal.directive';

type Tier = 'Daily driver' | 'Production' | 'Working knowledge';

interface Technology {
  name: string;
  tier: Tier;
  category: 'frontend' | 'backend' | 'database' | 'devops';
  note: string;
}

interface Category {
  id: 'all' | Technology['category'];
  name: string;
}

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.scss',
})
export class TechComponent {
  readonly categories: Category[] = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' },
  ];

  readonly selected = signal<Category['id']>('all');

  private readonly technologies: Technology[] = [
    { name: 'Angular', tier: 'Daily driver', category: 'frontend', note: 'My go-to for robust single-page apps.' },
    { name: 'TypeScript', tier: 'Daily driver', category: 'frontend', note: 'Type-safe code, end to end.' },
    { name: 'HTML5', tier: 'Daily driver', category: 'frontend', note: 'Semantic, accessible markup.' },
    { name: 'CSS3 / SCSS', tier: 'Daily driver', category: 'frontend', note: 'Responsive, modern styling.' },
    { name: 'Python', tier: 'Production', category: 'backend', note: 'Automation, data, and AI tooling.' },
    { name: 'Java', tier: 'Production', category: 'backend', note: 'Enterprise services with Spring Boot.' },
    { name: 'PostgreSQL', tier: 'Production', category: 'database', note: 'Relational data, done right.' },
    { name: 'Docker', tier: 'Production', category: 'devops', note: 'Consistent, portable environments.' },
    { name: 'Git', tier: 'Daily driver', category: 'devops', note: 'Version control & collaboration.' },
    { name: 'AWS', tier: 'Production', category: 'devops', note: 'Hosting, Lambda, S3, SQS, RDS.' },
    { name: 'Terraform', tier: 'Production', category: 'devops', note: 'Infrastructure as code.' },
  ];

  readonly visible = computed(() => {
    const cat = this.selected();
    return cat === 'all'
      ? this.technologies
      : this.technologies.filter((t) => t.category === cat);
  });

  select(id: Category['id']): void {
    this.selected.set(id);
  }
}
