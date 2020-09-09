import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Programación',
      icono: 'fas fa-address-card',
      component: 'home'
    },
    {
      titulo: 'Gestión de operaciones',
      icono: 'fas fa-hourglass-start',
      component: 'home'
    },
    {
      titulo: 'Perfiles',
      icono: 'fas fa-brain',
      component: 'home'
    },
    {
      titulo: 'Roles',
      icono: 'fab fa-angular',
      component: 'home'
    },
    {
      titulo: 'Usuarios',
      icono: 'fas fa-user',
      component: 'users'
    },
  ]

  constructor() { }
}
