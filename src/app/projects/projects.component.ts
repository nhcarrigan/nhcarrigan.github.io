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
    beccalyria: [],
    rosalianightsong: [],
    nhcarrigan: [],
    'naomis-novas': [],
  };
  public orgs: OrganisationName[] = [
    'naomi-lgbt',
    'beccalyria',
    'rosalianightsong',
    'nhcarrigan',
    'naomis-novas',
  ];
  public avatars: { [key in OrganisationName]: string } = {
    'naomi-lgbt': 'https://cdn.nhcarrigan.com/profile.png',
    beccalyria: 'https://cdn.nhcarrigan.com/avatars/becca.png',
    rosalianightsong: 'https://cdn.nhcarrigan.com/avatars/rosalia.png',
    nhcarrigan: 'https://cdn.nhcarrigan.com/avatars/nhcarrigan.png',
    'naomis-novas': 'https://cdn.nhcarrigan.com/avatars/novas.png',
  };
  public descriptions: { [key in OrganisationName]: string } = {
    'naomi-lgbt': "These are all of Naomi's personal projects.",
    beccalyria: 'Projects related to Becca Lyria, the moderation bot.',
    rosalianightsong: 'Projects related to Rosalia Nightsong, the RPG bot.',
    nhcarrigan: 'Projects built for clients, friends, or communities.',
    'naomis-novas':
      "Projects built by Naomi's Novas, an open-source community.",
  };
  public showList: { [key in OrganisationName]: boolean } = {
    'naomi-lgbt': false,
    beccalyria: false,
    rosalianightsong: false,
    nhcarrigan: false,
    'naomis-novas': false,
  };

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getRepos('naomi-lgbt').subscribe((data) => {
      this.projects['naomi-lgbt'] = data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);
    });
    this.projectsService.getRepos('beccalyria').subscribe((data) => {
      this.projects.beccalyria = data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);
    });
    this.projectsService.getRepos('rosalianightsong').subscribe((data) => {
      this.projects.rosalianightsong = data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);
    });
    this.projectsService.getRepos('nhcarrigan').subscribe((data) => {
      this.projects.nhcarrigan = data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);
    });
    this.projectsService.getRepos('naomis-novas').subscribe((data) => {
      this.projects['naomis-novas'] = data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);
    });
  }

  toggleList(org: OrganisationName): void {
    this.showList[org] = !this.showList[org];
  }
}
