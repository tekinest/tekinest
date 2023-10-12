import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data = [
    {
      title: 'FOR BUSINESS',
      detail: [
        'Technology Support',
        'Business Strategy',
        'Search Engine Optimization',
        'Social Media Marketing',
        'Business Consulting',
      ]
    },
    {
      title: 'FOR ENTREPRENEURS',
      detail: [
        'Idea Investment',
        'Technology Support',
        'Strategy',
        'Consulting'
      ]
    },
    {
      title: 'FOR STUDENTS',
      detail: [
        'Internships',
        'Tech Exposure',
        'IT Consulting',
        'Idea Suppport',
        'Gathering & Seminars',
      ]
    },
    {
      title: 'FOR COMPANIES',
      detail: [
        'Company Management',
        'Technology Support',
        'Application Services',
        'IT Consulting'
      ]
    },
  ]

  visions = [
    {
      title: 'Empower',
      description: 'Educating and empowering entrepreneurs & businesses into achieving their dreams.'
    },
    {
      title: 'Innovate',
      description: 'Introducing something new that solves world problems or meet clients need.'
    },
    {
      title: 'Execute',
      description: 'Execution Excellence in all we do for clients and ourselves is our stand.'
    },
    {
      title: 'Results',
      description: 'Providing excellent and accountable result then aspiring to be more tomorrow.'
    },
  ]

  @ViewChild('top') top

  constructor() { }

  ngOnInit() {
    document.getElementById('upp').scrollIntoView({behavior: 'smooth'})
  }

}
