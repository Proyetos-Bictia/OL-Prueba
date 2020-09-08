import { Injectable } from '@angular/core';
import { CanActivate, Router, Route, CanLoad } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>,
    private router: Router) {
  }

  canActivate() {
    if( localStorage.getItem('userOL')) {
      return true
    } else {
      this.router.navigate(['/auth'])
      return false
    }
  }

}
