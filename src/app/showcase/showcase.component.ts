import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
})
export class ShowcaseComponent {
  public projects: {
    name: string;
    description: string;
    url: string;
    iconUrl: string;
  }[] = [
    {
      name: 'Becca Lyria',
      description:
        'Community management and moderation bot for Discord. Used in over 300 communities.',
      url: 'https://beccalyria.com',
      iconUrl: 'https://cdn.nhcarrigan.com/avatars/becca.png',
    },
    {
      name: 'SES Email Blast',
      description:
        'CLI tool to handle sending out email newsletters. Handles millions of emails.',
      url: 'https://github.com/freecodecamp/ses-email-blast',
      iconUrl: '/assets/img/clients/freeCodeCamp.png',
    },
    {
      name: 'Rythm Moderation Bot',
      description:
        'Custom moderation bot with extensive automod features. Keeps a community of over 300,000 people safe.',
      url: 'https://discord.gg/Fxw6xgRjHE',
      iconUrl: '/assets/img/clients/rythm.png',
    },
    {
      name: 'Beccalia Game Series',
      description:
        'An in-progress series of video games made with RPG Maker MZ.',
      url: 'https://nhcarrigan.itch.io/',
      iconUrl: 'https://cdn.nhcarrigan.com/avatars/beccalia.png',
    },
  ];
}
