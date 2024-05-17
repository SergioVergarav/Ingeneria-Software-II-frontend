import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./componentes/solicitudes/solicitudes.component')
  },
  {
    path: 'tarjetas',
    loadComponent: () =>import('./componentes/tarjetas/tarjetas.component')
  },
  {
    path: 'registro',
    loadComponent: () => import('./componentes/solicitudesform/solicitudesform.component')
  }
];
