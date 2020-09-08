import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as ui from '../../shared/ui.actions';
import * as clientActions from '../client.action';


import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  clients: Client[] = []
  isDeploy: boolean = true
  subscriptionDeploy: Subscription

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscriptionDeploy = this.store.subscribe(({ ui, clients }) => {
      this.isDeploy = ui.sideBar
      this.clients = clients.clients
    })
  }

  ngOnDestroy(): void {
    this.subscriptionDeploy.unsubscribe()
  }

  openModal() {
    this.store.dispatch(ui.setModal())
  }

  editClient(client) {
    this.store.dispatch(clientActions.setClientSelected({ clientToSet: client }))
    this.store.dispatch(ui.setModal())
  }

}
