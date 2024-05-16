import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'solicitudes',
    loadComponent: () => import('./componentes/solicitudes/solicitudes.component')
  },
  {
    path: 'registro',
    loadComponent: () => import('./componentes/solicitudesform/solicitudesform.component')
  },
  {
    path: '',
    loadComponent: () => import('./componentes/inicio/inicio.component')
  }
];
