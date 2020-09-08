import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [LoadingComponent, NavbarComponent, FooterComponent, SidebarComponent],
  exports: [LoadingComponent, NavbarComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
