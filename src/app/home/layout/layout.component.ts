import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

import { ClientService } from 'src/app/core/services/client.service';
import { setClients } from '../client.action';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  isDeploy: boolean = true
  isOpenModal: boolean = false
  subscriptionDeploy: Subscription

  constructor(private store: Store<AppState>,
    private clientService: ClientService) { }

  ngOnInit() {
    this.getClients()
    this.subscriptionDeploy = this.store.select('ui').subscribe(({ sideBar, modal }) => {
      this.isDeploy = sideBar
      this.isOpenModal = modal
    })
  }

  ngOnDestroy(): void {
    this.subscriptionDeploy.unsubscribe()
  }

  getClients() {
    this.clientService.getClients().subscribe(data => this.store.dispatch(setClients({ clients: data })))
  }

}
