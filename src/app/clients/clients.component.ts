import { Component, OnInit } from '@angular/core';
import { clients } from 'src/assets/data/clients';
import { Client } from 'src/assets/interfaces/ClientMember';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  public clients: Client[] = [];

  constructor() {}

  ngOnInit(): void {
    this.clients = clients;
  }
}