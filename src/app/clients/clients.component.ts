import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent {
  public clients = [
    {
      name: 'freeCodeCamp',
      link: 'https://freecodecamp.org',
      avatar: 'freeCodeCamp.png',
      since: 'December 2020',
    },
    {
      name: 'Streamcord',
      link: 'https://streamcord.io',
      avatar: 'streamcord.jpg',
      since: 'August 2021',
    },
    {
      name: 'Rythm',
      link: 'https://rythm.fm',
      avatar: 'rythm.png',
      since: 'April 2022',
    },
  ];

  public short = [
    {
      name: 'BigBadBeaver TV',
      link: 'https://bigbadbeaver.tv',
      avatar: 'beaver.png',
      date: 'October 2022',
    },
    {
      name: 'Deepgram',
      link: 'https://deepgram.com/',
      avatar: 'deepgram.jpg',
      date: 'July 2023, October 2023, December 2023',
    },
  ];
}
