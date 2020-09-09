import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class ComponentsModule { }
