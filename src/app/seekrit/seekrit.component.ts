import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Seekrits } from "../../config/Seekrits";

/**
 *
 */
@Component({
  selector: "app-seekrit",
  standalone: true,
  imports: [],
  templateUrl: "./seekrit.component.html",
  styleUrl: "./seekrit.component.css"
})
export class SeekritComponent {
  public slug = "";
  public content = "";
  private seekrits = Seekrits;
  /**
   * @class
   * @param {ActivatedRoute} route The current route of the application.
   */
  constructor(private route: ActivatedRoute) {
    this.slug = this.route.snapshot.params["slug"] ?? "";
    this.content = (
      this.seekrits.find((s) => s.slug === this.slug)?.text ?? ["You got lost."]
    )
      .map((line) => `<p>${line}</p>`)
      .join("");
  }
}
