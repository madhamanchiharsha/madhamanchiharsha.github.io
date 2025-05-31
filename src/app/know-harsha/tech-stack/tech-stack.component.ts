import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

interface Technology {
  name: string;
  proficiency: number;
  category: string;
  description: string;
}
@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})

export class TechStackComponent {
  technologies: Technology[] = [
    // Frontend
    {
      name: 'Angular',
      proficiency: 90,
      category: 'frontend',
      description: 'My primary framework for building robust single-page applications.'
    },
    {
      name: 'TypeScript',
      proficiency: 85,
      category: 'frontend',
      description: 'Used extensively with Angular for type-safe code development.'
    },
    {
      name: 'HTML5',
      proficiency: 95,
      category: 'frontend',
      description: 'Expert in semantic HTML markup and accessibility practices.'
    },
    {
      name: 'CSS3/SCSS',
      proficiency: 85,
      category: 'frontend',
      description: 'Skilled in responsive design and modern CSS frameworks.'
    },
    {
      name: 'Angular',
      proficiency: 75,
      category: 'frontend',
      description: 'Experience building component-based UI applications.'
    },
    
    // Backend
    {
      name: 'Python',
      proficiency: 70,
      category: 'backend',
      description: 'Used for data processing and automation scripts.'
    },
    {
      name: 'Java',
      proficiency: 65,
      category: 'backend',
      description: 'Enterprise application development experience.'
    },
    
    // Database
    {
      name: 'PostgreSQL',
      proficiency: 75,
      category: 'database',
      description: 'Relational database management system.'
    },
    
    // DevOps
    {
      name: 'Docker',
      proficiency: 80,
      category: 'devops',
      description: 'Containerization for consistent deployment environments.'
    },
    {
      name: 'Git',
      proficiency: 90,
      category: 'devops',
      description: 'Version control and collaborative development.'
    },
    {
      name: 'AWS',
      proficiency: 75,
      category: 'devops',
      description: 'Cloud services for application hosting and management.'
    },
    {
      name: 'Terraform',
      proficiency: 75,
      category: 'devops',
      description: 'Used terraform to amange infrastructure (IAAS) '
    }
  ];

  categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' }
  ];

  selectedCategory = 'all';

    constructor(public _globalService: GlobalService) {
      this._globalService.headerTitle.next('My Technology Stack')
    }

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }



  get filteredTechnologies() {
    return this.selectedCategory === 'all'
      ? this.technologies
      : this.technologies.filter(tech => tech.category === this.selectedCategory);
  }
}