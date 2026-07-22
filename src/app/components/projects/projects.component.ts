import { Component } from '@angular/core';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  name: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'E-Library',
      description:
        'Digital library platform — Spring Boot REST API paired with a React front end. [Replace with real detail: search, borrowing, catalog management?]',
      tech: ['Java', 'Spring Boot', 'React'],
      links: [
        { label: 'Backend ↗', url: 'https://github.com/Thanaphat-Boonrak/E-Library-Spring-boots' },
        { label: 'Frontend ↗', url: 'https://github.com/Thanaphat-Boonrak/E-Library-React' },
      ],
    },
    {
      name: 'Ecommerce (.NET)',
      description:
        "E-commerce backend on .NET — catalog, cart, order flow.",
      tech: ['C#', '.NET',"Angular"],
      links: [{ label: 'GitHub ↗', url: 'https://github.com/Thanaphat-Boonrak/Ecommerce_.Net' }],
    },
    {
      name: 'WebActivity (.NET)',
      description:
        "Activity/event management app — .NET backend, TypeScript front end.",
      tech: ["C#",'.NET',"React"],
      links: [{ label: 'GitHub ↗', url: 'https://github.com/Thanaphat-Boonrak/WebActivity_.Net' }],
    },
    {
      name: 'TinderInspire (.NET)',
      description:
        'Matching app built with C# and .NET.  SignalR for chat update',
      tech: ['C#', '.NET',"Angular"],
      links: [{ label: 'GitHub ↗', url: 'https://github.com/Thanaphat-Boonrak/TinderInspire_.Net' }],
    },
    {
      name: 'Recipe Sharing (Spring Boot)',
      description:
        'Recipe-sharing backend built with Spring Boot',
      tech: ['Java', 'Spring Boot'],
      links: [{ label: 'GitHub ↗', url: 'https://github.com/Thanaphat-Boonrak/RecipeSharing_SpringBoots' }],
    },
      {
      name: 'Auction Microservice (.NET)',
      description:
        "Auction platform backend on .NET — real-time bidding, user management. SignalR for live updates.",
      tech: ['C#', '.NET',"Next.js","Kubernetes"],
      links: [{ label: 'GitHub ↗', url: 'https://github.com/Thanaphat-Boonrak/Auction_Microservice_Dotnet'  , } , {label: 'Demo with deployment on Kubernetes ↗', url: 'https://app.thanaphat2005.store/' }],
    },
  ];
}
