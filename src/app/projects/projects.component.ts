import { Component, OnInit } from '@angular/core';
import { ProjectInt, projects } from '../../assets/data/Projects';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectList: ProjectInt[] = [];

  constructor() {}

  ngOnInit(): void {
    this.projectList = projects;
  }
}
