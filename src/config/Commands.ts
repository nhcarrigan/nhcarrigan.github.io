import { Router } from '@angular/router';

interface Command {
  command: string;
  description: string;
  navigate: (router: Router) => void;
  hidden?: true;
}

export const Commands: Command[] = [
  /**
   * Routes
   */
  {
    command: 'home',
    description: 'Return to the home directory.',
    navigate: (router) => {
      router.navigate(['']);
    },
  },
  {
    command: 'clients',
    description: 'View our current long term clients.',
    navigate: (router) => router.navigate(['clients']),
  },
  {
    command: 'contracts',
    description: 'View our one-off client contracts.',
    navigate: (router) => router.navigate(['contracts']),
  },
  {
    command: 'former',
    description: 'View our former long-term clients.',
    navigate: (router) => router.navigate(['former']),
  },
  {
    command: 'volunteer',
    description: 'View our volunteer work.',
    navigate: (router) => router.navigate(['volunteer']),
  },
  {
    command: 'donate',
    description: 'Donate to support the work we do.',
    navigate: (router) => router.navigate(['donate']),
  },
  {
    command: 'projects',
    description: 'See our personal projects.',
    navigate: (router) => router.navigate(['projects']),
  },
  {
    command: 'team',
    description: 'Meet our team!',
    navigate: (router) => router.navigate(['team']),
  },
  {
    command: 'hire',
    description: 'Request us to do work for you.',
    navigate: (router) => router.navigate(['hire']),
  },
  /**
   * Secrets
   */
  {
    command: 'spankies',
    description: 'Secret.',
    navigate: (router) => router.navigate(['seekrit', 'spankies']),
    hidden: true,
  },
  {
    command: 'grue',
    description: 'Secret.',
    navigate: (router) => router.navigate(['seekrit', 'grue']),
    hidden: true,
  },
];
