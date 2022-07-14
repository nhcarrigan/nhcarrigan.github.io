import { Component, OnInit } from '@angular/core';
import { team } from 'src/assets/data/team';
import { TeamMember } from 'src/assets/interfaces/TeamMember';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  public team: TeamMember[] = [];

  constructor() {}

  ngOnInit(): void {
    this.team = team;
  }
}
