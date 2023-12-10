import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-clients",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./clients.component.html",
  styleUrl: "./clients.component.css"
})
export class ClientsComponent {
  public clients = [
    {
      name: "freeCodeCamp",
      link: "https://freecodecamp.org",
      title: "Web Developer, Discord Administrator",
      avatar: "freeCodeCamp.png",
      since: "December 2020"
    },
    {
      name: "Streamcord",
      link: "https://streamcord.io",
      title: "Community Manager",
      avatar: "streamcord.jpg",
      since: "August 2021"
    },
    {
      name: "Rythm",
      link: "https://rythm.fm",
      title: "Senior Integrations Engineer",
      avatar: "rythm.png",
      since: "April 2022"
    }
  ];
  public loading = true;
  constructor() {
    new Promise((resolve) => setTimeout(resolve, 5000)).then(
      () => (this.loading = false)
    );
  }
}
