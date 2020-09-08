import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as clientActions from "../client.action";
import * as uiActions from "../../shared/ui.actions";

import { ClientService } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  clientForm: FormGroup
  clientSelectedSubscription: Subscription
  isThereClient: boolean = false

  constructor(private fb: FormBuilder,
    private store: Store<AppState>,
    private clientService: ClientService) { }

  ngOnDestroy(): void {
    this.clientSelectedSubscription.unsubscribe()
    this.store.dispatch(clientActions.unSetClientSelected())
  }

  ngOnInit() {
    this.formBuilder()
    this.clientSelectedSubscription = this.store.select('clients').subscribe(({ clientSelected }) => {
      if (clientSelected) {
        this.clientForm.patchValue(clientSelected)
        this.isThereClient = true
        this.placePassword.disable()
      } else {
        this.isThereClient = false
      }
    })
  }

  private formBuilder() {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      document: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(0|[1-9][0-9]*)$')]],
      rol: ['', [Validators.required]],
      state: [null, [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$'), Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  save() {
    this.clientService.createClient(this.clientForm.value).subscribe((client) => {
      this.store.dispatch(clientActions.createClient({ newClient: client }))
      this.store.dispatch(uiActions.setModal())
    })
  }

  edit() {
    console.log(this.clientForm.value)
  }

  closeModal() {
    this.store.dispatch(uiActions.setModal())
  }

  get placeName() { return this.clientForm.get('name') }
  get placeLastName() { return this.clientForm.get('lastName') }
  get placeDocument() { return this.clientForm.get('document') }
  get placeRol() { return this.clientForm.get('rol') }
  get placeState() { return this.clientForm.get('state') }
  get placePassword() { return this.clientForm.get('password') }
  get placePhone() { return this.clientForm.get('phone') }
  get placeEmail() { return this.clientForm.get('email') }

}
