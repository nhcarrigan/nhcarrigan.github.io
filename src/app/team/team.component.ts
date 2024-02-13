import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

/**
 *
 */
@Component({
  selector: "app-team",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./team.component.html",
  styleUrl: "./team.component.css"
})
export class TeamComponent {
  public employees = [
    {
      name: "Naomi Carrigan",
      link: "https://naomi.lgbt",
      title: "CEO",
      avatar: "naomi.png",
      since: "December 2020"
    }
  ];
  public consultants = [
    {
      name: "Denna",
      link: "https://denna.naomi.lgbt",
      title: "Financial Consultant",
      avatar: "denna.png",
      since: "December 2022"
    },
    {
      name: "Tim",
      link: "https://github.com/timiro",
      title: "Engineering Consultant",
      avatar: "tim.png",
      since: "December 2022"
    },
    {
      name: "a2937",
      link: "https://github.com/a2937",
      title: "Engineering Consultant / Community Moderator",
      avatar: "a2937.png",
      since: "April 2023"
    },
    {
      name: "Kaitlyn",
      link: "https://fruit.naomi.lgbt/home",
      title: "Engineering Consultant / Community Moderator",
      avatar: "kaitlyn.jpg",
      since: "November 2023"
    }
  ];
  public moderators = [
    {
      name: "Alastair",
      title: "Community Moderator",
      avatar: "alastair.png",
      since: "August 2023"
    },
    {
      name: "Ilenia",
      title: "Community Moderator",
      avatar: "ilenia.png",
      since: "August 2023"
    }
  ];
  public loading = false;
  /**
   *
   */
  constructor() {
    new Promise((resolve) => setTimeout(resolve, 5000)).then(
      () => (this.loading = false)
    );
  }
}
