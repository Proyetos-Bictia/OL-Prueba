import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ol-software';

  loading: boolean = false

  constructor(private store: Store<AppState>) {
  }
  ngOnInit(): void {
    this.store.select('ui').subscribe(({ loading }) => this.loading = loading)
  }
}
