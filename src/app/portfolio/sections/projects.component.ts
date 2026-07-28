import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  badge?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      title: 'Developer Plugin',
      badge: 'Claude Code Plugin',
      description:
        'A Claude Code plugin that reads a Jira ticket, queries Confluence with contextually relevant keywords, understands multiple codebases simultaneously, and produces a structured developer briefing — where we stand, what the ticket is actually asking, acceptance criteria mapped to code surfaces, and concrete implementation recommendations.',
      tags: ['Claude Code', 'Jira API', 'Confluence API', 'Agentic Systems', 'TypeScript'],
    },
    {
      title: 'Business Knowledge Extraction System',
      badge: 'Hackathon · FICO',
      description:
        'Built with a team at a company-wide FICO Hackathon. Takes business context as input and outputs structured, domain-specific JSON using LLaMA 3 (8B) — replacing hours of manual analyst extraction with a single prompt. Recognised across the company for reducing effort on repetitive classification work.',
      tags: ['LLaMA 3', 'Python', 'LLM', 'Business Intelligence'],
    },
    {
      title: 'RAG Assistant for Engineering Docs',
      badge: 'FICO · Production',
      description:
        'An internal retrieval-augmented generation assistant built on LangChain over company documentation. Answers technical questions by retrieving from real docs rather than hallucinating — cut ramp-up time for new engineers and sped up debugging for the wider team.',
      tags: ['RAG', 'LangChain', 'Python', 'AWS', 'Vector Search'],
    },
  ];
}
