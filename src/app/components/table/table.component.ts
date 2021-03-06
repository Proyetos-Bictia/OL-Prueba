import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() clients: Client[] = []
  @Input() search: Partial<Client>
  @Output() clientOutput: EventEmitter<Client> = new EventEmitter();
  @Output() deleteClientOutput: EventEmitter<Client> = new EventEmitter();

  clientsAlgo: any[] = ['', '', '', '']

  constructor() { }

  ngOnInit() {
  }

  editClient(client: Client) {
    this.clientOutput.emit(client)
  }

  deleteClient(id) {
    this.deleteClientOutput.emit(id);
  }

}
