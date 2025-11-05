import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  imports: [CommonModule,RouterLink],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'angular', desc: 'Robust front-end framework for building SPAs' },
    // { name: 'NestJS', icon: 'nestjs', desc: 'Progressive Node.js framework for backend APIs' },
    // { name: 'MySQL', icon: 'database', desc: 'Relational database management system' },
    // { name: 'Formly Forms', icon: 'form', desc: 'Dynamic form generation library for Angular' },

    { name: 'TypeScript', icon: 'code', desc: 'Core language for building large-scale frontend applications' },
    { name: 'JavaScript', icon: 'code', desc: 'Core scripting language for web development' },
    { name: 'HTML', icon: 'html5', desc: 'Markup language for structuring web pages' },
    { name: 'CSS', icon: 'css3', desc: 'Styling language for web design' },
    { name: 'Bootstrap', icon: 'bootstrap', desc: 'Popular CSS framework for responsive UI' },
    { name: 'Tailwind CSS', icon: 'tailwind', desc: 'Utility-first CSS framework for rapid custom UI development' },
    { name: 'Postman', icon: 'postman', desc: 'API testing and development tool' }
  ];

  otherSkills = [
  // { name: 'Python', icon: 'python', desc: 'Versatile programming language for data and backend development' },
  { name: 'Excel', icon: 'excel', desc: 'Powerful tool for data analysis and visualization' },
  // { name: 'Power BI', icon: 'chart', desc: 'Business analytics tool for interactive reports and dashboards' },
  // { name: 'MongoDB', icon: 'mongodb', desc: 'NoSQL database for scalable and flexible data storage' },
  
  // --- Tools added from resume context ---
  { name: 'Git', icon: 'git', desc: 'Distributed version control system for source code management' },
  { name: 'GitHub', icon: 'github', desc: 'Platform for hosting and collaborating on code using Git' },
  { name: 'Vercel', icon: 'vercel', desc: 'Platform for deployment and hosting of web applications' },
  { name: 'Modular Architecture', icon: 'layers', desc: 'Designing software with loosely coupled, interchangeable components' },
  { name: 'Dynamic Validation', icon: 'shield-check', desc: 'Implementing real-time form validation logic for enhanced UX' }
];


  getIconClass(icon: string): string {
  const iconMap: { [key: string]: string } = {
    // Existing Mappings
    angular: 'fab fa-angular',
    nestjs: 'fas fa-server',
    database: 'fas fa-database',
    form: 'fas fa-file-alt',
    code: 'fas fa-code',
    html5: 'fab fa-html5',
    css3: 'fab fa-css3-alt',
    bootstrap: 'fab fa-bootstrap',
    postman: 'fas fa-envelope-open-text',
    python: 'fab fa-python',
    excel: 'fas fa-table',
    chart: 'fas fa-chart-bar',
    mongodb: 'fas fa-leaf',

    // --- New/Updated Mappings ---
    typescript: 'fas fa-mug-hot',
    javascript: 'fab fa-js-square',
    tailwind: 'fas fa-wind',
    git: 'fab fa-git-alt',
    github: 'fab fa-github',
    vercel: 'fas fa-satellite-dish',
    layers: 'fas fa-layer-group',
    
    // Use 'fas fa-check-double' or 'fas fa-file-signature'
    'shield-check': 'fas fa-check-double' // Checkmarks for validation success
  };
  return iconMap[icon] || 'fas fa-tools';
}


}
