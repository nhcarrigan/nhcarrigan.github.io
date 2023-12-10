import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Commands } from '../../config/Commands';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  private router: Router;
  private commands = Commands;
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
    if (command === 'clear') {
      this.help = '';
      this.error = '';
      return;
    }
    if (command === 'logout' || command === 'exit') {
      window.location.href = 'about:blank';
      return;
    }
    if (command.startsWith('help')) {
      const query = command.split(/\s+/)[1];
      if (!query) {
        this.help =
          'Available commands: ' +
          this.commands
            .filter((c) => !c.hidden)
            .map((c) => c.command)
            .join(', ');
        return;
      }
      const target = this.commands.find((c) => c.command === query);
      if (target) {
        this.help = `${query}: ${target?.description}`;
        return;
      }
      this.error = `Command ${query} not found.`;
      return;
    }
    const target = this.commands.find((c) => c.command === command);
    if (!target) {
      this.error = `Command ${command} not found. Try "help"`;
      return;
    }
    target.navigate(this.router);
  }
}
