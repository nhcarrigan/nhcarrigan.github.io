import { Component, OnInit } from '@angular/core';
import { OrganisationName } from '../interfaces/RepositoryData';
import { GithubRepository } from '../interfaces/Github';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  public projects: { [key in OrganisationName]: GithubRepository[] } = {
    'naomi-lgbt': [],
    nhcarrigan: [],
  };
  public orgs: OrganisationName[] = ['naomi-lgbt', 'nhcarrigan'];
  public avatars: { [key in OrganisationName]: string } = {
    'naomi-lgbt': 'https://cdn.nhcarrigan.com/profile.png',
    nhcarrigan: 'https://cdn.nhcarrigan.com/avatars/nhcarrigan.png',
  };
  public descriptions: { [key in OrganisationName]: string } = {
    'naomi-lgbt': "These are all of Naomi's personal projects.",
    nhcarrigan: 'Projects built for clients, friends, or communities.',
  };
  public showList: { [key in OrganisationName]: boolean } = {
    'naomi-lgbt': false,
    nhcarrigan: false,
  };

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getRepos('naomi-lgbt').subscribe((data) => {
      this.projects['naomi-lgbt'] = data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);
    });
    this.projectsService.getRepos('nhcarrigan').subscribe((data) => {
      this.projects.nhcarrigan = data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);
    });
  }

  toggleList(org: OrganisationName): void {
    this.showList[org] = !this.showList[org];
  }
}
