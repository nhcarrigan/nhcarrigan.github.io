import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css',
})
export class DonateComponent {
  public platforms = [
    {
      name: 'GitHub',
      link: 'https://github.com/sponsors/naomi-lgbt',
      avatar: 'github.png',
      description:
        'The preferred platform, donate to directly support our free and open source projects.',
    },
    {
      name: 'Discord',
      link: 'https://discord.com/servers/mama-naomi-s-comfy-coven-1146133490933436476',
      avatar: 'discord.png',
      description:
        'Subscribe or make a one-off donation through our Discord community. You should join this anyway to get your sponsor perks!',
    },
    {
      name: 'Patreon',
      link: 'https://www.patreon.com/nhcarrigan',
      avatar: 'patreon.png',
      description:
        'Make an easy monthly donation on the same platform you use for your favourite creators.',
    },
    {
      name: 'Ko-Fi',
      link: 'https://ko-fi.com/nhcarrigan',
      avatar: 'kofi.png',
      description:
        'An excellent option if you want to send a custom one-time donation.',
    },
    {
      name: 'PayPal',
      link: 'https://paypal.me/nhcarrigan',
      avatar: 'paypal.png',
      description:
        'Great for sending larger amounts, or for a sense of security.',
    },
    {
      name: 'Throne',
      link: 'https://throne.me/naomilgbt',
      avatar: 'throne.jpg',
      description:
        'Purchase physical gifts to send us, or suggests gifts for others to purchase!',
    },
    {
      name: 'Steam',
      link: 'https://store.steampowered.com/wishlist/id/naomi-lgbt/',
      avatar: 'steam.png',
      description: 'Buy us a game and demand we take a break :3',
    },
  ];
  public loading = true;
  constructor() {
    new Promise((resolve) => setTimeout(resolve, 5000)).then(
      () => (this.loading = false)
    );
  }
}
