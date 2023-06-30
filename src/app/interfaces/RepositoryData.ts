import { GithubRepository } from './Github';

export type RepositoryData = {
  [key in OrganisationName]: GithubRepository[];
};

export type OrganisationName =
  | 'naomi-lgbt'
  | 'beccalyria'
  | 'rosalianightsong'
  | 'nhcarrigan'
  | 'naomis-novas';
