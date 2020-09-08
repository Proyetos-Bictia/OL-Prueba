import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FilterActualPipe } from './filter-actual.pipe';

@NgModule({
  declarations: [TableComponent, FilterActualPipe],
  exports: [TableComponent],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
