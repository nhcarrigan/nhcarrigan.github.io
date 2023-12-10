import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

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
      title: "Owner/Sole Proprietor",
      avatar: "naomi.png",
      since: "December 2020"
    }
  ];
  public loading = true;
  constructor() {
    new Promise((resolve) => setTimeout(resolve, 5000)).then(
      () => (this.loading = false)
    );
  }
}
