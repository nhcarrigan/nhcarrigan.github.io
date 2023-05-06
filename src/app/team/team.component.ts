import { Component, OnInit } from '@angular/core';
import { team } from 'src/data/team';
import { TeamMember } from 'src/interfaces/TeamMember';

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
