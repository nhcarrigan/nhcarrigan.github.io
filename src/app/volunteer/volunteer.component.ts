import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css',
})
export class VolunteerComponent {
  public clients = [
    {
      name: 'Commit Your Code',
      link: 'https://discord.gg/2ZUmKVn',
      title: 'Discord Administrator, Integrations Engineer',
      avatar: 'cyc.jpg',
      since: 'December 2020',
    },
    {
      name: 'DigitalOcean',
      link: 'https://freecodecamp.org',
      title: 'Hacktoberfest Community Moderator',
      avatar: 'do.png',
      since: 'April 2021',
    },
    {
      name: 'Caylus Crew',
      link: 'https://discord.gg/infinite',
      title: 'Discord Administrator, Integrations Engineer',
      avatar: 'caylus.webp',
      since: 'June 2021',
    },
    {
      name: "Angel's Angels",
      link: 'https://angelro.se',
      title: 'Discord Moderator',
      avatar: 'angel.png',
      since: 'September 2023',
    },
    {
      name: 'Art For Palestine',
      link: 'https://art4palestine.org',
      title: 'Development Lead',
      avatar: 'a4p.png',
      since: 'November 2023',
    },
    {
      name: 'Kuroko Detective Agency',
      link: 'https://discord.gg/UKbZzYfAhu',
      title: 'Discord Moderator',
      avatar: 'rion.png',
      since: 'November 2023',
    },
    {
      name: "Azuliah's Water Palace",
      link: 'https://discord.gg/XNSy8PMvyy',
      title: 'Discord Administrator, Integrations Engineer',
      avatar: 'azuliah.webp',
      since: 'December 2023',
    },
  ];
  public loading = true;
  constructor() {
    new Promise((resolve) => setTimeout(resolve, 5000)).then(
      () => (this.loading = false)
    );
  }
}
