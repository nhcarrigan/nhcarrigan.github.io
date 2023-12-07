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
      command: 'help',
      action: () => {
        this.help =
          'Available commands: ' +
          this.commands
            .filter((c) => !c.hidden)
            .map((c) => c.command)
            .join(', ');
      },
    },
    {
      command: 'home',
      action: () => this.router.navigate(['']),
    },
    {
      command: 'clients',
      action: () => this.router.navigate(['clients']),
    },
    {
      command: 'spankies',
      action: () => this.router.navigate(['seekrit', 'spankies']),
      hidden: true,
    },
  ];
  public error: string;
  public help: string;
  constructor(private r: Router) {
    this.error = '';
    this.help = '';
    this.router = r;
  }
  onEnter(event: Event) {
    event.preventDefault();
    if (!(event instanceof KeyboardEvent)) {
      return;
    }
    this.error = '';
    this.help = '';
    console.log(event.key);
    if (event.key !== 'Enter') {
      return;
    }
    const command = (event.target as HTMLInputElement).value;
    this.processCommand(command);
    (event.target as HTMLInputElement).value = '';
  }

  processCommand(command: string) {
    const target = this.commands.find((c) => c.command === command);
    if (!target) {
      this.error = `Command ${command} not found. Try "help"`;
      return;
    }
    target.action();
  }
}
