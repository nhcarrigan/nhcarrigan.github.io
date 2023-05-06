import { Client, PastClient } from '../interfaces/ClientMember';

export const currentClients: Client[] = [
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
    name: 'TweetShift',
    link: 'https://tweetshift.com',
    avatar: 'tweetshift.png',
    since: 'January 2022',
  },
  {
    name: 'Rythm',
    link: 'https://rythm.fm',
    avatar: 'rythm.png',
    since: 'April 2022',
  },
];

export const pastClients: PastClient[] = [
  {
    name: 'Sema Software',
    link: 'https://semasoftware.com',
    avatar: 'sema.png',
    since: 'May 2022',
    until: 'September 2022',
  },
  {
    name: '4C Community',
    link: 'https://discord.gg/cRjhjFRRre',
    avatar: '4c.png',
    since: 'May 2022',
    until: 'November 2022',
  },
];
