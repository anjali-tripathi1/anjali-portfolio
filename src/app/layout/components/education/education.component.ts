import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-education',
  imports: [ CommonModule,RouterLink],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  certifications = [
    {
      title: 'Google Cloud Certification',
      org: 'Google Cloud',
      issued: 'October 2025',
      id: 'UW42HQGCMLZH',
      link: 'https://www.coursera.org/account/accomplishments/verify/UW42HQGCMLZH',
      image: 'certification/Google_Cloud.png',
    },
    {
      title: 'Angular 17',
      org: 'Coursera',
      issued: 'September 2025',
      id: 'QAUER6LIPGQ5',
      link: 'https://www.coursera.org/account/accomplishments/verify/QAUER6LIPGQ5',
      image: 'certification/Angular_Basic.png',
    },
    {
      title: 'Foundations: Data, Data, Everywhere',
      org: 'Google',
      issued: 'October 2025',
      id: '85WI5U0157OB',
      link: 'https://www.coursera.org/account/accomplishments/verify/85WI5U0157OB',
      image: 'certification/Foundation_Data_Analyst.png',
    },
  ];

  visibleCerts: any[] = [];
  currentIndex = 0;
  constructor() {}
  ngOnInit() {
  }

  open() {
    // this.ngbModal.open(this.certificationComp, {
    //   size: 'lg',
    // });
  }
}
