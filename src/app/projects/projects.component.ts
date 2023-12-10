import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.css"
})
export class ProjectsComponent {
  public projects = [
    {
      name: "Becca Lyria",
      link: "https://becca.nhcarrigan.com",
      title: "Moderation/Community Management Discord Bot",
      avatar: "becca.png",
      since: "May 2020"
    },
    {
      name: "Beccalia",
      link: "https://nhcarrigan.itch.io",
      title: "RPGMaker Game Series",
      avatar: "beccalia.png",
      since: "November 2021"
    },
    {
      name: "Melody Iuvo",
      link: "https://github.com/naomi-lgbt/melody-iuvo",
      title: "Personal Assistant Discord Bot",
      avatar: "melody.png",
      since: "August 2023"
    }
  ];
  public loading = true;
  constructor() {
    new Promise((resolve) => setTimeout(resolve, 5000)).then(
      () => (this.loading = false)
    );
  }
}
