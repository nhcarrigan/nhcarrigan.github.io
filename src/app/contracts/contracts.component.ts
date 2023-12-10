import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contracts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contracts.component.html',
  styleUrl: './contracts.component.css',
})
export class ContractsComponent {
  public contracts = [
    {
      name: 'BigBadBeaver TV',
      link: 'https://bigbadbeaver.tv',
      project: 'PrivateTwigs Twitch Bot',
      avatar: 'beaver.png',
      date: 'October 2022',
    },
    {
      name: 'Deepgram',
      link: 'https://deepgram.com/',
      project: 'Deepgram Discord Bot',
      avatar: 'deepgram.jpg',
      date: 'July 2023, October 2023, December 2023',
    },
  ];
  public loading = true;
  constructor() {
    new Promise((resolve) => setTimeout(resolve, 5000)).then(
      () => (this.loading = false)
    );
  }
}
