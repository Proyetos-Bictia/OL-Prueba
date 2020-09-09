import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterClientsPipe } from './pipes/filter-clients.pipe';

@NgModule({
  declarations: [FilterClientsPipe],
  exports: [FilterClientsPipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
