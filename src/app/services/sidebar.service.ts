import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Progress Bar', url: 'progress' },
        { titulo: 'Gráfica1', url: 'grafica1' }
      ]
    }
  ];

  constructor() { }
}
