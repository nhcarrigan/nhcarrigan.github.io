import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  private router: Router;
  private commands = [
    {
      command: 'home',
      action: () => this.router.navigate(['home']),
    },
  ];
  public error: string;
  constructor(private r: Router) {
    this.error = '';
    this.router = r;
  }
  onEnter(event: Event) {
    event.preventDefault();
    if (!(event instanceof KeyboardEvent)) {
      return;
    }
    this.error = '';
    console.log(event.key);
    if (event.key !== 'Enter') {
      return;
    }
    const command = (event.target as HTMLInputElement).value;
    this.processCommand(command);
  }

  processCommand(command: string) {
    const target = this.commands.find((c) => c.command === command);
    if (!target) {
      this.error = `Command ${command} not found. Try <code>help</code>`;
      return;
    }
  }
}
