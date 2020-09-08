import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
let Swal = require('sweetalert2')

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
    private userService: UserService) { }

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
      }, err => {
        Swal.fire('Error', err.error.error, 'error')
        this.store.dispatch(ui.setLoading())
      })
    }, 1000);

  }
}
