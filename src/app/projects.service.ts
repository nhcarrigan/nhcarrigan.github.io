import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { OrganisationName, RepositoryData } from './interfaces/RepositoryData';
import { GithubRepository } from './interfaces/Github';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private cache = {} as RepositoryData;
  private params = '?type=public&per_page=100&page=1';
  private urls: { [key in OrganisationName]: string } = {
    'naomi-lgbt': `https://api.github.com/users/naomi-lgbt/repos${this.params}`,
    nhcarrigan: `https://api.github.com/orgs/nhcarrigan/repos${this.params}`,
  };
  constructor(private http: HttpClient) {}

  getRepos(org: OrganisationName): Observable<GithubRepository[]> {
    if (this.cache[org]) {
      return of(this.cache[org]);
    }
    const request = this.http.get<GithubRepository[]>(this.urls[org]);
    request.subscribe((data) => {
      this.cache[org] = data;
    });
    return request;
  }
}
