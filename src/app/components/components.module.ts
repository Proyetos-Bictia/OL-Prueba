import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { TableComponent } from './table/table.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
    CommonModule,
    CoreModule,
    NgxSkeletonLoaderModule
  ]
})
export class ComponentsModule { }
