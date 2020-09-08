import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

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
