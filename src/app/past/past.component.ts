import { Component, OnInit } from '@angular/core';
import { pastClients } from 'src/data/clients';
import { Client, PastClient } from 'src/interfaces/ClientMember';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css'],
})
export class PastComponent implements OnInit {
  public clients: PastClient[] = [];

  constructor() {}

  ngOnInit(): void {
    this.clients = pastClients;
  }
}
