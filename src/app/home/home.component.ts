import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

const takeANap = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public first = false;
  public second = false;
  public third = false;
  constructor() {
    takeANap(5000).then(() => (this.first = true));
    takeANap(10000).then(() => (this.second = true));
    takeANap(15000).then(() => (this.third = true));
  }
}
