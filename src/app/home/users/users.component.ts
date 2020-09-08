import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from "sweetalert2";

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as ui from '../../shared/ui.actions';
import * as clientActions from '../client.action';

import { ClientService } from 'src/app/core/services/client.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  clients: Client[] = []
  search: Client = null
  isDeploy: boolean = true
  subscriptionDeploy: Subscription


  constructor(private store: Store<AppState>,
    private clientService: ClientService) { }

  ngOnInit() {
    this.subscriptionDeploy = this.store.subscribe(({ ui, clients, search }) => {
      this.isDeploy = ui.sideBar
      this.clients = clients.clients
      this.search = search.client
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

  deleteClient(id) {
    Swal({
      title: 'Esta seguro?',
      text: 'Usted no podra recuperar la información perdida',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Borrarlo',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.value) {
        this.clientService.deleteClient(id).subscribe(() => {
          this.store.dispatch(clientActions.deleteClient({ deleteClient: id }))
          Swal(
            'Eliminado!',
            'El usuario fue eliminido',
            'success'
          )
        })
      } 
    })
  }

}
