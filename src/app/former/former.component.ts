import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-former',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './former.component.html',
  styleUrl: './former.component.css',
})
export class FormerComponent {
  public clients = [
    {
      name: 'Sema Software',
      link: 'https://semasoftware.com',
      title: 'Community Manager',
      avatar: 'sema.png',
      since: 'May 2022',
      until: 'September 2022',
    },
    {
      name: '4C Community',
      link: 'https://discord.gg/cRjhjFRRre',
      title: 'Community Manager',
      avatar: '4c.png',
      since: 'May 2022',
      until: 'November 2022',
    },
    {
      name: 'TweetShift',
      link: 'https://tweetshift.com',
      title: 'Community Manager',
      avatar: 'tweetshift.png',
      since: 'January 2022',
      until: 'May 2023',
    },
  ];
  public loading = true;
  constructor() {
    new Promise((resolve) => setTimeout(resolve, 5000)).then(
      () => (this.loading = false)
    );
  }
}
