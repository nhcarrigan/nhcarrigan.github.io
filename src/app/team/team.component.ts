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
      title: "Owner",
      avatar: "naomi.png",
      since: "December 2020"
    }
  ];
  public consultants = [
    {
      name: "Kaitlyn Nichols",
      link: "https://fruit.naomi.lgbt/home",
      title: "Pro-Bono Consultant",
      avatar: "kaitlyn.jpg",
      since: "November 2023"
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
