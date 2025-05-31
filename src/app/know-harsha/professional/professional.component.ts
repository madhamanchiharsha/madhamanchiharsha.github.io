import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-professional',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './professional.component.html',
  styleUrl: './professional.component.scss'
})

export class ProfessionalComponent {

  constructor(public _globalService: GlobalService) {
    this._globalService.headerTitle.next('Professional Experience')
  }

  professionalExperience = [
  {
    company: 'FICO (Fair Isaac Corporation)',
    position: 'Software Engineer II',
    period: 'May 2024 - Present',
    description:
      '<b>Contributing to microservices architecture using AWS, Spring Boot, and Python. Continuously exploring and applying emerging technologies.</b>',
    achievements: [
      'Improved CI/CD pipelines by integrating automated alerting mechanisms, reducing delivery timelines by 30% through quicker issue detection and resolution.',
      'Led a team project in a company-wide Hackathon to build a Business Knowledge Extraction System using LLaMA 3 (8B). The system parses contextual data to generate business-specific JSON outputs, significantly reducing manual effort for engineers.',
      'Developed a Retrieval-Augmented Generation (RAG) system with LangChain on internal documentation. This tool assists new developers in debugging and onboarding by retrieving and generating context-aware responses.'
    ]
  },
  {
    company: 'Philips Innovation Campus',
    position: 'Software DevOps Engineer',
    period: 'April 2023 - May 2024',
    description:
      '<b>Managed cloud infrastructure and supported development teams across multiple environments using AWS and Terraform.</b>',
    achievements: [
      'Redesigned Terraform workflows to enable one-click environment provisioning and teardown.',
      'Independently managed AWS infrastructure across five environments, ensuring high availability and rapid incident resolution.',
      'Mentored junior DevOps engineers on infrastructure automation and cloud best practices.'
    ]
  },
  {
    company: 'Philips Innovation Campus',
    position: 'Senior Software Engineer',
    period: 'March 2022 - April 2023',
    description:
      '<b>Owned the EPIC for Tenant Onboarding in the SaaS Factory initiative, contributing to scalable microservices development.</b>',
    achievements: [
      'Developed microservices using Java Spring Boot and AWS Lambda.',
      'Integrated with various AWS services including S3, SQS, and RDS.',
      'Collaborated closely with the team to take full ownership of the epic, leading to improved project delivery and team performance.'
    ]
  },
  {
    company: 'Philips Innovation Campus',
    position: 'Software Engineer',
    period: 'August 2019 - March 2022',
    description:
      '<b>Worked on core backend systems and DevOps automation while engaging with clients to customize solutions based on their needs.</b>',
    achievements: [
      'Engaged directly with clients to analyze business requirements and design technical solutions aligned with their specific needs.',
      'Independently developed and maintained Terraform scripts for AWS-based application deployments.',
      'Developed core Python scripts to aggregate data from various tools used throughout the Software Development Life Cycle (SDLC), forming the backbone of project'
    ]
  }
];


  education = [
    {
      institution: '<b>Vellore Institue of Technology (VIT)</b>',
      degree: 'MTech Integrated Software Engineering (MIS)',
      year: '2020'
    }
  ];
openCollegeWebsite(): void {
    window.open('https://vit.ac.in/', '_blank'); 
  }
}