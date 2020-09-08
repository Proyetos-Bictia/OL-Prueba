import { Component } from '@angular/core';
//NgRx
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as ui from '../ui.actions'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private store: Store<AppState>) { }

  toogleSideBar() {
    this.store.dispatch(ui.setSideBar())
  }

}
