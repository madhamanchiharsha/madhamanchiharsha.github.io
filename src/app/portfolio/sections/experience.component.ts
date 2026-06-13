import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';

interface Role {
  company: string;
  position: string;
  period: string;
  summary: string;
  achievements: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly roles: Role[] = [
    {
      company: 'FICO',
      position: 'Software Engineer II',
      period: 'May 2024 — Present',
      summary:
        'Contributing to a microservices platform on AWS with Spring Boot and Python, while continually folding in emerging tech.',
      achievements: [
        'Integrated automated alerting into CI/CD pipelines, cutting delivery timelines ~30% through faster issue detection.',
        'Led a company-wide Hackathon team building a Business Knowledge Extraction System on LLaMA 3 (8B) that turns context into business-specific JSON, slashing manual effort.',
        'Built a Retrieval-Augmented Generation (RAG) assistant with LangChain over internal docs to speed up debugging and onboarding for new engineers.',
      ],
      tags: ['AWS', 'Spring Boot', 'Python', 'LLaMA 3', 'LangChain', 'RAG'],
    },
    {
      company: 'Philips Innovation Campus',
      position: 'Software DevOps Engineer',
      period: 'Apr 2023 — May 2024',
      summary:
        'Owned cloud infrastructure and backed development teams across multiple environments with AWS and Terraform.',
      achievements: [
        'Redesigned Terraform workflows for one-click environment provisioning and teardown.',
        'Independently ran AWS infrastructure across five environments with high availability and rapid incident response.',
        'Mentored junior DevOps engineers on automation and cloud best practices.',
      ],
      tags: ['AWS', 'Terraform', 'CI/CD', 'IaC'],
    },
    {
      company: 'Philips Innovation Campus',
      position: 'Senior Software Engineer',
      period: 'Mar 2022 — Apr 2023',
      summary:
        'Owned the Tenant Onboarding epic within the SaaS Factory initiative, driving scalable microservices.',
      achievements: [
        'Developed microservices with Java Spring Boot and AWS Lambda.',
        'Integrated S3, SQS and RDS across the onboarding flow.',
        'Took end-to-end ownership of the epic, lifting delivery and team performance.',
      ],
      tags: ['Java', 'Spring Boot', 'AWS Lambda', 'S3', 'SQS', 'RDS'],
    },
    {
      company: 'Philips Innovation Campus',
      position: 'Software Engineer',
      period: 'Aug 2019 — Mar 2022',
      summary:
        'Worked core backend and DevOps automation while engaging clients to tailor solutions to their needs.',
      achievements: [
        'Translated client business requirements into technical solutions directly with stakeholders.',
        'Built and maintained Terraform scripts for AWS application deployments.',
        'Wrote Python tooling to aggregate data across the SDLC — the backbone of project reporting.',
      ],
      tags: ['Python', 'Terraform', 'AWS', 'Backend'],
    },
  ];

  openVit(): void {
    window.open('https://vit.ac.in/', '_blank', 'noopener');
  }
}
