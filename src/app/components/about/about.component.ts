import { Component } from '@angular/core';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  stats: Stat[] = [
    { value: '2', label: 'BACKEND ECOSYSTEMS' },
    { value: '2', label: 'FRONTEND FRAMEWORKS' },
    { value: '37+', label: 'GITHUB REPOS' },
    { value: '2022', label: 'BUILDING SINCE' },
  ];
}
