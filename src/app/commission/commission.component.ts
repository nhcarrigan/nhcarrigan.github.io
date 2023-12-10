import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-commission",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./commission.component.html",
  styleUrl: "./commission.component.css"
})
export class CommissionComponent {
  public loading = true;
  constructor() {
    new Promise((resolve) => setTimeout(resolve, 5000)).then(
      () => (this.loading = false)
    );
  }
}
