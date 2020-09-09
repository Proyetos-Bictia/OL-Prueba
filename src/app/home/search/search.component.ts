import { Component, OnInit } from '@angular/core';
//NGRx
import { Store } from '@ngrx/store';
import * as searchAction from '../search.action'

import { FormGroup, FormBuilder } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup

  constructor(private fb: FormBuilder,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.formBuilder()
  }

  private formBuilder() {
    this.searchForm = this.fb.group({
      name: [''],
      lastName: [''],
      document: [''],
      rol: [''],
      state: [null],
      email: ['']
    })
  }

  filtrar() {
    this.store.dispatch(searchAction.setSearch({ client: this.searchForm.value }))
  }

  resetForm() {
    const initialState = {
      name: '',
      lastName: '',
      document: '',
      rol: '',
      state: null,
      email: ''
    }
    this.searchForm.reset(initialState)
    this.store.dispatch(searchAction.clearSearch())
  }

}
