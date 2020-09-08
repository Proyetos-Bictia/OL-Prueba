import { Component } from '@angular/core';
import { Router } from '@angular/router';
//NgRx
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as ui from '../ui.actions'
import * as auth from '../../auth/auth.actions'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private store: Store<AppState>,
    private router: Router) { }

  toogleSideBar() {
    this.store.dispatch(ui.setSideBar())
  }

  logout() {
    this.store.dispatch(auth.unSetUser())
    localStorage.removeItem('userOL')
    this.router.navigate(['/auth'])
  }

}
