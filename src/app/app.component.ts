import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as auth from './auth/auth.actions'

import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loading: boolean = false
  user: User = null

  constructor(private store: Store<AppState>) {
  }
  ngOnInit(): void {
    this.store.select('ui').subscribe(({ loading }) => this.loading = loading)
    this.user = JSON.parse(localStorage.getItem('userOL'))
    if (this.user) {
      this.store.dispatch(auth.setUser({ user: this.user }))
    }
  }
}
