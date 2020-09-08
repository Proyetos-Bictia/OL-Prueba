import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Programación',
      icono: 'fas fa-address-card',
    },
    {
      titulo: 'Gestión de operaciones',
      icono: 'fas fa-hourglass-start',
    },
    {
      titulo: 'Perfiles',
      icono: 'fas fa-brain',
    },
    {
      titulo: 'Roles',
      icono: 'fab fa-angular',
    },
    {
      titulo: 'Usuarios',
      icono: 'fas fa-user',
    },
  ]

  constructor() { }
}
