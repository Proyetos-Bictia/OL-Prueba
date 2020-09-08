import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  isDeploy: boolean = true
  subscriptionDeploy: Subscription

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscriptionDeploy = this.store.select('ui').subscribe(({ sideBar }) => this.isDeploy = sideBar)
  }

  ngOnDestroy(): void {
    this.subscriptionDeploy.unsubscribe()
  }

}
