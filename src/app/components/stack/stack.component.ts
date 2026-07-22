import { Component } from '@angular/core';

interface SkillColumn {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-stack',
  standalone: true,
  templateUrl: './stack.component.html',
})
export class StackComponent {
  columns: SkillColumn[] = [
    {
      title: 'Backend — .NET',
      items: ['C# / ASP.NET', 'REST APIs'],
    },
    {
      title: 'Backend — Java',
      items: ['Spring Boot', 'REST APIs'],
    },
    {
      title: 'Frontend',
      items: ['Angular', 'React', 'Tailwind CSS'],
    },
  ];
}
