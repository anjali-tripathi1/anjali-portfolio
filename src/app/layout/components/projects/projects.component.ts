import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'PlanZone',
      description:
        'Architected and developed a responsive e-learning platform using Angular and modern UI practices, focusing on reusable components and dynamic routing for seamless user navigation.',
      image: 'images/planezone.png',
      demoUrl: 'https://plan-zone.vercel.app/',
      repoUrl: 'https://github.com/anjali-tripathi1/PlanZone',
    },
    {
      title: 'ToDo App',
      description:
        'Engineered a responsive task management app with full CRUD functionality, reliably integrated with a Swagger API for seamless data operations.',
      image: 'images/todoapp.png', // replace with your actual screenshot path
      demoUrl: 'https://todo-app-nine-nu-66.vercel.app/',
      repoUrl: 'https://github.com/anjali-tripathi1/Todo-App', // update if different or remove
    },
    {
      title: 'Student Management',
      description:
        'Developed a Student Management System using Angular with full CRUD capability, featuring advanced data filtering and the use of Angular Pipes.',
      image: 'images/studentManagement.png', // replace with your actual image path
      demoUrl: 'https://angular-pipes-ruby.vercel.app/', // update if different
      repoUrl: 'https://github.com/anjali-tripathi1/Angular-Pipes',
    },
    {
      title: 'Reactive Form',
      description:
        'Developed a form application using Angular Reactive Forms and TypeScript, showcasing expertise in dynamic form validation and user input handling.',
      image: 'images/reactiveForm.png', // replace with your screenshot path
      demoUrl: 'https://angular-reactive-form-orcin.vercel.app/',
      repoUrl: 'https://github.com/anjali-tripathi1/Angular-ReactiveForm', // update if different or remove
    },
    {
      title: 'Food App',
      description:
        'Built a responsive static website for a restaurant using HTML and CSS, focusing on a clean menu layout, engaging design, and user-friendly navigation for showcasing food items.',
      image: 'images/food.png', // replace with your screenshot path
      demoUrl: 'https://anjali-tripathi1.github.io/Food_Website/?utm_source=chatgpt.com',
      repoUrl: 'https://github.com/anjali-tripathi1/Food_Website', // update if different or remove
    },
    {
      title: 'Travel App',
      description:
        'Created a responsive static travel website using HTML and CSS, focusing on clean design and engaging layouts to showcase various destinations and travel packages.',
      image: 'images/travel.png', // replace with your screenshot path
      demoUrl: 'https://anjali-tripathi1.github.io/Travel-Website/',
      repoUrl: 'https://github.com/anjali-tripathi1/Travel-Website', // update if different or remove
    },
  ];
}
