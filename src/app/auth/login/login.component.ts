import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from "sweetalert2";

//NgRx
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as ui from '../../shared/ui.actions';
import * as auth from '../auth.actions';

import { UserService } from "../../core/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder,
    private store: Store<AppState>,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.formBuilder()
  }

  private formBuilder() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  save() {
    this.store.dispatch(ui.setLoading())
    setTimeout(() => {
      this.userService.loginUser(this.loginForm.value).subscribe(data => {
        this.store.dispatch(ui.setLoading())
        this.store.dispatch(auth.setUser({ user: data }))
        localStorage.setItem('userOL', JSON.stringify(data))
        this.router.navigate(['/home'])
      }, err => {
        Swal({
          title: 'Error', 
          text: err.error.error, 
          type: 'error'
        })
        this.store.dispatch(ui.setLoading())
      })
    }, 1000);

  }
}
